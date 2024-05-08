/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSuggestions } from "../graphql/queries";
import { updateSuggestions } from "../graphql/mutations";
const client = generateClient();
export default function SuggestionsUpdateForm(props) {
  const {
    id: idProp,
    suggestions: suggestionsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    suggestion: "",
  };
  const [suggestion, setSuggestion] = React.useState(initialValues.suggestion);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = suggestionsRecord
      ? { ...initialValues, ...suggestionsRecord }
      : initialValues;
    setSuggestion(cleanValues.suggestion);
    setErrors({});
  };
  const [suggestionsRecord, setSuggestionsRecord] =
    React.useState(suggestionsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSuggestions.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSuggestions
        : suggestionsModelProp;
      setSuggestionsRecord(record);
    };
    queryData();
  }, [idProp, suggestionsModelProp]);
  React.useEffect(resetStateValues, [suggestionsRecord]);
  const validations = {
    suggestion: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          suggestion,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSuggestions.replaceAll("__typename", ""),
            variables: {
              input: {
                id: suggestionsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SuggestionsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Suggestion"
        isRequired={true}
        isReadOnly={false}
        value={suggestion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              suggestion: value,
            };
            const result = onChange(modelFields);
            value = result?.suggestion ?? value;
          }
          if (errors.suggestion?.hasError) {
            runValidationTasks("suggestion", value);
          }
          setSuggestion(value);
        }}
        onBlur={() => runValidationTasks("suggestion", suggestion)}
        errorMessage={errors.suggestion?.errorMessage}
        hasError={errors.suggestion?.hasError}
        {...getOverrideProps(overrides, "suggestion")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || suggestionsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || suggestionsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

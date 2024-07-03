/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createStandings } from "../graphql/mutations";
const client = generateClient();
export default function StandingsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    started: false,
    finished: false,
  };
  const [started, setStarted] = React.useState(initialValues.started);
  const [finished, setFinished] = React.useState(initialValues.finished);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStarted(initialValues.started);
    setFinished(initialValues.finished);
    setErrors({});
  };
  const validations = {
    started: [],
    finished: [],
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
          started,
          finished,
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
            query: createStandings.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StandingsCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Started"
        defaultChecked={false}
        isDisabled={false}
        isChecked={started}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              started: value,
              finished,
            };
            const result = onChange(modelFields);
            value = result?.started ?? value;
          }
          if (errors.started?.hasError) {
            runValidationTasks("started", value);
          }
          setStarted(value);
        }}
        onBlur={() => runValidationTasks("started", started)}
        errorMessage={errors.started?.errorMessage}
        hasError={errors.started?.hasError}
        {...getOverrideProps(overrides, "started")}
      ></SwitchField>
      <SwitchField
        label="Finished"
        defaultChecked={false}
        isDisabled={false}
        isChecked={finished}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              started,
              finished: value,
            };
            const result = onChange(modelFields);
            value = result?.finished ?? value;
          }
          if (errors.finished?.hasError) {
            runValidationTasks("finished", value);
          }
          setFinished(value);
        }}
        onBlur={() => runValidationTasks("finished", finished)}
        errorMessage={errors.finished?.errorMessage}
        hasError={errors.finished?.hasError}
        {...getOverrideProps(overrides, "finished")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

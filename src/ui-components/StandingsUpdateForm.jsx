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
import { getStandings } from "../graphql/queries";
import { updateStandings } from "../graphql/mutations";
const client = generateClient();
export default function StandingsUpdateForm(props) {
  const {
    id: idProp,
    standings: standingsModelProp,
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
    const cleanValues = standingsRecord
      ? { ...initialValues, ...standingsRecord }
      : initialValues;
    setStarted(cleanValues.started);
    setFinished(cleanValues.finished);
    setErrors({});
  };
  const [standingsRecord, setStandingsRecord] =
    React.useState(standingsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStandings.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStandings
        : standingsModelProp;
      setStandingsRecord(record);
    };
    queryData();
  }, [idProp, standingsModelProp]);
  React.useEffect(resetStateValues, [standingsRecord]);
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
          started: started ?? null,
          finished: finished ?? null,
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
            query: updateStandings.replaceAll("__typename", ""),
            variables: {
              input: {
                id: standingsRecord.id,
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
      {...getOverrideProps(overrides, "StandingsUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || standingsModelProp)}
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
              !(idProp || standingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

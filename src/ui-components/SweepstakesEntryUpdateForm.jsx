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
import { getSweepstakesEntry } from "../graphql/queries";
import { updateSweepstakesEntry } from "../graphql/mutations";
const client = generateClient();
export default function SweepstakesEntryUpdateForm(props) {
  const {
    id: idProp,
    sweepstakesEntry: sweepstakesEntryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    game: "",
    steam_id: "",
    speedrun_link: "",
    screenshot: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [game, setGame] = React.useState(initialValues.game);
  const [steam_id, setSteam_id] = React.useState(initialValues.steam_id);
  const [speedrun_link, setSpeedrun_link] = React.useState(
    initialValues.speedrun_link
  );
  const [screenshot, setScreenshot] = React.useState(initialValues.screenshot);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sweepstakesEntryRecord
      ? { ...initialValues, ...sweepstakesEntryRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setGame(cleanValues.game);
    setSteam_id(cleanValues.steam_id);
    setSpeedrun_link(cleanValues.speedrun_link);
    setScreenshot(cleanValues.screenshot);
    setErrors({});
  };
  const [sweepstakesEntryRecord, setSweepstakesEntryRecord] = React.useState(
    sweepstakesEntryModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSweepstakesEntry.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSweepstakesEntry
        : sweepstakesEntryModelProp;
      setSweepstakesEntryRecord(record);
    };
    queryData();
  }, [idProp, sweepstakesEntryModelProp]);
  React.useEffect(resetStateValues, [sweepstakesEntryRecord]);
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    game: [{ type: "Required" }],
    steam_id: [{ type: "Required" }],
    speedrun_link: [{ type: "Required" }],
    screenshot: [],
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
          name,
          email,
          game,
          steam_id,
          speedrun_link,
          screenshot: screenshot ?? null,
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
            query: updateSweepstakesEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                id: sweepstakesEntryRecord.id,
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
      {...getOverrideProps(overrides, "SweepstakesEntryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              game,
              steam_id,
              speedrun_link,
              screenshot,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              game,
              steam_id,
              speedrun_link,
              screenshot,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Game"
        isRequired={true}
        isReadOnly={false}
        value={game}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              game: value,
              steam_id,
              speedrun_link,
              screenshot,
            };
            const result = onChange(modelFields);
            value = result?.game ?? value;
          }
          if (errors.game?.hasError) {
            runValidationTasks("game", value);
          }
          setGame(value);
        }}
        onBlur={() => runValidationTasks("game", game)}
        errorMessage={errors.game?.errorMessage}
        hasError={errors.game?.hasError}
        {...getOverrideProps(overrides, "game")}
      ></TextField>
      <TextField
        label="Steam id"
        isRequired={true}
        isReadOnly={false}
        value={steam_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              game,
              steam_id: value,
              speedrun_link,
              screenshot,
            };
            const result = onChange(modelFields);
            value = result?.steam_id ?? value;
          }
          if (errors.steam_id?.hasError) {
            runValidationTasks("steam_id", value);
          }
          setSteam_id(value);
        }}
        onBlur={() => runValidationTasks("steam_id", steam_id)}
        errorMessage={errors.steam_id?.errorMessage}
        hasError={errors.steam_id?.hasError}
        {...getOverrideProps(overrides, "steam_id")}
      ></TextField>
      <TextField
        label="Speedrun link"
        isRequired={true}
        isReadOnly={false}
        value={speedrun_link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              game,
              steam_id,
              speedrun_link: value,
              screenshot,
            };
            const result = onChange(modelFields);
            value = result?.speedrun_link ?? value;
          }
          if (errors.speedrun_link?.hasError) {
            runValidationTasks("speedrun_link", value);
          }
          setSpeedrun_link(value);
        }}
        onBlur={() => runValidationTasks("speedrun_link", speedrun_link)}
        errorMessage={errors.speedrun_link?.errorMessage}
        hasError={errors.speedrun_link?.hasError}
        {...getOverrideProps(overrides, "speedrun_link")}
      ></TextField>
      <TextField
        label="Screenshot"
        isRequired={false}
        isReadOnly={false}
        value={screenshot}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              game,
              steam_id,
              speedrun_link,
              screenshot: value,
            };
            const result = onChange(modelFields);
            value = result?.screenshot ?? value;
          }
          if (errors.screenshot?.hasError) {
            runValidationTasks("screenshot", value);
          }
          setScreenshot(value);
        }}
        onBlur={() => runValidationTasks("screenshot", screenshot)}
        errorMessage={errors.screenshot?.errorMessage}
        hasError={errors.screenshot?.hasError}
        {...getOverrideProps(overrides, "screenshot")}
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
          isDisabled={!(idProp || sweepstakesEntryModelProp)}
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
              !(idProp || sweepstakesEntryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

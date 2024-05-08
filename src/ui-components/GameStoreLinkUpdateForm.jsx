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
import { getGameStoreLink } from "../graphql/queries";
import { updateGameStoreLink } from "../graphql/mutations";
const client = generateClient();
export default function GameStoreLinkUpdateForm(props) {
  const {
    id: idProp,
    gameStoreLink: gameStoreLinkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    steam: "",
    epic: "",
    playstation: "",
    xbox: "",
    nintendo: "",
  };
  const [steam, setSteam] = React.useState(initialValues.steam);
  const [epic, setEpic] = React.useState(initialValues.epic);
  const [playstation, setPlaystation] = React.useState(
    initialValues.playstation
  );
  const [xbox, setXbox] = React.useState(initialValues.xbox);
  const [nintendo, setNintendo] = React.useState(initialValues.nintendo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameStoreLinkRecord
      ? { ...initialValues, ...gameStoreLinkRecord }
      : initialValues;
    setSteam(cleanValues.steam);
    setEpic(cleanValues.epic);
    setPlaystation(cleanValues.playstation);
    setXbox(cleanValues.xbox);
    setNintendo(cleanValues.nintendo);
    setErrors({});
  };
  const [gameStoreLinkRecord, setGameStoreLinkRecord] = React.useState(
    gameStoreLinkModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGameStoreLink.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGameStoreLink
        : gameStoreLinkModelProp;
      setGameStoreLinkRecord(record);
    };
    queryData();
  }, [idProp, gameStoreLinkModelProp]);
  React.useEffect(resetStateValues, [gameStoreLinkRecord]);
  const validations = {
    steam: [{ type: "URL" }],
    epic: [{ type: "URL" }],
    playstation: [{ type: "URL" }],
    xbox: [{ type: "URL" }],
    nintendo: [{ type: "URL" }],
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
          steam: steam ?? null,
          epic: epic ?? null,
          playstation: playstation ?? null,
          xbox: xbox ?? null,
          nintendo: nintendo ?? null,
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
            query: updateGameStoreLink.replaceAll("__typename", ""),
            variables: {
              input: {
                id: gameStoreLinkRecord.id,
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
      {...getOverrideProps(overrides, "GameStoreLinkUpdateForm")}
      {...rest}
    >
      <TextField
        label="Steam"
        isRequired={false}
        isReadOnly={false}
        value={steam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steam: value,
              epic,
              playstation,
              xbox,
              nintendo,
            };
            const result = onChange(modelFields);
            value = result?.steam ?? value;
          }
          if (errors.steam?.hasError) {
            runValidationTasks("steam", value);
          }
          setSteam(value);
        }}
        onBlur={() => runValidationTasks("steam", steam)}
        errorMessage={errors.steam?.errorMessage}
        hasError={errors.steam?.hasError}
        {...getOverrideProps(overrides, "steam")}
      ></TextField>
      <TextField
        label="Epic"
        isRequired={false}
        isReadOnly={false}
        value={epic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steam,
              epic: value,
              playstation,
              xbox,
              nintendo,
            };
            const result = onChange(modelFields);
            value = result?.epic ?? value;
          }
          if (errors.epic?.hasError) {
            runValidationTasks("epic", value);
          }
          setEpic(value);
        }}
        onBlur={() => runValidationTasks("epic", epic)}
        errorMessage={errors.epic?.errorMessage}
        hasError={errors.epic?.hasError}
        {...getOverrideProps(overrides, "epic")}
      ></TextField>
      <TextField
        label="Playstation"
        isRequired={false}
        isReadOnly={false}
        value={playstation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steam,
              epic,
              playstation: value,
              xbox,
              nintendo,
            };
            const result = onChange(modelFields);
            value = result?.playstation ?? value;
          }
          if (errors.playstation?.hasError) {
            runValidationTasks("playstation", value);
          }
          setPlaystation(value);
        }}
        onBlur={() => runValidationTasks("playstation", playstation)}
        errorMessage={errors.playstation?.errorMessage}
        hasError={errors.playstation?.hasError}
        {...getOverrideProps(overrides, "playstation")}
      ></TextField>
      <TextField
        label="Xbox"
        isRequired={false}
        isReadOnly={false}
        value={xbox}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steam,
              epic,
              playstation,
              xbox: value,
              nintendo,
            };
            const result = onChange(modelFields);
            value = result?.xbox ?? value;
          }
          if (errors.xbox?.hasError) {
            runValidationTasks("xbox", value);
          }
          setXbox(value);
        }}
        onBlur={() => runValidationTasks("xbox", xbox)}
        errorMessage={errors.xbox?.errorMessage}
        hasError={errors.xbox?.hasError}
        {...getOverrideProps(overrides, "xbox")}
      ></TextField>
      <TextField
        label="Nintendo"
        isRequired={false}
        isReadOnly={false}
        value={nintendo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steam,
              epic,
              playstation,
              xbox,
              nintendo: value,
            };
            const result = onChange(modelFields);
            value = result?.nintendo ?? value;
          }
          if (errors.nintendo?.hasError) {
            runValidationTasks("nintendo", value);
          }
          setNintendo(value);
        }}
        onBlur={() => runValidationTasks("nintendo", nintendo)}
        errorMessage={errors.nintendo?.errorMessage}
        hasError={errors.nintendo?.hasError}
        {...getOverrideProps(overrides, "nintendo")}
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
          isDisabled={!(idProp || gameStoreLinkModelProp)}
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
              !(idProp || gameStoreLinkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

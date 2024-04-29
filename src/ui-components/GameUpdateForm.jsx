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
import { getGame } from "../graphql/queries";
import { updateGame } from "../graphql/mutations";
const client = generateClient();
export default function GameUpdateForm(props) {
  const {
    id: idProp,
    game: gameModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    game_title: "",
    run_category: "",
    sr_game_link: "",
    background_image: "",
    game_box_image: "",
    game_info: "",
  };
  const [game_title, setGame_title] = React.useState(initialValues.game_title);
  const [run_category, setRun_category] = React.useState(
    initialValues.run_category
  );
  const [sr_game_link, setSr_game_link] = React.useState(
    initialValues.sr_game_link
  );
  const [background_image, setBackground_image] = React.useState(
    initialValues.background_image
  );
  const [game_box_image, setGame_box_image] = React.useState(
    initialValues.game_box_image
  );
  const [game_info, setGame_info] = React.useState(initialValues.game_info);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameRecord
      ? { ...initialValues, ...gameRecord }
      : initialValues;
    setGame_title(cleanValues.game_title);
    setRun_category(cleanValues.run_category);
    setSr_game_link(cleanValues.sr_game_link);
    setBackground_image(cleanValues.background_image);
    setGame_box_image(cleanValues.game_box_image);
    setGame_info(cleanValues.game_info);
    setErrors({});
  };
  const [gameRecord, setGameRecord] = React.useState(gameModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGame.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGame
        : gameModelProp;
      setGameRecord(record);
    };
    queryData();
  }, [idProp, gameModelProp]);
  React.useEffect(resetStateValues, [gameRecord]);
  const validations = {
    game_title: [],
    run_category: [],
    sr_game_link: [],
    background_image: [],
    game_box_image: [],
    game_info: [],
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
          game_title: game_title ?? null,
          run_category: run_category ?? null,
          sr_game_link: sr_game_link ?? null,
          background_image: background_image ?? null,
          game_box_image: game_box_image ?? null,
          game_info: game_info ?? null,
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
            query: updateGame.replaceAll("__typename", ""),
            variables: {
              input: {
                id: gameRecord.id,
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
      {...getOverrideProps(overrides, "GameUpdateForm")}
      {...rest}
    >
      <TextField
        label="Game title"
        isRequired={false}
        isReadOnly={false}
        value={game_title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title: value,
              run_category,
              sr_game_link,
              background_image,
              game_box_image,
              game_info,
            };
            const result = onChange(modelFields);
            value = result?.game_title ?? value;
          }
          if (errors.game_title?.hasError) {
            runValidationTasks("game_title", value);
          }
          setGame_title(value);
        }}
        onBlur={() => runValidationTasks("game_title", game_title)}
        errorMessage={errors.game_title?.errorMessage}
        hasError={errors.game_title?.hasError}
        {...getOverrideProps(overrides, "game_title")}
      ></TextField>
      <TextField
        label="Run category"
        isRequired={false}
        isReadOnly={false}
        value={run_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              run_category: value,
              sr_game_link,
              background_image,
              game_box_image,
              game_info,
            };
            const result = onChange(modelFields);
            value = result?.run_category ?? value;
          }
          if (errors.run_category?.hasError) {
            runValidationTasks("run_category", value);
          }
          setRun_category(value);
        }}
        onBlur={() => runValidationTasks("run_category", run_category)}
        errorMessage={errors.run_category?.errorMessage}
        hasError={errors.run_category?.hasError}
        {...getOverrideProps(overrides, "run_category")}
      ></TextField>
      <TextField
        label="Sr game link"
        isRequired={false}
        isReadOnly={false}
        value={sr_game_link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              run_category,
              sr_game_link: value,
              background_image,
              game_box_image,
              game_info,
            };
            const result = onChange(modelFields);
            value = result?.sr_game_link ?? value;
          }
          if (errors.sr_game_link?.hasError) {
            runValidationTasks("sr_game_link", value);
          }
          setSr_game_link(value);
        }}
        onBlur={() => runValidationTasks("sr_game_link", sr_game_link)}
        errorMessage={errors.sr_game_link?.errorMessage}
        hasError={errors.sr_game_link?.hasError}
        {...getOverrideProps(overrides, "sr_game_link")}
      ></TextField>
      <TextField
        label="Background image"
        isRequired={false}
        isReadOnly={false}
        value={background_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              run_category,
              sr_game_link,
              background_image: value,
              game_box_image,
              game_info,
            };
            const result = onChange(modelFields);
            value = result?.background_image ?? value;
          }
          if (errors.background_image?.hasError) {
            runValidationTasks("background_image", value);
          }
          setBackground_image(value);
        }}
        onBlur={() => runValidationTasks("background_image", background_image)}
        errorMessage={errors.background_image?.errorMessage}
        hasError={errors.background_image?.hasError}
        {...getOverrideProps(overrides, "background_image")}
      ></TextField>
      <TextField
        label="Game box image"
        isRequired={false}
        isReadOnly={false}
        value={game_box_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              run_category,
              sr_game_link,
              background_image,
              game_box_image: value,
              game_info,
            };
            const result = onChange(modelFields);
            value = result?.game_box_image ?? value;
          }
          if (errors.game_box_image?.hasError) {
            runValidationTasks("game_box_image", value);
          }
          setGame_box_image(value);
        }}
        onBlur={() => runValidationTasks("game_box_image", game_box_image)}
        errorMessage={errors.game_box_image?.errorMessage}
        hasError={errors.game_box_image?.hasError}
        {...getOverrideProps(overrides, "game_box_image")}
      ></TextField>
      <TextField
        label="Game info"
        isRequired={false}
        isReadOnly={false}
        value={game_info}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              run_category,
              sr_game_link,
              background_image,
              game_box_image,
              game_info: value,
            };
            const result = onChange(modelFields);
            value = result?.game_info ?? value;
          }
          if (errors.game_info?.hasError) {
            runValidationTasks("game_info", value);
          }
          setGame_info(value);
        }}
        onBlur={() => runValidationTasks("game_info", game_info)}
        errorMessage={errors.game_info?.errorMessage}
        hasError={errors.game_info?.hasError}
        {...getOverrideProps(overrides, "game_info")}
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
          isDisabled={!(idProp || gameModelProp)}
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
              !(idProp || gameModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

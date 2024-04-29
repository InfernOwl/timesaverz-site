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
import { getPlaceholder } from "../graphql/queries";
import { updatePlaceholder } from "../graphql/mutations";
const client = generateClient();
export default function PlaceholderUpdateForm(props) {
  const {
    id: idProp,
    placeholder: placeholderModelProp,
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
    game_image_alt: "",
    background_image: "",
    sweeps_winner: "",
  };
  const [game_title, setGame_title] = React.useState(initialValues.game_title);
  const [game_image_alt, setGame_image_alt] = React.useState(
    initialValues.game_image_alt
  );
  const [background_image, setBackground_image] = React.useState(
    initialValues.background_image
  );
  const [sweeps_winner, setSweeps_winner] = React.useState(
    initialValues.sweeps_winner
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = placeholderRecord
      ? { ...initialValues, ...placeholderRecord }
      : initialValues;
    setGame_title(cleanValues.game_title);
    setGame_image_alt(cleanValues.game_image_alt);
    setBackground_image(cleanValues.background_image);
    setSweeps_winner(cleanValues.sweeps_winner);
    setErrors({});
  };
  const [placeholderRecord, setPlaceholderRecord] =
    React.useState(placeholderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPlaceholder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPlaceholder
        : placeholderModelProp;
      setPlaceholderRecord(record);
    };
    queryData();
  }, [idProp, placeholderModelProp]);
  React.useEffect(resetStateValues, [placeholderRecord]);
  const validations = {
    game_title: [],
    game_image_alt: [],
    background_image: [{ type: "URL" }],
    sweeps_winner: [],
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
          game_image_alt: game_image_alt ?? null,
          background_image: background_image ?? null,
          sweeps_winner: sweeps_winner ?? null,
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
            query: updatePlaceholder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: placeholderRecord.id,
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
      {...getOverrideProps(overrides, "PlaceholderUpdateForm")}
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
              game_image_alt,
              background_image,
              sweeps_winner,
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
        label="Game image alt"
        isRequired={false}
        isReadOnly={false}
        value={game_image_alt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              game_image_alt: value,
              background_image,
              sweeps_winner,
            };
            const result = onChange(modelFields);
            value = result?.game_image_alt ?? value;
          }
          if (errors.game_image_alt?.hasError) {
            runValidationTasks("game_image_alt", value);
          }
          setGame_image_alt(value);
        }}
        onBlur={() => runValidationTasks("game_image_alt", game_image_alt)}
        errorMessage={errors.game_image_alt?.errorMessage}
        hasError={errors.game_image_alt?.hasError}
        {...getOverrideProps(overrides, "game_image_alt")}
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
              game_image_alt,
              background_image: value,
              sweeps_winner,
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
        label="Sweeps winner"
        isRequired={false}
        isReadOnly={false}
        value={sweeps_winner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_title,
              game_image_alt,
              background_image,
              sweeps_winner: value,
            };
            const result = onChange(modelFields);
            value = result?.sweeps_winner ?? value;
          }
          if (errors.sweeps_winner?.hasError) {
            runValidationTasks("sweeps_winner", value);
          }
          setSweeps_winner(value);
        }}
        onBlur={() => runValidationTasks("sweeps_winner", sweeps_winner)}
        errorMessage={errors.sweeps_winner?.errorMessage}
        hasError={errors.sweeps_winner?.hasError}
        {...getOverrideProps(overrides, "sweeps_winner")}
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
          isDisabled={!(idProp || placeholderModelProp)}
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
              !(idProp || placeholderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

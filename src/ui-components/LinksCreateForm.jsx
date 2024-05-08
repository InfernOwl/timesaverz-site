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
import { createLinks } from "../graphql/mutations";
const client = generateClient();
export default function LinksCreateForm(props) {
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
    twitter: "",
    instagram: "",
    twitch: "",
    tiktok: "",
    youtube: "",
    kofi: "",
  };
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [twitch, setTwitch] = React.useState(initialValues.twitch);
  const [tiktok, setTiktok] = React.useState(initialValues.tiktok);
  const [youtube, setYoutube] = React.useState(initialValues.youtube);
  const [kofi, setKofi] = React.useState(initialValues.kofi);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTwitter(initialValues.twitter);
    setInstagram(initialValues.instagram);
    setTwitch(initialValues.twitch);
    setTiktok(initialValues.tiktok);
    setYoutube(initialValues.youtube);
    setKofi(initialValues.kofi);
    setErrors({});
  };
  const validations = {
    twitter: [{ type: "URL" }],
    instagram: [{ type: "URL" }],
    twitch: [{ type: "URL" }],
    tiktok: [{ type: "URL" }],
    youtube: [{ type: "URL" }],
    kofi: [{ type: "URL" }],
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
          twitter,
          instagram,
          twitch,
          tiktok,
          youtube,
          kofi,
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
            query: createLinks.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "LinksCreateForm")}
      {...rest}
    >
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter: value,
              instagram,
              twitch,
              tiktok,
              youtube,
              kofi,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter,
              instagram: value,
              twitch,
              tiktok,
              youtube,
              kofi,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Twitch"
        isRequired={false}
        isReadOnly={false}
        value={twitch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter,
              instagram,
              twitch: value,
              tiktok,
              youtube,
              kofi,
            };
            const result = onChange(modelFields);
            value = result?.twitch ?? value;
          }
          if (errors.twitch?.hasError) {
            runValidationTasks("twitch", value);
          }
          setTwitch(value);
        }}
        onBlur={() => runValidationTasks("twitch", twitch)}
        errorMessage={errors.twitch?.errorMessage}
        hasError={errors.twitch?.hasError}
        {...getOverrideProps(overrides, "twitch")}
      ></TextField>
      <TextField
        label="Tiktok"
        isRequired={false}
        isReadOnly={false}
        value={tiktok}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter,
              instagram,
              twitch,
              tiktok: value,
              youtube,
              kofi,
            };
            const result = onChange(modelFields);
            value = result?.tiktok ?? value;
          }
          if (errors.tiktok?.hasError) {
            runValidationTasks("tiktok", value);
          }
          setTiktok(value);
        }}
        onBlur={() => runValidationTasks("tiktok", tiktok)}
        errorMessage={errors.tiktok?.errorMessage}
        hasError={errors.tiktok?.hasError}
        {...getOverrideProps(overrides, "tiktok")}
      ></TextField>
      <TextField
        label="Youtube"
        isRequired={false}
        isReadOnly={false}
        value={youtube}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter,
              instagram,
              twitch,
              tiktok,
              youtube: value,
              kofi,
            };
            const result = onChange(modelFields);
            value = result?.youtube ?? value;
          }
          if (errors.youtube?.hasError) {
            runValidationTasks("youtube", value);
          }
          setYoutube(value);
        }}
        onBlur={() => runValidationTasks("youtube", youtube)}
        errorMessage={errors.youtube?.errorMessage}
        hasError={errors.youtube?.hasError}
        {...getOverrideProps(overrides, "youtube")}
      ></TextField>
      <TextField
        label="Kofi"
        isRequired={false}
        isReadOnly={false}
        value={kofi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              twitter,
              instagram,
              twitch,
              tiktok,
              youtube,
              kofi: value,
            };
            const result = onChange(modelFields);
            value = result?.kofi ?? value;
          }
          if (errors.kofi?.hasError) {
            runValidationTasks("kofi", value);
          }
          setKofi(value);
        }}
        onBlur={() => runValidationTasks("kofi", kofi)}
        errorMessage={errors.kofi?.errorMessage}
        hasError={errors.kofi?.hasError}
        {...getOverrideProps(overrides, "kofi")}
      ></TextField>
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

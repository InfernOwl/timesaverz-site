/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Links } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LinksUpdateFormInputValues = {
    twitter?: string;
    instagram?: string;
    twitch?: string;
    tiktok?: string;
    youtube?: string;
    kofi?: string;
};
export declare type LinksUpdateFormValidationValues = {
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    twitch?: ValidationFunction<string>;
    tiktok?: ValidationFunction<string>;
    youtube?: ValidationFunction<string>;
    kofi?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinksUpdateFormOverridesProps = {
    LinksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    twitch?: PrimitiveOverrideProps<TextFieldProps>;
    tiktok?: PrimitiveOverrideProps<TextFieldProps>;
    youtube?: PrimitiveOverrideProps<TextFieldProps>;
    kofi?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinksUpdateFormProps = React.PropsWithChildren<{
    overrides?: LinksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    links?: Links;
    onSubmit?: (fields: LinksUpdateFormInputValues) => LinksUpdateFormInputValues;
    onSuccess?: (fields: LinksUpdateFormInputValues) => void;
    onError?: (fields: LinksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LinksUpdateFormInputValues) => LinksUpdateFormInputValues;
    onValidate?: LinksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LinksUpdateForm(props: LinksUpdateFormProps): React.ReactElement;

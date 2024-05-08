/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LinksCreateFormInputValues = {
    twitter?: string;
    instagram?: string;
    twitch?: string;
    tiktok?: string;
    youtube?: string;
    kofi?: string;
};
export declare type LinksCreateFormValidationValues = {
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    twitch?: ValidationFunction<string>;
    tiktok?: ValidationFunction<string>;
    youtube?: ValidationFunction<string>;
    kofi?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinksCreateFormOverridesProps = {
    LinksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    twitch?: PrimitiveOverrideProps<TextFieldProps>;
    tiktok?: PrimitiveOverrideProps<TextFieldProps>;
    youtube?: PrimitiveOverrideProps<TextFieldProps>;
    kofi?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinksCreateFormProps = React.PropsWithChildren<{
    overrides?: LinksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LinksCreateFormInputValues) => LinksCreateFormInputValues;
    onSuccess?: (fields: LinksCreateFormInputValues) => void;
    onError?: (fields: LinksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LinksCreateFormInputValues) => LinksCreateFormInputValues;
    onValidate?: LinksCreateFormValidationValues;
} & React.CSSProperties>;
export default function LinksCreateForm(props: LinksCreateFormProps): React.ReactElement;

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
export declare type RacersCreateFormInputValues = {
    name?: string;
    about_info?: string;
    image?: string;
};
export declare type RacersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    about_info?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RacersCreateFormOverridesProps = {
    RacersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    about_info?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RacersCreateFormProps = React.PropsWithChildren<{
    overrides?: RacersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RacersCreateFormInputValues) => RacersCreateFormInputValues;
    onSuccess?: (fields: RacersCreateFormInputValues) => void;
    onError?: (fields: RacersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RacersCreateFormInputValues) => RacersCreateFormInputValues;
    onValidate?: RacersCreateFormValidationValues;
} & React.CSSProperties>;
export default function RacersCreateForm(props: RacersCreateFormProps): React.ReactElement;

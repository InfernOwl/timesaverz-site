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
export declare type RunnersCreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type RunnersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RunnersCreateFormOverridesProps = {
    RunnersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RunnersCreateFormProps = React.PropsWithChildren<{
    overrides?: RunnersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RunnersCreateFormInputValues) => RunnersCreateFormInputValues;
    onSuccess?: (fields: RunnersCreateFormInputValues) => void;
    onError?: (fields: RunnersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RunnersCreateFormInputValues) => RunnersCreateFormInputValues;
    onValidate?: RunnersCreateFormValidationValues;
} & React.CSSProperties>;
export default function RunnersCreateForm(props: RunnersCreateFormProps): React.ReactElement;

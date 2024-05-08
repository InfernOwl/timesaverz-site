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
export declare type TopTimeCreateFormInputValues = {
    runner?: string;
    time?: string;
};
export declare type TopTimeCreateFormValidationValues = {
    runner?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopTimeCreateFormOverridesProps = {
    TopTimeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    runner?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopTimeCreateFormProps = React.PropsWithChildren<{
    overrides?: TopTimeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TopTimeCreateFormInputValues) => TopTimeCreateFormInputValues;
    onSuccess?: (fields: TopTimeCreateFormInputValues) => void;
    onError?: (fields: TopTimeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopTimeCreateFormInputValues) => TopTimeCreateFormInputValues;
    onValidate?: TopTimeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TopTimeCreateForm(props: TopTimeCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Runners } from "../API.ts";
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
export declare type RunnersUpdateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type RunnersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RunnersUpdateFormOverridesProps = {
    RunnersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RunnersUpdateFormProps = React.PropsWithChildren<{
    overrides?: RunnersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    runners?: Runners;
    onSubmit?: (fields: RunnersUpdateFormInputValues) => RunnersUpdateFormInputValues;
    onSuccess?: (fields: RunnersUpdateFormInputValues) => void;
    onError?: (fields: RunnersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RunnersUpdateFormInputValues) => RunnersUpdateFormInputValues;
    onValidate?: RunnersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RunnersUpdateForm(props: RunnersUpdateFormProps): React.ReactElement;

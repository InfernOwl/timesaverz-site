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
export declare type RaceResultsCreateFormInputValues = {
    points?: number;
    link?: string;
    time?: string;
};
export declare type RaceResultsCreateFormValidationValues = {
    points?: ValidationFunction<number>;
    link?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceResultsCreateFormOverridesProps = {
    RaceResultsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceResultsCreateFormProps = React.PropsWithChildren<{
    overrides?: RaceResultsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RaceResultsCreateFormInputValues) => RaceResultsCreateFormInputValues;
    onSuccess?: (fields: RaceResultsCreateFormInputValues) => void;
    onError?: (fields: RaceResultsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceResultsCreateFormInputValues) => RaceResultsCreateFormInputValues;
    onValidate?: RaceResultsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RaceResultsCreateForm(props: RaceResultsCreateFormProps): React.ReactElement;

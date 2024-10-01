/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RaceResults } from "../API.ts";
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
export declare type RaceResultsUpdateFormInputValues = {
    points?: number;
    link?: string;
    time?: string;
};
export declare type RaceResultsUpdateFormValidationValues = {
    points?: ValidationFunction<number>;
    link?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceResultsUpdateFormOverridesProps = {
    RaceResultsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceResultsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RaceResultsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    raceResults?: RaceResults;
    onSubmit?: (fields: RaceResultsUpdateFormInputValues) => RaceResultsUpdateFormInputValues;
    onSuccess?: (fields: RaceResultsUpdateFormInputValues) => void;
    onError?: (fields: RaceResultsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceResultsUpdateFormInputValues) => RaceResultsUpdateFormInputValues;
    onValidate?: RaceResultsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RaceResultsUpdateForm(props: RaceResultsUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Racers } from "../API.ts";
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
export declare type RacersUpdateFormInputValues = {
    name?: string;
    about_info?: string;
    image?: string;
};
export declare type RacersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    about_info?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RacersUpdateFormOverridesProps = {
    RacersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    about_info?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RacersUpdateFormProps = React.PropsWithChildren<{
    overrides?: RacersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    racers?: Racers;
    onSubmit?: (fields: RacersUpdateFormInputValues) => RacersUpdateFormInputValues;
    onSuccess?: (fields: RacersUpdateFormInputValues) => void;
    onError?: (fields: RacersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RacersUpdateFormInputValues) => RacersUpdateFormInputValues;
    onValidate?: RacersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RacersUpdateForm(props: RacersUpdateFormProps): React.ReactElement;

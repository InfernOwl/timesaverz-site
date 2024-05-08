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
export declare type PlaceholderCreateFormInputValues = {
    game_title?: string;
    game_image_alt?: string;
    background_image?: string;
    sweeps_winner?: string;
};
export declare type PlaceholderCreateFormValidationValues = {
    game_title?: ValidationFunction<string>;
    game_image_alt?: ValidationFunction<string>;
    background_image?: ValidationFunction<string>;
    sweeps_winner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlaceholderCreateFormOverridesProps = {
    PlaceholderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_title?: PrimitiveOverrideProps<TextFieldProps>;
    game_image_alt?: PrimitiveOverrideProps<TextFieldProps>;
    background_image?: PrimitiveOverrideProps<TextFieldProps>;
    sweeps_winner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlaceholderCreateFormProps = React.PropsWithChildren<{
    overrides?: PlaceholderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlaceholderCreateFormInputValues) => PlaceholderCreateFormInputValues;
    onSuccess?: (fields: PlaceholderCreateFormInputValues) => void;
    onError?: (fields: PlaceholderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlaceholderCreateFormInputValues) => PlaceholderCreateFormInputValues;
    onValidate?: PlaceholderCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlaceholderCreateForm(props: PlaceholderCreateFormProps): React.ReactElement;

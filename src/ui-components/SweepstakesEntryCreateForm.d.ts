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
export declare type SweepstakesEntryCreateFormInputValues = {
    name?: string;
    email?: string;
    game?: string;
    steam_id?: string;
    speedrun_link?: string;
};
export declare type SweepstakesEntryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    game?: ValidationFunction<string>;
    steam_id?: ValidationFunction<string>;
    speedrun_link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SweepstakesEntryCreateFormOverridesProps = {
    SweepstakesEntryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    game?: PrimitiveOverrideProps<TextFieldProps>;
    steam_id?: PrimitiveOverrideProps<TextFieldProps>;
    speedrun_link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SweepstakesEntryCreateFormProps = React.PropsWithChildren<{
    overrides?: SweepstakesEntryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SweepstakesEntryCreateFormInputValues) => SweepstakesEntryCreateFormInputValues;
    onSuccess?: (fields: SweepstakesEntryCreateFormInputValues) => void;
    onError?: (fields: SweepstakesEntryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SweepstakesEntryCreateFormInputValues) => SweepstakesEntryCreateFormInputValues;
    onValidate?: SweepstakesEntryCreateFormValidationValues;
} & React.CSSProperties>;
export default function SweepstakesEntryCreateForm(props: SweepstakesEntryCreateFormProps): React.ReactElement;

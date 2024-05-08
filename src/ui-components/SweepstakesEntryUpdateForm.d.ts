/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SweepstakesEntry } from "../API.ts";
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
export declare type SweepstakesEntryUpdateFormInputValues = {
    name?: string;
    email?: string;
    game?: string;
    steam_id?: string;
    speedrun_link?: string;
};
export declare type SweepstakesEntryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    game?: ValidationFunction<string>;
    steam_id?: ValidationFunction<string>;
    speedrun_link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SweepstakesEntryUpdateFormOverridesProps = {
    SweepstakesEntryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    game?: PrimitiveOverrideProps<TextFieldProps>;
    steam_id?: PrimitiveOverrideProps<TextFieldProps>;
    speedrun_link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SweepstakesEntryUpdateFormProps = React.PropsWithChildren<{
    overrides?: SweepstakesEntryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sweepstakesEntry?: SweepstakesEntry;
    onSubmit?: (fields: SweepstakesEntryUpdateFormInputValues) => SweepstakesEntryUpdateFormInputValues;
    onSuccess?: (fields: SweepstakesEntryUpdateFormInputValues) => void;
    onError?: (fields: SweepstakesEntryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SweepstakesEntryUpdateFormInputValues) => SweepstakesEntryUpdateFormInputValues;
    onValidate?: SweepstakesEntryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SweepstakesEntryUpdateForm(props: SweepstakesEntryUpdateFormProps): React.ReactElement;

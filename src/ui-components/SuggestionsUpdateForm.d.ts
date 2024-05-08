/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Suggestions } from "../API.ts";
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
export declare type SuggestionsUpdateFormInputValues = {
    suggestion?: string;
};
export declare type SuggestionsUpdateFormValidationValues = {
    suggestion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuggestionsUpdateFormOverridesProps = {
    SuggestionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    suggestion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SuggestionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SuggestionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    suggestions?: Suggestions;
    onSubmit?: (fields: SuggestionsUpdateFormInputValues) => SuggestionsUpdateFormInputValues;
    onSuccess?: (fields: SuggestionsUpdateFormInputValues) => void;
    onError?: (fields: SuggestionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuggestionsUpdateFormInputValues) => SuggestionsUpdateFormInputValues;
    onValidate?: SuggestionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SuggestionsUpdateForm(props: SuggestionsUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TopTime } from "../API.ts";
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
export declare type TopTimeUpdateFormInputValues = {
    runner?: string;
    time?: string;
};
export declare type TopTimeUpdateFormValidationValues = {
    runner?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopTimeUpdateFormOverridesProps = {
    TopTimeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    runner?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopTimeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TopTimeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    topTime?: TopTime;
    onSubmit?: (fields: TopTimeUpdateFormInputValues) => TopTimeUpdateFormInputValues;
    onSuccess?: (fields: TopTimeUpdateFormInputValues) => void;
    onError?: (fields: TopTimeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopTimeUpdateFormInputValues) => TopTimeUpdateFormInputValues;
    onValidate?: TopTimeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TopTimeUpdateForm(props: TopTimeUpdateFormProps): React.ReactElement;

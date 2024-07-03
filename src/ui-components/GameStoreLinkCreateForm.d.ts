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
export declare type GameStoreLinkCreateFormInputValues = {
    steam?: string;
    epic?: string;
    playstation?: string;
    xbox?: string;
    nintendo?: string;
};
export declare type GameStoreLinkCreateFormValidationValues = {
    steam?: ValidationFunction<string>;
    epic?: ValidationFunction<string>;
    playstation?: ValidationFunction<string>;
    xbox?: ValidationFunction<string>;
    nintendo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameStoreLinkCreateFormOverridesProps = {
    GameStoreLinkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    steam?: PrimitiveOverrideProps<TextFieldProps>;
    epic?: PrimitiveOverrideProps<TextFieldProps>;
    playstation?: PrimitiveOverrideProps<TextFieldProps>;
    xbox?: PrimitiveOverrideProps<TextFieldProps>;
    nintendo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameStoreLinkCreateFormProps = React.PropsWithChildren<{
    overrides?: GameStoreLinkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameStoreLinkCreateFormInputValues) => GameStoreLinkCreateFormInputValues;
    onSuccess?: (fields: GameStoreLinkCreateFormInputValues) => void;
    onError?: (fields: GameStoreLinkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameStoreLinkCreateFormInputValues) => GameStoreLinkCreateFormInputValues;
    onValidate?: GameStoreLinkCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameStoreLinkCreateForm(props: GameStoreLinkCreateFormProps): React.ReactElement;

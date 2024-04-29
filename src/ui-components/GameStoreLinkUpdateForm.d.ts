/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GameStoreLink } from "../API.ts";
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
export declare type GameStoreLinkUpdateFormInputValues = {
    steam?: string;
    epic?: string;
    playstation?: string;
    xbox?: string;
    nintendo?: string;
};
export declare type GameStoreLinkUpdateFormValidationValues = {
    steam?: ValidationFunction<string>;
    epic?: ValidationFunction<string>;
    playstation?: ValidationFunction<string>;
    xbox?: ValidationFunction<string>;
    nintendo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameStoreLinkUpdateFormOverridesProps = {
    GameStoreLinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    steam?: PrimitiveOverrideProps<TextFieldProps>;
    epic?: PrimitiveOverrideProps<TextFieldProps>;
    playstation?: PrimitiveOverrideProps<TextFieldProps>;
    xbox?: PrimitiveOverrideProps<TextFieldProps>;
    nintendo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameStoreLinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameStoreLinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gameStoreLink?: GameStoreLink;
    onSubmit?: (fields: GameStoreLinkUpdateFormInputValues) => GameStoreLinkUpdateFormInputValues;
    onSuccess?: (fields: GameStoreLinkUpdateFormInputValues) => void;
    onError?: (fields: GameStoreLinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameStoreLinkUpdateFormInputValues) => GameStoreLinkUpdateFormInputValues;
    onValidate?: GameStoreLinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameStoreLinkUpdateForm(props: GameStoreLinkUpdateFormProps): React.ReactElement;

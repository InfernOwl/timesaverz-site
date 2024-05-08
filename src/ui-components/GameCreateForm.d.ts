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
export declare type GameCreateFormInputValues = {
    game_title?: string;
    run_category?: string;
    sr_game_link?: string;
    background_image?: string;
    game_box_image?: string;
    game_info?: string;
};
export declare type GameCreateFormValidationValues = {
    game_title?: ValidationFunction<string>;
    run_category?: ValidationFunction<string>;
    sr_game_link?: ValidationFunction<string>;
    background_image?: ValidationFunction<string>;
    game_box_image?: ValidationFunction<string>;
    game_info?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameCreateFormOverridesProps = {
    GameCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_title?: PrimitiveOverrideProps<TextFieldProps>;
    run_category?: PrimitiveOverrideProps<TextFieldProps>;
    sr_game_link?: PrimitiveOverrideProps<TextFieldProps>;
    background_image?: PrimitiveOverrideProps<TextFieldProps>;
    game_box_image?: PrimitiveOverrideProps<TextFieldProps>;
    game_info?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameCreateFormProps = React.PropsWithChildren<{
    overrides?: GameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onSuccess?: (fields: GameCreateFormInputValues) => void;
    onError?: (fields: GameCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onValidate?: GameCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameCreateForm(props: GameCreateFormProps): React.ReactElement;

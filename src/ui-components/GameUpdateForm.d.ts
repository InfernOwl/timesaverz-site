/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Game } from "../API.ts";
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
export declare type GameUpdateFormInputValues = {
    game_title?: string;
    run_category?: string;
    sr_game_link?: string;
    background_image?: string;
    game_box_image?: string;
    game_info?: string;
};
export declare type GameUpdateFormValidationValues = {
    game_title?: ValidationFunction<string>;
    run_category?: ValidationFunction<string>;
    sr_game_link?: ValidationFunction<string>;
    background_image?: ValidationFunction<string>;
    game_box_image?: ValidationFunction<string>;
    game_info?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameUpdateFormOverridesProps = {
    GameUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_title?: PrimitiveOverrideProps<TextFieldProps>;
    run_category?: PrimitiveOverrideProps<TextFieldProps>;
    sr_game_link?: PrimitiveOverrideProps<TextFieldProps>;
    background_image?: PrimitiveOverrideProps<TextFieldProps>;
    game_box_image?: PrimitiveOverrideProps<TextFieldProps>;
    game_info?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    game?: Game;
    onSubmit?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onSuccess?: (fields: GameUpdateFormInputValues) => void;
    onError?: (fields: GameUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onValidate?: GameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameUpdateForm(props: GameUpdateFormProps): React.ReactElement;

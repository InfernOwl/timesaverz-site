/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type StandingsCreateFormInputValues = {
    started?: boolean;
    finished?: boolean;
};
export declare type StandingsCreateFormValidationValues = {
    started?: ValidationFunction<boolean>;
    finished?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsCreateFormOverridesProps = {
    StandingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    started?: PrimitiveOverrideProps<SwitchFieldProps>;
    finished?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StandingsCreateFormProps = React.PropsWithChildren<{
    overrides?: StandingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StandingsCreateFormInputValues) => StandingsCreateFormInputValues;
    onSuccess?: (fields: StandingsCreateFormInputValues) => void;
    onError?: (fields: StandingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StandingsCreateFormInputValues) => StandingsCreateFormInputValues;
    onValidate?: StandingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsCreateForm(props: StandingsCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { Standings } from "../API.ts";
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
export declare type StandingsUpdateFormInputValues = {
    started?: boolean;
    finished?: boolean;
};
export declare type StandingsUpdateFormValidationValues = {
    started?: ValidationFunction<boolean>;
    finished?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandingsUpdateFormOverridesProps = {
    StandingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    started?: PrimitiveOverrideProps<SwitchFieldProps>;
    finished?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type StandingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StandingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    standings?: Standings;
    onSubmit?: (fields: StandingsUpdateFormInputValues) => StandingsUpdateFormInputValues;
    onSuccess?: (fields: StandingsUpdateFormInputValues) => void;
    onError?: (fields: StandingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StandingsUpdateFormInputValues) => StandingsUpdateFormInputValues;
    onValidate?: StandingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StandingsUpdateForm(props: StandingsUpdateFormProps): React.ReactElement;

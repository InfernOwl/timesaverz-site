import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSuggestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suggestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suggestion: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySuggestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Suggestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly suggestion: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Suggestion = LazyLoading extends LazyLoadingDisabled ? EagerSuggestion : LazySuggestion

export declare const Suggestion: (new (init: ModelInit<Suggestion>) => Suggestion) & {
  copyOf(source: Suggestion, mutator: (draft: MutableModel<Suggestion>) => MutableModel<Suggestion> | void): Suggestion;
}
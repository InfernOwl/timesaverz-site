/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  game_title?: string | null,
  run_category?: string | null,
  sr_game_link?: string | null,
  background_image?: string | null,
  game_box_image?: string | null,
  game_info?: string | null,
  gameGameStoreLinkId?: string | null,
};

export type ModelGameConditionInput = {
  game_title?: ModelStringInput | null,
  run_category?: ModelStringInput | null,
  sr_game_link?: ModelStringInput | null,
  background_image?: ModelStringInput | null,
  game_box_image?: ModelStringInput | null,
  game_info?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  gameGameStoreLinkId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  game_title?: string | null,
  run_category?: string | null,
  sr_game_link?: string | null,
  background_image?: string | null,
  game_box_image?: string | null,
  game_info?: string | null,
  GameStoreLink?: GameStoreLink | null,
  createdAt: string,
  updatedAt: string,
  gameGameStoreLinkId?: string | null,
};

export type GameStoreLink = {
  __typename: "GameStoreLink",
  id: string,
  steam?: string | null,
  epic?: string | null,
  playstation?: string | null,
  xbox?: string | null,
  nintendo?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGameInput = {
  id: string,
  game_title?: string | null,
  run_category?: string | null,
  sr_game_link?: string | null,
  background_image?: string | null,
  game_box_image?: string | null,
  game_info?: string | null,
  gameGameStoreLinkId?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateTopTimeInput = {
  id?: string | null,
  runner?: string | null,
  time?: string | null,
};

export type ModelTopTimeConditionInput = {
  runner?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelTopTimeConditionInput | null > | null,
  or?: Array< ModelTopTimeConditionInput | null > | null,
  not?: ModelTopTimeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type TopTime = {
  __typename: "TopTime",
  id: string,
  runner?: string | null,
  time?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTopTimeInput = {
  id: string,
  runner?: string | null,
  time?: string | null,
};

export type DeleteTopTimeInput = {
  id: string,
};

export type CreateRaceResultsInput = {
  id?: string | null,
  points?: number | null,
  link?: string | null,
  time?: string | null,
  raceResultsGameId?: string | null,
};

export type ModelRaceResultsConditionInput = {
  points?: ModelIntInput | null,
  link?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelRaceResultsConditionInput | null > | null,
  or?: Array< ModelRaceResultsConditionInput | null > | null,
  not?: ModelRaceResultsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  raceResultsGameId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RaceResults = {
  __typename: "RaceResults",
  id: string,
  points?: number | null,
  link?: string | null,
  time?: string | null,
  Game?: Game | null,
  createdAt: string,
  updatedAt: string,
  raceResultsGameId?: string | null,
};

export type UpdateRaceResultsInput = {
  id: string,
  points?: number | null,
  link?: string | null,
  time?: string | null,
  raceResultsGameId?: string | null,
};

export type DeleteRaceResultsInput = {
  id: string,
};

export type CreateGameStoreLinkInput = {
  id?: string | null,
  steam?: string | null,
  epic?: string | null,
  playstation?: string | null,
  xbox?: string | null,
  nintendo?: string | null,
};

export type ModelGameStoreLinkConditionInput = {
  steam?: ModelStringInput | null,
  epic?: ModelStringInput | null,
  playstation?: ModelStringInput | null,
  xbox?: ModelStringInput | null,
  nintendo?: ModelStringInput | null,
  and?: Array< ModelGameStoreLinkConditionInput | null > | null,
  or?: Array< ModelGameStoreLinkConditionInput | null > | null,
  not?: ModelGameStoreLinkConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateGameStoreLinkInput = {
  id: string,
  steam?: string | null,
  epic?: string | null,
  playstation?: string | null,
  xbox?: string | null,
  nintendo?: string | null,
};

export type DeleteGameStoreLinkInput = {
  id: string,
};

export type CreateRacesInput = {
  id?: string | null,
  sweeps_start?: string | null,
  sweeps_end?: string | null,
  sweeps_winner?: string | null,
  seriesID: string,
  racesGameId?: string | null,
};

export type ModelRacesConditionInput = {
  sweeps_start?: ModelStringInput | null,
  sweeps_end?: ModelStringInput | null,
  sweeps_winner?: ModelStringInput | null,
  seriesID?: ModelIDInput | null,
  and?: Array< ModelRacesConditionInput | null > | null,
  or?: Array< ModelRacesConditionInput | null > | null,
  not?: ModelRacesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  racesGameId?: ModelIDInput | null,
};

export type Races = {
  __typename: "Races",
  id: string,
  sweeps_start?: string | null,
  sweeps_end?: string | null,
  sweeps_winner?: string | null,
  seriesID: string,
  Game?: Game | null,
  createdAt: string,
  updatedAt: string,
  racesGameId?: string | null,
};

export type UpdateRacesInput = {
  id: string,
  sweeps_start?: string | null,
  sweeps_end?: string | null,
  sweeps_winner?: string | null,
  seriesID?: string | null,
  racesGameId?: string | null,
};

export type DeleteRacesInput = {
  id: string,
};

export type CreateSeriesInput = {
  id?: string | null,
};

export type ModelSeriesConditionInput = {
  and?: Array< ModelSeriesConditionInput | null > | null,
  or?: Array< ModelSeriesConditionInput | null > | null,
  not?: ModelSeriesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Series = {
  __typename: "Series",
  id: string,
  races?: ModelRacesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRacesConnection = {
  __typename: "ModelRacesConnection",
  items:  Array<Races | null >,
  nextToken?: string | null,
};

export type UpdateSeriesInput = {
  id: string,
};

export type DeleteSeriesInput = {
  id: string,
};

export type CreateLinksInput = {
  id?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  twitch?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  kofi?: string | null,
};

export type ModelLinksConditionInput = {
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  twitch?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  kofi?: ModelStringInput | null,
  and?: Array< ModelLinksConditionInput | null > | null,
  or?: Array< ModelLinksConditionInput | null > | null,
  not?: ModelLinksConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Links = {
  __typename: "Links",
  id: string,
  twitter?: string | null,
  instagram?: string | null,
  twitch?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  kofi?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLinksInput = {
  id: string,
  twitter?: string | null,
  instagram?: string | null,
  twitch?: string | null,
  tiktok?: string | null,
  youtube?: string | null,
  kofi?: string | null,
};

export type DeleteLinksInput = {
  id: string,
};

export type CreateSweepstakesEntryInput = {
  id?: string | null,
  name: string,
  email: string,
  game: string,
  steam_id: string,
  speedrun_link: string,
};

export type ModelSweepstakesEntryConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  game?: ModelStringInput | null,
  steam_id?: ModelStringInput | null,
  speedrun_link?: ModelStringInput | null,
  and?: Array< ModelSweepstakesEntryConditionInput | null > | null,
  or?: Array< ModelSweepstakesEntryConditionInput | null > | null,
  not?: ModelSweepstakesEntryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type SweepstakesEntry = {
  __typename: "SweepstakesEntry",
  id: string,
  name: string,
  email: string,
  game: string,
  steam_id: string,
  speedrun_link: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSweepstakesEntryInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  game?: string | null,
  steam_id?: string | null,
  speedrun_link?: string | null,
};

export type DeleteSweepstakesEntryInput = {
  id: string,
};

export type CreatePlaceholderInput = {
  id?: string | null,
  game_title?: string | null,
  game_image_alt?: string | null,
  background_image?: string | null,
  sweeps_winner?: string | null,
};

export type ModelPlaceholderConditionInput = {
  game_title?: ModelStringInput | null,
  game_image_alt?: ModelStringInput | null,
  background_image?: ModelStringInput | null,
  sweeps_winner?: ModelStringInput | null,
  and?: Array< ModelPlaceholderConditionInput | null > | null,
  or?: Array< ModelPlaceholderConditionInput | null > | null,
  not?: ModelPlaceholderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Placeholder = {
  __typename: "Placeholder",
  id: string,
  game_title?: string | null,
  game_image_alt?: string | null,
  background_image?: string | null,
  sweeps_winner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePlaceholderInput = {
  id: string,
  game_title?: string | null,
  game_image_alt?: string | null,
  background_image?: string | null,
  sweeps_winner?: string | null,
};

export type DeletePlaceholderInput = {
  id: string,
};

export type CreateSuggestionsInput = {
  id?: string | null,
  suggestion: string,
};

export type ModelSuggestionsConditionInput = {
  suggestion?: ModelStringInput | null,
  and?: Array< ModelSuggestionsConditionInput | null > | null,
  or?: Array< ModelSuggestionsConditionInput | null > | null,
  not?: ModelSuggestionsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Suggestions = {
  __typename: "Suggestions",
  id: string,
  suggestion: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSuggestionsInput = {
  id: string,
  suggestion?: string | null,
};

export type DeleteSuggestionsInput = {
  id: string,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  game_title?: ModelStringInput | null,
  run_category?: ModelStringInput | null,
  sr_game_link?: ModelStringInput | null,
  background_image?: ModelStringInput | null,
  game_box_image?: ModelStringInput | null,
  game_info?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  gameGameStoreLinkId?: ModelIDInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelTopTimeFilterInput = {
  id?: ModelIDInput | null,
  runner?: ModelStringInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTopTimeFilterInput | null > | null,
  or?: Array< ModelTopTimeFilterInput | null > | null,
  not?: ModelTopTimeFilterInput | null,
};

export type ModelTopTimeConnection = {
  __typename: "ModelTopTimeConnection",
  items:  Array<TopTime | null >,
  nextToken?: string | null,
};

export type ModelRaceResultsFilterInput = {
  id?: ModelIDInput | null,
  points?: ModelIntInput | null,
  link?: ModelStringInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRaceResultsFilterInput | null > | null,
  or?: Array< ModelRaceResultsFilterInput | null > | null,
  not?: ModelRaceResultsFilterInput | null,
  raceResultsGameId?: ModelIDInput | null,
};

export type ModelRaceResultsConnection = {
  __typename: "ModelRaceResultsConnection",
  items:  Array<RaceResults | null >,
  nextToken?: string | null,
};

export type ModelGameStoreLinkFilterInput = {
  id?: ModelIDInput | null,
  steam?: ModelStringInput | null,
  epic?: ModelStringInput | null,
  playstation?: ModelStringInput | null,
  xbox?: ModelStringInput | null,
  nintendo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameStoreLinkFilterInput | null > | null,
  or?: Array< ModelGameStoreLinkFilterInput | null > | null,
  not?: ModelGameStoreLinkFilterInput | null,
};

export type ModelGameStoreLinkConnection = {
  __typename: "ModelGameStoreLinkConnection",
  items:  Array<GameStoreLink | null >,
  nextToken?: string | null,
};

export type ModelRacesFilterInput = {
  id?: ModelIDInput | null,
  sweeps_start?: ModelStringInput | null,
  sweeps_end?: ModelStringInput | null,
  sweeps_winner?: ModelStringInput | null,
  seriesID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRacesFilterInput | null > | null,
  or?: Array< ModelRacesFilterInput | null > | null,
  not?: ModelRacesFilterInput | null,
  racesGameId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSeriesFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSeriesFilterInput | null > | null,
  or?: Array< ModelSeriesFilterInput | null > | null,
  not?: ModelSeriesFilterInput | null,
};

export type ModelSeriesConnection = {
  __typename: "ModelSeriesConnection",
  items:  Array<Series | null >,
  nextToken?: string | null,
};

export type ModelLinksFilterInput = {
  id?: ModelIDInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  twitch?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  kofi?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLinksFilterInput | null > | null,
  or?: Array< ModelLinksFilterInput | null > | null,
  not?: ModelLinksFilterInput | null,
};

export type ModelLinksConnection = {
  __typename: "ModelLinksConnection",
  items:  Array<Links | null >,
  nextToken?: string | null,
};

export type ModelSweepstakesEntryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  game?: ModelStringInput | null,
  steam_id?: ModelStringInput | null,
  speedrun_link?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSweepstakesEntryFilterInput | null > | null,
  or?: Array< ModelSweepstakesEntryFilterInput | null > | null,
  not?: ModelSweepstakesEntryFilterInput | null,
};

export type ModelSweepstakesEntryConnection = {
  __typename: "ModelSweepstakesEntryConnection",
  items:  Array<SweepstakesEntry | null >,
  nextToken?: string | null,
};

export type ModelPlaceholderFilterInput = {
  id?: ModelIDInput | null,
  game_title?: ModelStringInput | null,
  game_image_alt?: ModelStringInput | null,
  background_image?: ModelStringInput | null,
  sweeps_winner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlaceholderFilterInput | null > | null,
  or?: Array< ModelPlaceholderFilterInput | null > | null,
  not?: ModelPlaceholderFilterInput | null,
};

export type ModelPlaceholderConnection = {
  __typename: "ModelPlaceholderConnection",
  items:  Array<Placeholder | null >,
  nextToken?: string | null,
};

export type ModelSuggestionsFilterInput = {
  id?: ModelIDInput | null,
  suggestion?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSuggestionsFilterInput | null > | null,
  or?: Array< ModelSuggestionsFilterInput | null > | null,
  not?: ModelSuggestionsFilterInput | null,
};

export type ModelSuggestionsConnection = {
  __typename: "ModelSuggestionsConnection",
  items:  Array<Suggestions | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionGameFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  game_title?: ModelSubscriptionStringInput | null,
  run_category?: ModelSubscriptionStringInput | null,
  sr_game_link?: ModelSubscriptionStringInput | null,
  background_image?: ModelSubscriptionStringInput | null,
  game_box_image?: ModelSubscriptionStringInput | null,
  game_info?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameFilterInput | null > | null,
  gameGameStoreLinkId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTopTimeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  runner?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopTimeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopTimeFilterInput | null > | null,
};

export type ModelSubscriptionRaceResultsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  points?: ModelSubscriptionIntInput | null,
  link?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRaceResultsFilterInput | null > | null,
  or?: Array< ModelSubscriptionRaceResultsFilterInput | null > | null,
  raceResultsGameId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGameStoreLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  steam?: ModelSubscriptionStringInput | null,
  epic?: ModelSubscriptionStringInput | null,
  playstation?: ModelSubscriptionStringInput | null,
  xbox?: ModelSubscriptionStringInput | null,
  nintendo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameStoreLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameStoreLinkFilterInput | null > | null,
};

export type ModelSubscriptionRacesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sweeps_start?: ModelSubscriptionStringInput | null,
  sweeps_end?: ModelSubscriptionStringInput | null,
  sweeps_winner?: ModelSubscriptionStringInput | null,
  seriesID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRacesFilterInput | null > | null,
  or?: Array< ModelSubscriptionRacesFilterInput | null > | null,
  racesGameId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionSeriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
};

export type ModelSubscriptionLinksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  twitch?: ModelSubscriptionStringInput | null,
  tiktok?: ModelSubscriptionStringInput | null,
  youtube?: ModelSubscriptionStringInput | null,
  kofi?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLinksFilterInput | null > | null,
  or?: Array< ModelSubscriptionLinksFilterInput | null > | null,
};

export type ModelSubscriptionSweepstakesEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  game?: ModelSubscriptionStringInput | null,
  steam_id?: ModelSubscriptionStringInput | null,
  speedrun_link?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSweepstakesEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionSweepstakesEntryFilterInput | null > | null,
};

export type ModelSubscriptionPlaceholderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  game_title?: ModelSubscriptionStringInput | null,
  game_image_alt?: ModelSubscriptionStringInput | null,
  background_image?: ModelSubscriptionStringInput | null,
  sweeps_winner?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceholderFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceholderFilterInput | null > | null,
};

export type ModelSubscriptionSuggestionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  suggestion?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSuggestionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSuggestionsFilterInput | null > | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type CreateTopTimeMutationVariables = {
  input: CreateTopTimeInput,
  condition?: ModelTopTimeConditionInput | null,
};

export type CreateTopTimeMutation = {
  createTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopTimeMutationVariables = {
  input: UpdateTopTimeInput,
  condition?: ModelTopTimeConditionInput | null,
};

export type UpdateTopTimeMutation = {
  updateTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopTimeMutationVariables = {
  input: DeleteTopTimeInput,
  condition?: ModelTopTimeConditionInput | null,
};

export type DeleteTopTimeMutation = {
  deleteTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRaceResultsMutationVariables = {
  input: CreateRaceResultsInput,
  condition?: ModelRaceResultsConditionInput | null,
};

export type CreateRaceResultsMutation = {
  createRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type UpdateRaceResultsMutationVariables = {
  input: UpdateRaceResultsInput,
  condition?: ModelRaceResultsConditionInput | null,
};

export type UpdateRaceResultsMutation = {
  updateRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type DeleteRaceResultsMutationVariables = {
  input: DeleteRaceResultsInput,
  condition?: ModelRaceResultsConditionInput | null,
};

export type DeleteRaceResultsMutation = {
  deleteRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type CreateGameStoreLinkMutationVariables = {
  input: CreateGameStoreLinkInput,
  condition?: ModelGameStoreLinkConditionInput | null,
};

export type CreateGameStoreLinkMutation = {
  createGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameStoreLinkMutationVariables = {
  input: UpdateGameStoreLinkInput,
  condition?: ModelGameStoreLinkConditionInput | null,
};

export type UpdateGameStoreLinkMutation = {
  updateGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameStoreLinkMutationVariables = {
  input: DeleteGameStoreLinkInput,
  condition?: ModelGameStoreLinkConditionInput | null,
};

export type DeleteGameStoreLinkMutation = {
  deleteGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRacesMutationVariables = {
  input: CreateRacesInput,
  condition?: ModelRacesConditionInput | null,
};

export type CreateRacesMutation = {
  createRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type UpdateRacesMutationVariables = {
  input: UpdateRacesInput,
  condition?: ModelRacesConditionInput | null,
};

export type UpdateRacesMutation = {
  updateRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type DeleteRacesMutationVariables = {
  input: DeleteRacesInput,
  condition?: ModelRacesConditionInput | null,
};

export type DeleteRacesMutation = {
  deleteRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type CreateSeriesMutationVariables = {
  input: CreateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type CreateSeriesMutation = {
  createSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeriesMutationVariables = {
  input: UpdateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type UpdateSeriesMutation = {
  updateSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeriesMutationVariables = {
  input: DeleteSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type DeleteSeriesMutation = {
  deleteSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLinksMutationVariables = {
  input: CreateLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type CreateLinksMutation = {
  createLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinksMutationVariables = {
  input: UpdateLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type UpdateLinksMutation = {
  updateLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinksMutationVariables = {
  input: DeleteLinksInput,
  condition?: ModelLinksConditionInput | null,
};

export type DeleteLinksMutation = {
  deleteLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSweepstakesEntryMutationVariables = {
  input: CreateSweepstakesEntryInput,
  condition?: ModelSweepstakesEntryConditionInput | null,
};

export type CreateSweepstakesEntryMutation = {
  createSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSweepstakesEntryMutationVariables = {
  input: UpdateSweepstakesEntryInput,
  condition?: ModelSweepstakesEntryConditionInput | null,
};

export type UpdateSweepstakesEntryMutation = {
  updateSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSweepstakesEntryMutationVariables = {
  input: DeleteSweepstakesEntryInput,
  condition?: ModelSweepstakesEntryConditionInput | null,
};

export type DeleteSweepstakesEntryMutation = {
  deleteSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaceholderMutationVariables = {
  input: CreatePlaceholderInput,
  condition?: ModelPlaceholderConditionInput | null,
};

export type CreatePlaceholderMutation = {
  createPlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceholderMutationVariables = {
  input: UpdatePlaceholderInput,
  condition?: ModelPlaceholderConditionInput | null,
};

export type UpdatePlaceholderMutation = {
  updatePlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceholderMutationVariables = {
  input: DeletePlaceholderInput,
  condition?: ModelPlaceholderConditionInput | null,
};

export type DeletePlaceholderMutation = {
  deletePlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSuggestionsMutationVariables = {
  input: CreateSuggestionsInput,
  condition?: ModelSuggestionsConditionInput | null,
};

export type CreateSuggestionsMutation = {
  createSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSuggestionsMutationVariables = {
  input: UpdateSuggestionsInput,
  condition?: ModelSuggestionsConditionInput | null,
};

export type UpdateSuggestionsMutation = {
  updateSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSuggestionsMutationVariables = {
  input: DeleteSuggestionsInput,
  condition?: ModelSuggestionsConditionInput | null,
};

export type DeleteSuggestionsMutation = {
  deleteSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTopTimeQueryVariables = {
  id: string,
};

export type GetTopTimeQuery = {
  getTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopTimesQueryVariables = {
  filter?: ModelTopTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopTimesQuery = {
  listTopTimes?:  {
    __typename: "ModelTopTimeConnection",
    items:  Array< {
      __typename: "TopTime",
      id: string,
      runner?: string | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRaceResultsQueryVariables = {
  id: string,
};

export type GetRaceResultsQuery = {
  getRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type ListRaceResultsQueryVariables = {
  filter?: ModelRaceResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRaceResultsQuery = {
  listRaceResults?:  {
    __typename: "ModelRaceResultsConnection",
    items:  Array< {
      __typename: "RaceResults",
      id: string,
      points?: number | null,
      link?: string | null,
      time?: string | null,
      createdAt: string,
      updatedAt: string,
      raceResultsGameId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameStoreLinkQueryVariables = {
  id: string,
};

export type GetGameStoreLinkQuery = {
  getGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameStoreLinksQueryVariables = {
  filter?: ModelGameStoreLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameStoreLinksQuery = {
  listGameStoreLinks?:  {
    __typename: "ModelGameStoreLinkConnection",
    items:  Array< {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRacesQueryVariables = {
  id: string,
};

export type GetRacesQuery = {
  getRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type ListRacesQueryVariables = {
  filter?: ModelRacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacesQuery = {
  listRaces?:  {
    __typename: "ModelRacesConnection",
    items:  Array< {
      __typename: "Races",
      id: string,
      sweeps_start?: string | null,
      sweeps_end?: string | null,
      sweeps_winner?: string | null,
      seriesID: string,
      createdAt: string,
      updatedAt: string,
      racesGameId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RacesBySeriesIDQueryVariables = {
  seriesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RacesBySeriesIDQuery = {
  racesBySeriesID?:  {
    __typename: "ModelRacesConnection",
    items:  Array< {
      __typename: "Races",
      id: string,
      sweeps_start?: string | null,
      sweeps_end?: string | null,
      sweeps_winner?: string | null,
      seriesID: string,
      createdAt: string,
      updatedAt: string,
      racesGameId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSeriesQueryVariables = {
  id: string,
};

export type GetSeriesQuery = {
  getSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeriesQueryVariables = {
  filter?: ModelSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeriesQuery = {
  listSeries?:  {
    __typename: "ModelSeriesConnection",
    items:  Array< {
      __typename: "Series",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLinksQueryVariables = {
  id: string,
};

export type GetLinksQuery = {
  getLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinksConnection",
    items:  Array< {
      __typename: "Links",
      id: string,
      twitter?: string | null,
      instagram?: string | null,
      twitch?: string | null,
      tiktok?: string | null,
      youtube?: string | null,
      kofi?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSweepstakesEntryQueryVariables = {
  id: string,
};

export type GetSweepstakesEntryQuery = {
  getSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSweepstakesEntriesQueryVariables = {
  filter?: ModelSweepstakesEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSweepstakesEntriesQuery = {
  listSweepstakesEntries?:  {
    __typename: "ModelSweepstakesEntryConnection",
    items:  Array< {
      __typename: "SweepstakesEntry",
      id: string,
      name: string,
      email: string,
      game: string,
      steam_id: string,
      speedrun_link: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceholderQueryVariables = {
  id: string,
};

export type GetPlaceholderQuery = {
  getPlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlaceholdersQueryVariables = {
  filter?: ModelPlaceholderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlaceholdersQuery = {
  listPlaceholders?:  {
    __typename: "ModelPlaceholderConnection",
    items:  Array< {
      __typename: "Placeholder",
      id: string,
      game_title?: string | null,
      game_image_alt?: string | null,
      background_image?: string | null,
      sweeps_winner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSuggestionsQueryVariables = {
  id: string,
};

export type GetSuggestionsQuery = {
  getSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSuggestionsQueryVariables = {
  filter?: ModelSuggestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuggestionsQuery = {
  listSuggestions?:  {
    __typename: "ModelSuggestionsConnection",
    items:  Array< {
      __typename: "Suggestions",
      id: string,
      suggestion: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  filter?: ModelSubscriptionGameFilterInput | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    game_title?: string | null,
    run_category?: string | null,
    sr_game_link?: string | null,
    background_image?: string | null,
    game_box_image?: string | null,
    game_info?: string | null,
    GameStoreLink?:  {
      __typename: "GameStoreLink",
      id: string,
      steam?: string | null,
      epic?: string | null,
      playstation?: string | null,
      xbox?: string | null,
      nintendo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gameGameStoreLinkId?: string | null,
  } | null,
};

export type OnCreateTopTimeSubscriptionVariables = {
  filter?: ModelSubscriptionTopTimeFilterInput | null,
};

export type OnCreateTopTimeSubscription = {
  onCreateTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopTimeSubscriptionVariables = {
  filter?: ModelSubscriptionTopTimeFilterInput | null,
};

export type OnUpdateTopTimeSubscription = {
  onUpdateTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopTimeSubscriptionVariables = {
  filter?: ModelSubscriptionTopTimeFilterInput | null,
};

export type OnDeleteTopTimeSubscription = {
  onDeleteTopTime?:  {
    __typename: "TopTime",
    id: string,
    runner?: string | null,
    time?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRaceResultsSubscriptionVariables = {
  filter?: ModelSubscriptionRaceResultsFilterInput | null,
};

export type OnCreateRaceResultsSubscription = {
  onCreateRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type OnUpdateRaceResultsSubscriptionVariables = {
  filter?: ModelSubscriptionRaceResultsFilterInput | null,
};

export type OnUpdateRaceResultsSubscription = {
  onUpdateRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type OnDeleteRaceResultsSubscriptionVariables = {
  filter?: ModelSubscriptionRaceResultsFilterInput | null,
};

export type OnDeleteRaceResultsSubscription = {
  onDeleteRaceResults?:  {
    __typename: "RaceResults",
    id: string,
    points?: number | null,
    link?: string | null,
    time?: string | null,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    raceResultsGameId?: string | null,
  } | null,
};

export type OnCreateGameStoreLinkSubscriptionVariables = {
  filter?: ModelSubscriptionGameStoreLinkFilterInput | null,
};

export type OnCreateGameStoreLinkSubscription = {
  onCreateGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameStoreLinkSubscriptionVariables = {
  filter?: ModelSubscriptionGameStoreLinkFilterInput | null,
};

export type OnUpdateGameStoreLinkSubscription = {
  onUpdateGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameStoreLinkSubscriptionVariables = {
  filter?: ModelSubscriptionGameStoreLinkFilterInput | null,
};

export type OnDeleteGameStoreLinkSubscription = {
  onDeleteGameStoreLink?:  {
    __typename: "GameStoreLink",
    id: string,
    steam?: string | null,
    epic?: string | null,
    playstation?: string | null,
    xbox?: string | null,
    nintendo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRacesSubscriptionVariables = {
  filter?: ModelSubscriptionRacesFilterInput | null,
};

export type OnCreateRacesSubscription = {
  onCreateRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type OnUpdateRacesSubscriptionVariables = {
  filter?: ModelSubscriptionRacesFilterInput | null,
};

export type OnUpdateRacesSubscription = {
  onUpdateRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type OnDeleteRacesSubscriptionVariables = {
  filter?: ModelSubscriptionRacesFilterInput | null,
};

export type OnDeleteRacesSubscription = {
  onDeleteRaces?:  {
    __typename: "Races",
    id: string,
    sweeps_start?: string | null,
    sweeps_end?: string | null,
    sweeps_winner?: string | null,
    seriesID: string,
    Game?:  {
      __typename: "Game",
      id: string,
      game_title?: string | null,
      run_category?: string | null,
      sr_game_link?: string | null,
      background_image?: string | null,
      game_box_image?: string | null,
      game_info?: string | null,
      createdAt: string,
      updatedAt: string,
      gameGameStoreLinkId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    racesGameId?: string | null,
  } | null,
};

export type OnCreateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnCreateSeriesSubscription = {
  onCreateSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnUpdateSeriesSubscription = {
  onUpdateSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
};

export type OnDeleteSeriesSubscription = {
  onDeleteSeries?:  {
    __typename: "Series",
    id: string,
    races?:  {
      __typename: "ModelRacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnCreateLinksSubscription = {
  onCreateLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnUpdateLinksSubscription = {
  onUpdateLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinksSubscriptionVariables = {
  filter?: ModelSubscriptionLinksFilterInput | null,
};

export type OnDeleteLinksSubscription = {
  onDeleteLinks?:  {
    __typename: "Links",
    id: string,
    twitter?: string | null,
    instagram?: string | null,
    twitch?: string | null,
    tiktok?: string | null,
    youtube?: string | null,
    kofi?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSweepstakesEntrySubscriptionVariables = {
  filter?: ModelSubscriptionSweepstakesEntryFilterInput | null,
};

export type OnCreateSweepstakesEntrySubscription = {
  onCreateSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSweepstakesEntrySubscriptionVariables = {
  filter?: ModelSubscriptionSweepstakesEntryFilterInput | null,
};

export type OnUpdateSweepstakesEntrySubscription = {
  onUpdateSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSweepstakesEntrySubscriptionVariables = {
  filter?: ModelSubscriptionSweepstakesEntryFilterInput | null,
};

export type OnDeleteSweepstakesEntrySubscription = {
  onDeleteSweepstakesEntry?:  {
    __typename: "SweepstakesEntry",
    id: string,
    name: string,
    email: string,
    game: string,
    steam_id: string,
    speedrun_link: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceholderSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceholderFilterInput | null,
};

export type OnCreatePlaceholderSubscription = {
  onCreatePlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceholderSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceholderFilterInput | null,
};

export type OnUpdatePlaceholderSubscription = {
  onUpdatePlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceholderSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceholderFilterInput | null,
};

export type OnDeletePlaceholderSubscription = {
  onDeletePlaceholder?:  {
    __typename: "Placeholder",
    id: string,
    game_title?: string | null,
    game_image_alt?: string | null,
    background_image?: string | null,
    sweeps_winner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSuggestionsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionsFilterInput | null,
};

export type OnCreateSuggestionsSubscription = {
  onCreateSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSuggestionsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionsFilterInput | null,
};

export type OnUpdateSuggestionsSubscription = {
  onUpdateSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSuggestionsSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionsFilterInput | null,
};

export type OnDeleteSuggestionsSubscription = {
  onDeleteSuggestions?:  {
    __typename: "Suggestions",
    id: string,
    suggestion: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

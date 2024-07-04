/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGame = /* GraphQL */ `mutation CreateGame(
  $input: CreateGameInput!
  $condition: ModelGameConditionInput
) {
  createGame(input: $input, condition: $condition) {
    id
    game_title
    run_category
    sr_game_link
    background_image
    game_box_image
    game_info
    GameStoreLink {
      id
      steam
      epic
      playstation
      xbox
      nintendo
      createdAt
      updatedAt
      gameStoreLinkGameId
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    Races {
      nextToken
      __typename
    }
    TopTime {
      id
      runner
      time
      createdAt
      updatedAt
      topTimeGameId
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
    gameTopTimeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameMutationVariables,
  APITypes.CreateGameMutation
>;
export const updateGame = /* GraphQL */ `mutation UpdateGame(
  $input: UpdateGameInput!
  $condition: ModelGameConditionInput
) {
  updateGame(input: $input, condition: $condition) {
    id
    game_title
    run_category
    sr_game_link
    background_image
    game_box_image
    game_info
    GameStoreLink {
      id
      steam
      epic
      playstation
      xbox
      nintendo
      createdAt
      updatedAt
      gameStoreLinkGameId
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    Races {
      nextToken
      __typename
    }
    TopTime {
      id
      runner
      time
      createdAt
      updatedAt
      topTimeGameId
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
    gameTopTimeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameMutationVariables,
  APITypes.UpdateGameMutation
>;
export const deleteGame = /* GraphQL */ `mutation DeleteGame(
  $input: DeleteGameInput!
  $condition: ModelGameConditionInput
) {
  deleteGame(input: $input, condition: $condition) {
    id
    game_title
    run_category
    sr_game_link
    background_image
    game_box_image
    game_info
    GameStoreLink {
      id
      steam
      epic
      playstation
      xbox
      nintendo
      createdAt
      updatedAt
      gameStoreLinkGameId
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    Races {
      nextToken
      __typename
    }
    TopTime {
      id
      runner
      time
      createdAt
      updatedAt
      topTimeGameId
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
    gameTopTimeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameMutationVariables,
  APITypes.DeleteGameMutation
>;
export const createTopTime = /* GraphQL */ `mutation CreateTopTime(
  $input: CreateTopTimeInput!
  $condition: ModelTopTimeConditionInput
) {
  createTopTime(input: $input, condition: $condition) {
    id
    runner
    time
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    topTimeGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTopTimeMutationVariables,
  APITypes.CreateTopTimeMutation
>;
export const updateTopTime = /* GraphQL */ `mutation UpdateTopTime(
  $input: UpdateTopTimeInput!
  $condition: ModelTopTimeConditionInput
) {
  updateTopTime(input: $input, condition: $condition) {
    id
    runner
    time
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    topTimeGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTopTimeMutationVariables,
  APITypes.UpdateTopTimeMutation
>;
export const deleteTopTime = /* GraphQL */ `mutation DeleteTopTime(
  $input: DeleteTopTimeInput!
  $condition: ModelTopTimeConditionInput
) {
  deleteTopTime(input: $input, condition: $condition) {
    id
    runner
    time
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    topTimeGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTopTimeMutationVariables,
  APITypes.DeleteTopTimeMutation
>;
export const createRaceResults = /* GraphQL */ `mutation CreateRaceResults(
  $input: CreateRaceResultsInput!
  $condition: ModelRaceResultsConditionInput
) {
  createRaceResults(input: $input, condition: $condition) {
    id
    aboutID
    r1_points
    r1_link
    r1_time
    r2_points
    r2_link
    r2_time
    r3_points
    r3_link
    r3_time
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRaceResultsMutationVariables,
  APITypes.CreateRaceResultsMutation
>;
export const updateRaceResults = /* GraphQL */ `mutation UpdateRaceResults(
  $input: UpdateRaceResultsInput!
  $condition: ModelRaceResultsConditionInput
) {
  updateRaceResults(input: $input, condition: $condition) {
    id
    aboutID
    r1_points
    r1_link
    r1_time
    r2_points
    r2_link
    r2_time
    r3_points
    r3_link
    r3_time
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRaceResultsMutationVariables,
  APITypes.UpdateRaceResultsMutation
>;
export const deleteRaceResults = /* GraphQL */ `mutation DeleteRaceResults(
  $input: DeleteRaceResultsInput!
  $condition: ModelRaceResultsConditionInput
) {
  deleteRaceResults(input: $input, condition: $condition) {
    id
    aboutID
    r1_points
    r1_link
    r1_time
    r2_points
    r2_link
    r2_time
    r3_points
    r3_link
    r3_time
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRaceResultsMutationVariables,
  APITypes.DeleteRaceResultsMutation
>;
export const createGameStoreLink = /* GraphQL */ `mutation CreateGameStoreLink(
  $input: CreateGameStoreLinkInput!
  $condition: ModelGameStoreLinkConditionInput
) {
  createGameStoreLink(input: $input, condition: $condition) {
    id
    steam
    epic
    playstation
    xbox
    nintendo
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    gameStoreLinkGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameStoreLinkMutationVariables,
  APITypes.CreateGameStoreLinkMutation
>;
export const updateGameStoreLink = /* GraphQL */ `mutation UpdateGameStoreLink(
  $input: UpdateGameStoreLinkInput!
  $condition: ModelGameStoreLinkConditionInput
) {
  updateGameStoreLink(input: $input, condition: $condition) {
    id
    steam
    epic
    playstation
    xbox
    nintendo
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    gameStoreLinkGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameStoreLinkMutationVariables,
  APITypes.UpdateGameStoreLinkMutation
>;
export const deleteGameStoreLink = /* GraphQL */ `mutation DeleteGameStoreLink(
  $input: DeleteGameStoreLinkInput!
  $condition: ModelGameStoreLinkConditionInput
) {
  deleteGameStoreLink(input: $input, condition: $condition) {
    id
    steam
    epic
    playstation
    xbox
    nintendo
    Game {
      id
      game_title
      run_category
      sr_game_link
      background_image
      game_box_image
      game_info
      createdAt
      updatedAt
      gameGameStoreLinkId
      gameTopTimeId
      __typename
    }
    createdAt
    updatedAt
    gameStoreLinkGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameStoreLinkMutationVariables,
  APITypes.DeleteGameStoreLinkMutation
>;
export const createRaces = /* GraphQL */ `mutation CreateRaces(
  $input: CreateRacesInput!
  $condition: ModelRacesConditionInput
) {
  createRaces(input: $input, condition: $condition) {
    id
    sweeps_winner
    seriesID
    Racers {
      nextToken
      __typename
    }
    active
    ended
    started
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRacesMutationVariables,
  APITypes.CreateRacesMutation
>;
export const updateRaces = /* GraphQL */ `mutation UpdateRaces(
  $input: UpdateRacesInput!
  $condition: ModelRacesConditionInput
) {
  updateRaces(input: $input, condition: $condition) {
    id
    sweeps_winner
    seriesID
    Racers {
      nextToken
      __typename
    }
    active
    ended
    started
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRacesMutationVariables,
  APITypes.UpdateRacesMutation
>;
export const deleteRaces = /* GraphQL */ `mutation DeleteRaces(
  $input: DeleteRacesInput!
  $condition: ModelRacesConditionInput
) {
  deleteRaces(input: $input, condition: $condition) {
    id
    sweeps_winner
    seriesID
    Racers {
      nextToken
      __typename
    }
    active
    ended
    started
    gameID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRacesMutationVariables,
  APITypes.DeleteRacesMutation
>;
export const createSeries = /* GraphQL */ `mutation CreateSeries(
  $input: CreateSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  createSeries(input: $input, condition: $condition) {
    id
    races {
      nextToken
      __typename
    }
    title
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSeriesMutationVariables,
  APITypes.CreateSeriesMutation
>;
export const updateSeries = /* GraphQL */ `mutation UpdateSeries(
  $input: UpdateSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  updateSeries(input: $input, condition: $condition) {
    id
    races {
      nextToken
      __typename
    }
    title
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSeriesMutationVariables,
  APITypes.UpdateSeriesMutation
>;
export const deleteSeries = /* GraphQL */ `mutation DeleteSeries(
  $input: DeleteSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  deleteSeries(input: $input, condition: $condition) {
    id
    races {
      nextToken
      __typename
    }
    title
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSeriesMutationVariables,
  APITypes.DeleteSeriesMutation
>;
export const createLinks = /* GraphQL */ `mutation CreateLinks(
  $input: CreateLinksInput!
  $condition: ModelLinksConditionInput
) {
  createLinks(input: $input, condition: $condition) {
    id
    twitter
    instagram
    twitch
    tiktok
    youtube
    kofi
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLinksMutationVariables,
  APITypes.CreateLinksMutation
>;
export const updateLinks = /* GraphQL */ `mutation UpdateLinks(
  $input: UpdateLinksInput!
  $condition: ModelLinksConditionInput
) {
  updateLinks(input: $input, condition: $condition) {
    id
    twitter
    instagram
    twitch
    tiktok
    youtube
    kofi
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLinksMutationVariables,
  APITypes.UpdateLinksMutation
>;
export const deleteLinks = /* GraphQL */ `mutation DeleteLinks(
  $input: DeleteLinksInput!
  $condition: ModelLinksConditionInput
) {
  deleteLinks(input: $input, condition: $condition) {
    id
    twitter
    instagram
    twitch
    tiktok
    youtube
    kofi
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLinksMutationVariables,
  APITypes.DeleteLinksMutation
>;
export const createRacers = /* GraphQL */ `mutation CreateRacers(
  $input: CreateRacersInput!
  $condition: ModelRacersConditionInput
) {
  createRacers(input: $input, condition: $condition) {
    id
    name
    about_info
    image
    links {
      id
      twitter
      instagram
      twitch
      tiktok
      youtube
      kofi
      createdAt
      updatedAt
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    racess {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    racersLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRacersMutationVariables,
  APITypes.CreateRacersMutation
>;
export const updateRacers = /* GraphQL */ `mutation UpdateRacers(
  $input: UpdateRacersInput!
  $condition: ModelRacersConditionInput
) {
  updateRacers(input: $input, condition: $condition) {
    id
    name
    about_info
    image
    links {
      id
      twitter
      instagram
      twitch
      tiktok
      youtube
      kofi
      createdAt
      updatedAt
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    racess {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    racersLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRacersMutationVariables,
  APITypes.UpdateRacersMutation
>;
export const deleteRacers = /* GraphQL */ `mutation DeleteRacers(
  $input: DeleteRacersInput!
  $condition: ModelRacersConditionInput
) {
  deleteRacers(input: $input, condition: $condition) {
    id
    name
    about_info
    image
    links {
      id
      twitter
      instagram
      twitch
      tiktok
      youtube
      kofi
      createdAt
      updatedAt
      __typename
    }
    RaceResults {
      nextToken
      __typename
    }
    racess {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    racersLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRacersMutationVariables,
  APITypes.DeleteRacersMutation
>;
export const createSweepstakesEntry = /* GraphQL */ `mutation CreateSweepstakesEntry(
  $input: CreateSweepstakesEntryInput!
  $condition: ModelSweepstakesEntryConditionInput
) {
  createSweepstakesEntry(input: $input, condition: $condition) {
    id
    name
    email
    game
    steam_id
    speedrun_link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSweepstakesEntryMutationVariables,
  APITypes.CreateSweepstakesEntryMutation
>;
export const updateSweepstakesEntry = /* GraphQL */ `mutation UpdateSweepstakesEntry(
  $input: UpdateSweepstakesEntryInput!
  $condition: ModelSweepstakesEntryConditionInput
) {
  updateSweepstakesEntry(input: $input, condition: $condition) {
    id
    name
    email
    game
    steam_id
    speedrun_link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSweepstakesEntryMutationVariables,
  APITypes.UpdateSweepstakesEntryMutation
>;
export const deleteSweepstakesEntry = /* GraphQL */ `mutation DeleteSweepstakesEntry(
  $input: DeleteSweepstakesEntryInput!
  $condition: ModelSweepstakesEntryConditionInput
) {
  deleteSweepstakesEntry(input: $input, condition: $condition) {
    id
    name
    email
    game
    steam_id
    speedrun_link
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSweepstakesEntryMutationVariables,
  APITypes.DeleteSweepstakesEntryMutation
>;
export const createPlaceholder = /* GraphQL */ `mutation CreatePlaceholder(
  $input: CreatePlaceholderInput!
  $condition: ModelPlaceholderConditionInput
) {
  createPlaceholder(input: $input, condition: $condition) {
    id
    game_title
    game_image_alt
    background_image
    sweeps_winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlaceholderMutationVariables,
  APITypes.CreatePlaceholderMutation
>;
export const updatePlaceholder = /* GraphQL */ `mutation UpdatePlaceholder(
  $input: UpdatePlaceholderInput!
  $condition: ModelPlaceholderConditionInput
) {
  updatePlaceholder(input: $input, condition: $condition) {
    id
    game_title
    game_image_alt
    background_image
    sweeps_winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlaceholderMutationVariables,
  APITypes.UpdatePlaceholderMutation
>;
export const deletePlaceholder = /* GraphQL */ `mutation DeletePlaceholder(
  $input: DeletePlaceholderInput!
  $condition: ModelPlaceholderConditionInput
) {
  deletePlaceholder(input: $input, condition: $condition) {
    id
    game_title
    game_image_alt
    background_image
    sweeps_winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlaceholderMutationVariables,
  APITypes.DeletePlaceholderMutation
>;
export const createSuggestions = /* GraphQL */ `mutation CreateSuggestions(
  $input: CreateSuggestionsInput!
  $condition: ModelSuggestionsConditionInput
) {
  createSuggestions(input: $input, condition: $condition) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSuggestionsMutationVariables,
  APITypes.CreateSuggestionsMutation
>;
export const updateSuggestions = /* GraphQL */ `mutation UpdateSuggestions(
  $input: UpdateSuggestionsInput!
  $condition: ModelSuggestionsConditionInput
) {
  updateSuggestions(input: $input, condition: $condition) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSuggestionsMutationVariables,
  APITypes.UpdateSuggestionsMutation
>;
export const deleteSuggestions = /* GraphQL */ `mutation DeleteSuggestions(
  $input: DeleteSuggestionsInput!
  $condition: ModelSuggestionsConditionInput
) {
  deleteSuggestions(input: $input, condition: $condition) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSuggestionsMutationVariables,
  APITypes.DeleteSuggestionsMutation
>;
export const createRacesRacers = /* GraphQL */ `mutation CreateRacesRacers(
  $input: CreateRacesRacersInput!
  $condition: ModelRacesRacersConditionInput
) {
  createRacesRacers(input: $input, condition: $condition) {
    id
    racesId
    racersId
    races {
      id
      sweeps_winner
      seriesID
      active
      ended
      started
      gameID
      createdAt
      updatedAt
      __typename
    }
    racers {
      id
      name
      about_info
      image
      createdAt
      updatedAt
      racersLinksId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRacesRacersMutationVariables,
  APITypes.CreateRacesRacersMutation
>;
export const updateRacesRacers = /* GraphQL */ `mutation UpdateRacesRacers(
  $input: UpdateRacesRacersInput!
  $condition: ModelRacesRacersConditionInput
) {
  updateRacesRacers(input: $input, condition: $condition) {
    id
    racesId
    racersId
    races {
      id
      sweeps_winner
      seriesID
      active
      ended
      started
      gameID
      createdAt
      updatedAt
      __typename
    }
    racers {
      id
      name
      about_info
      image
      createdAt
      updatedAt
      racersLinksId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRacesRacersMutationVariables,
  APITypes.UpdateRacesRacersMutation
>;
export const deleteRacesRacers = /* GraphQL */ `mutation DeleteRacesRacers(
  $input: DeleteRacesRacersInput!
  $condition: ModelRacesRacersConditionInput
) {
  deleteRacesRacers(input: $input, condition: $condition) {
    id
    racesId
    racersId
    races {
      id
      sweeps_winner
      seriesID
      active
      ended
      started
      gameID
      createdAt
      updatedAt
      __typename
    }
    racers {
      id
      name
      about_info
      image
      createdAt
      updatedAt
      racersLinksId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRacesRacersMutationVariables,
  APITypes.DeleteRacesRacersMutation
>;

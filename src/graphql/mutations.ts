/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../amplify/src/API";
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
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
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
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
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
      __typename
    }
    createdAt
    updatedAt
    gameGameStoreLinkId
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    points
    link
    time
    runnersID
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
      __typename
    }
    createdAt
    updatedAt
    raceResultsGameId
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
    points
    link
    time
    runnersID
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
      __typename
    }
    createdAt
    updatedAt
    raceResultsGameId
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
    points
    link
    time
    runnersID
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
      __typename
    }
    createdAt
    updatedAt
    raceResultsGameId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRaceResultsMutationVariables,
  APITypes.DeleteRaceResultsMutation
>;
export const createRunners = /* GraphQL */ `mutation CreateRunners(
  $input: CreateRunnersInput!
  $condition: ModelRunnersConditionInput
) {
  createRunners(input: $input, condition: $condition) {
    id
    name
    image
    race_results {
      nextToken
      __typename
    }
    standingss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRunnersMutationVariables,
  APITypes.CreateRunnersMutation
>;
export const updateRunners = /* GraphQL */ `mutation UpdateRunners(
  $input: UpdateRunnersInput!
  $condition: ModelRunnersConditionInput
) {
  updateRunners(input: $input, condition: $condition) {
    id
    name
    image
    race_results {
      nextToken
      __typename
    }
    standingss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRunnersMutationVariables,
  APITypes.UpdateRunnersMutation
>;
export const deleteRunners = /* GraphQL */ `mutation DeleteRunners(
  $input: DeleteRunnersInput!
  $condition: ModelRunnersConditionInput
) {
  deleteRunners(input: $input, condition: $condition) {
    id
    name
    image
    race_results {
      nextToken
      __typename
    }
    standingss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRunnersMutationVariables,
  APITypes.DeleteRunnersMutation
>;
export const createStandings = /* GraphQL */ `mutation CreateStandings(
  $input: CreateStandingsInput!
  $condition: ModelStandingsConditionInput
) {
  createStandings(input: $input, condition: $condition) {
    id
    started
    finished
    runners {
      nextToken
      __typename
    }
    top_time {
      id
      runner
      time
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    standingsTop_timeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStandingsMutationVariables,
  APITypes.CreateStandingsMutation
>;
export const updateStandings = /* GraphQL */ `mutation UpdateStandings(
  $input: UpdateStandingsInput!
  $condition: ModelStandingsConditionInput
) {
  updateStandings(input: $input, condition: $condition) {
    id
    started
    finished
    runners {
      nextToken
      __typename
    }
    top_time {
      id
      runner
      time
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    standingsTop_timeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStandingsMutationVariables,
  APITypes.UpdateStandingsMutation
>;
export const deleteStandings = /* GraphQL */ `mutation DeleteStandings(
  $input: DeleteStandingsInput!
  $condition: ModelStandingsConditionInput
) {
  deleteStandings(input: $input, condition: $condition) {
    id
    started
    finished
    runners {
      nextToken
      __typename
    }
    top_time {
      id
      runner
      time
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    standingsTop_timeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStandingsMutationVariables,
  APITypes.DeleteStandingsMutation
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    createdAt
    updatedAt
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
    sweeps_start
    sweeps_end
    sweeps_winner
    seriesID
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
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
      __typename
    }
    createdAt
    updatedAt
    racesStandingsId
    racesGameId
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
    sweeps_start
    sweeps_end
    sweeps_winner
    seriesID
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
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
      __typename
    }
    createdAt
    updatedAt
    racesStandingsId
    racesGameId
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
    sweeps_start
    sweeps_end
    sweeps_winner
    seriesID
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
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
      __typename
    }
    createdAt
    updatedAt
    racesStandingsId
    racesGameId
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
export const createAbout = /* GraphQL */ `mutation CreateAbout(
  $input: CreateAboutInput!
  $condition: ModelAboutConditionInput
) {
  createAbout(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    aboutLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAboutMutationVariables,
  APITypes.CreateAboutMutation
>;
export const updateAbout = /* GraphQL */ `mutation UpdateAbout(
  $input: UpdateAboutInput!
  $condition: ModelAboutConditionInput
) {
  updateAbout(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    aboutLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAboutMutationVariables,
  APITypes.UpdateAboutMutation
>;
export const deleteAbout = /* GraphQL */ `mutation DeleteAbout(
  $input: DeleteAboutInput!
  $condition: ModelAboutConditionInput
) {
  deleteAbout(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    aboutLinksId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAboutMutationVariables,
  APITypes.DeleteAboutMutation
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
export const createStandingsRunners = /* GraphQL */ `mutation CreateStandingsRunners(
  $input: CreateStandingsRunnersInput!
  $condition: ModelStandingsRunnersConditionInput
) {
  createStandingsRunners(input: $input, condition: $condition) {
    id
    runnersId
    standingsId
    runners {
      id
      name
      image
      createdAt
      updatedAt
      __typename
    }
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStandingsRunnersMutationVariables,
  APITypes.CreateStandingsRunnersMutation
>;
export const updateStandingsRunners = /* GraphQL */ `mutation UpdateStandingsRunners(
  $input: UpdateStandingsRunnersInput!
  $condition: ModelStandingsRunnersConditionInput
) {
  updateStandingsRunners(input: $input, condition: $condition) {
    id
    runnersId
    standingsId
    runners {
      id
      name
      image
      createdAt
      updatedAt
      __typename
    }
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStandingsRunnersMutationVariables,
  APITypes.UpdateStandingsRunnersMutation
>;
export const deleteStandingsRunners = /* GraphQL */ `mutation DeleteStandingsRunners(
  $input: DeleteStandingsRunnersInput!
  $condition: ModelStandingsRunnersConditionInput
) {
  deleteStandingsRunners(input: $input, condition: $condition) {
    id
    runnersId
    standingsId
    runners {
      id
      name
      image
      createdAt
      updatedAt
      __typename
    }
    standings {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStandingsRunnersMutationVariables,
  APITypes.DeleteStandingsRunnersMutation
>;

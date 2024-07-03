/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGame = /* GraphQL */ `query GetGame($id: ID!) {
  getGame(id: $id) {
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
` as GeneratedQuery<APITypes.GetGameQueryVariables, APITypes.GetGameQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
export const getTopTime = /* GraphQL */ `query GetTopTime($id: ID!) {
  getTopTime(id: $id) {
    id
    runner
    time
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTopTimeQueryVariables,
  APITypes.GetTopTimeQuery
>;
export const listTopTimes = /* GraphQL */ `query ListTopTimes(
  $filter: ModelTopTimeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTopTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      runner
      time
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTopTimesQueryVariables,
  APITypes.ListTopTimesQuery
>;
export const getRaceResults = /* GraphQL */ `query GetRaceResults($id: ID!) {
  getRaceResults(id: $id) {
    id
    points
    link
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
      __typename
    }
    createdAt
    updatedAt
    raceResultsGameId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRaceResultsQueryVariables,
  APITypes.GetRaceResultsQuery
>;
export const listRaceResults = /* GraphQL */ `query ListRaceResults(
  $filter: ModelRaceResultsFilterInput
  $limit: Int
  $nextToken: String
) {
  listRaceResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      points
      link
      time
      createdAt
      updatedAt
      raceResultsGameId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRaceResultsQueryVariables,
  APITypes.ListRaceResultsQuery
>;
export const getGameStoreLink = /* GraphQL */ `query GetGameStoreLink($id: ID!) {
  getGameStoreLink(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGameStoreLinkQueryVariables,
  APITypes.GetGameStoreLinkQuery
>;
export const listGameStoreLinks = /* GraphQL */ `query ListGameStoreLinks(
  $filter: ModelGameStoreLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameStoreLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGameStoreLinksQueryVariables,
  APITypes.ListGameStoreLinksQuery
>;
export const getRaces = /* GraphQL */ `query GetRaces($id: ID!) {
  getRaces(id: $id) {
    id
    sweeps_start
    sweeps_end
    sweeps_winner
    seriesID
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
    racesGameId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRacesQueryVariables, APITypes.GetRacesQuery>;
export const listRaces = /* GraphQL */ `query ListRaces(
  $filter: ModelRacesFilterInput
  $limit: Int
  $nextToken: String
) {
  listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sweeps_start
      sweeps_end
      sweeps_winner
      seriesID
      createdAt
      updatedAt
      racesGameId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRacesQueryVariables, APITypes.ListRacesQuery>;
export const racesBySeriesID = /* GraphQL */ `query RacesBySeriesID(
  $seriesID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRacesFilterInput
  $limit: Int
  $nextToken: String
) {
  racesBySeriesID(
    seriesID: $seriesID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sweeps_start
      sweeps_end
      sweeps_winner
      seriesID
      createdAt
      updatedAt
      racesGameId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RacesBySeriesIDQueryVariables,
  APITypes.RacesBySeriesIDQuery
>;
export const getSeries = /* GraphQL */ `query GetSeries($id: ID!) {
  getSeries(id: $id) {
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
` as GeneratedQuery<APITypes.GetSeriesQueryVariables, APITypes.GetSeriesQuery>;
export const listSeries = /* GraphQL */ `query ListSeries(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSeriesQueryVariables,
  APITypes.ListSeriesQuery
>;
export const getLinks = /* GraphQL */ `query GetLinks($id: ID!) {
  getLinks(id: $id) {
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
` as GeneratedQuery<APITypes.GetLinksQueryVariables, APITypes.GetLinksQuery>;
export const listLinks = /* GraphQL */ `query ListLinks(
  $filter: ModelLinksFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLinksQueryVariables, APITypes.ListLinksQuery>;
export const getSweepstakesEntry = /* GraphQL */ `query GetSweepstakesEntry($id: ID!) {
  getSweepstakesEntry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSweepstakesEntryQueryVariables,
  APITypes.GetSweepstakesEntryQuery
>;
export const listSweepstakesEntries = /* GraphQL */ `query ListSweepstakesEntries(
  $filter: ModelSweepstakesEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSweepstakesEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSweepstakesEntriesQueryVariables,
  APITypes.ListSweepstakesEntriesQuery
>;
export const getPlaceholder = /* GraphQL */ `query GetPlaceholder($id: ID!) {
  getPlaceholder(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPlaceholderQueryVariables,
  APITypes.GetPlaceholderQuery
>;
export const listPlaceholders = /* GraphQL */ `query ListPlaceholders(
  $filter: ModelPlaceholderFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaceholders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      game_title
      game_image_alt
      background_image
      sweeps_winner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlaceholdersQueryVariables,
  APITypes.ListPlaceholdersQuery
>;
export const getSuggestions = /* GraphQL */ `query GetSuggestions($id: ID!) {
  getSuggestions(id: $id) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSuggestionsQueryVariables,
  APITypes.GetSuggestionsQuery
>;
export const listSuggestions = /* GraphQL */ `query ListSuggestions(
  $filter: ModelSuggestionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      suggestion
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSuggestionsQueryVariables,
  APITypes.ListSuggestionsQuery
>;

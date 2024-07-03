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
    topTimeGameId
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
      topTimeGameId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRaceResultsQueryVariables,
  APITypes.ListRaceResultsQuery
>;
export const raceResultsByAboutID = /* GraphQL */ `query RaceResultsByAboutID(
  $aboutID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRaceResultsFilterInput
  $limit: Int
  $nextToken: String
) {
  raceResultsByAboutID(
    aboutID: $aboutID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RaceResultsByAboutIDQueryVariables,
  APITypes.RaceResultsByAboutIDQuery
>;
export const raceResultsByGameID = /* GraphQL */ `query RaceResultsByGameID(
  $gameID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRaceResultsFilterInput
  $limit: Int
  $nextToken: String
) {
  raceResultsByGameID(
    gameID: $gameID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RaceResultsByGameIDQueryVariables,
  APITypes.RaceResultsByGameIDQuery
>;
export const getGameStoreLink = /* GraphQL */ `query GetGameStoreLink($id: ID!) {
  getGameStoreLink(id: $id) {
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
      __typename
    }
    createdAt
    updatedAt
    gameStoreLinkGameId
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
      gameStoreLinkGameId
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
` as GeneratedQuery<APITypes.GetRacesQueryVariables, APITypes.GetRacesQuery>;
export const listRaces = /* GraphQL */ `query ListRaces(
  $filter: ModelRacesFilterInput
  $limit: Int
  $nextToken: String
) {
  listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RacesBySeriesIDQueryVariables,
  APITypes.RacesBySeriesIDQuery
>;
export const racesByGameIDAndStarted = /* GraphQL */ `query RacesByGameIDAndStarted(
  $gameID: ID!
  $started: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRacesFilterInput
  $limit: Int
  $nextToken: String
) {
  racesByGameIDAndStarted(
    gameID: $gameID
    started: $started
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RacesByGameIDAndStartedQueryVariables,
  APITypes.RacesByGameIDAndStartedQuery
>;
export const getSeries = /* GraphQL */ `query GetSeries($id: ID!) {
  getSeries(id: $id) {
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
` as GeneratedQuery<APITypes.GetSeriesQueryVariables, APITypes.GetSeriesQuery>;
export const listSeries = /* GraphQL */ `query ListSeries(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
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
export const getRacers = /* GraphQL */ `query GetRacers($id: ID!) {
  getRacers(id: $id) {
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
` as GeneratedQuery<APITypes.GetRacersQueryVariables, APITypes.GetRacersQuery>;
export const listRacers = /* GraphQL */ `query ListRacers(
  $filter: ModelRacersFilterInput
  $limit: Int
  $nextToken: String
) {
  listRacers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      about_info
      image
      createdAt
      updatedAt
      racersLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRacersQueryVariables,
  APITypes.ListRacersQuery
>;
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
export const getRacesRacers = /* GraphQL */ `query GetRacesRacers($id: ID!) {
  getRacesRacers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRacesRacersQueryVariables,
  APITypes.GetRacesRacersQuery
>;
export const listRacesRacers = /* GraphQL */ `query ListRacesRacers(
  $filter: ModelRacesRacersFilterInput
  $limit: Int
  $nextToken: String
) {
  listRacesRacers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      racesId
      racersId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRacesRacersQueryVariables,
  APITypes.ListRacesRacersQuery
>;
export const racesRacersByRacesId = /* GraphQL */ `query RacesRacersByRacesId(
  $racesId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRacesRacersFilterInput
  $limit: Int
  $nextToken: String
) {
  racesRacersByRacesId(
    racesId: $racesId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      racesId
      racersId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RacesRacersByRacesIdQueryVariables,
  APITypes.RacesRacersByRacesIdQuery
>;
export const racesRacersByRacersId = /* GraphQL */ `query RacesRacersByRacersId(
  $racersId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRacesRacersFilterInput
  $limit: Int
  $nextToken: String
) {
  racesRacersByRacersId(
    racersId: $racersId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      racesId
      racersId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RacesRacersByRacersIdQueryVariables,
  APITypes.RacesRacersByRacersIdQuery
>;

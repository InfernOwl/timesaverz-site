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
      runnersID
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
export const raceResultsByRunnersID = /* GraphQL */ `query RaceResultsByRunnersID(
  $runnersID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRaceResultsFilterInput
  $limit: Int
  $nextToken: String
) {
  raceResultsByRunnersID(
    runnersID: $runnersID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      points
      link
      time
      runnersID
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
  APITypes.RaceResultsByRunnersIDQueryVariables,
  APITypes.RaceResultsByRunnersIDQuery
>;
export const getRunners = /* GraphQL */ `query GetRunners($id: ID!) {
  getRunners(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRunnersQueryVariables,
  APITypes.GetRunnersQuery
>;
export const listRunners = /* GraphQL */ `query ListRunners(
  $filter: ModelRunnersFilterInput
  $limit: Int
  $nextToken: String
) {
  listRunners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRunnersQueryVariables,
  APITypes.ListRunnersQuery
>;
export const getStandings = /* GraphQL */ `query GetStandings($id: ID!) {
  getStandings(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStandingsQueryVariables,
  APITypes.GetStandingsQuery
>;
export const listStandings = /* GraphQL */ `query ListStandings(
  $filter: ModelStandingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listStandings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      started
      finished
      createdAt
      updatedAt
      standingsTop_timeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStandingsQueryVariables,
  APITypes.ListStandingsQuery
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
      racesStandingsId
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
      racesStandingsId
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
export const getAbout = /* GraphQL */ `query GetAbout($id: ID!) {
  getAbout(id: $id) {
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
` as GeneratedQuery<APITypes.GetAboutQueryVariables, APITypes.GetAboutQuery>;
export const listAbouts = /* GraphQL */ `query ListAbouts(
  $filter: ModelAboutFilterInput
  $limit: Int
  $nextToken: String
) {
  listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      about_info
      image
      createdAt
      updatedAt
      aboutLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAboutsQueryVariables,
  APITypes.ListAboutsQuery
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
export const getStandingsRunners = /* GraphQL */ `query GetStandingsRunners($id: ID!) {
  getStandingsRunners(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStandingsRunnersQueryVariables,
  APITypes.GetStandingsRunnersQuery
>;
export const listStandingsRunners = /* GraphQL */ `query ListStandingsRunners(
  $filter: ModelStandingsRunnersFilterInput
  $limit: Int
  $nextToken: String
) {
  listStandingsRunners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      runnersId
      standingsId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStandingsRunnersQueryVariables,
  APITypes.ListStandingsRunnersQuery
>;
export const standingsRunnersByRunnersId = /* GraphQL */ `query StandingsRunnersByRunnersId(
  $runnersId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStandingsRunnersFilterInput
  $limit: Int
  $nextToken: String
) {
  standingsRunnersByRunnersId(
    runnersId: $runnersId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      runnersId
      standingsId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StandingsRunnersByRunnersIdQueryVariables,
  APITypes.StandingsRunnersByRunnersIdQuery
>;
export const standingsRunnersByStandingsId = /* GraphQL */ `query StandingsRunnersByStandingsId(
  $standingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStandingsRunnersFilterInput
  $limit: Int
  $nextToken: String
) {
  standingsRunnersByStandingsId(
    standingsId: $standingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      runnersId
      standingsId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StandingsRunnersByStandingsIdQueryVariables,
  APITypes.StandingsRunnersByStandingsIdQuery
>;

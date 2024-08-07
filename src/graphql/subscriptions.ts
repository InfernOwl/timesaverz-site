/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGame = /* GraphQL */ `subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
  onCreateGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
  onUpdateGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
  onDeleteGame(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onCreateTopTime = /* GraphQL */ `subscription OnCreateTopTime($filter: ModelSubscriptionTopTimeFilterInput) {
  onCreateTopTime(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTopTimeSubscriptionVariables,
  APITypes.OnCreateTopTimeSubscription
>;
export const onUpdateTopTime = /* GraphQL */ `subscription OnUpdateTopTime($filter: ModelSubscriptionTopTimeFilterInput) {
  onUpdateTopTime(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTopTimeSubscriptionVariables,
  APITypes.OnUpdateTopTimeSubscription
>;
export const onDeleteTopTime = /* GraphQL */ `subscription OnDeleteTopTime($filter: ModelSubscriptionTopTimeFilterInput) {
  onDeleteTopTime(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTopTimeSubscriptionVariables,
  APITypes.OnDeleteTopTimeSubscription
>;
export const onCreateRaceResults = /* GraphQL */ `subscription OnCreateRaceResults(
  $filter: ModelSubscriptionRaceResultsFilterInput
) {
  onCreateRaceResults(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRaceResultsSubscriptionVariables,
  APITypes.OnCreateRaceResultsSubscription
>;
export const onUpdateRaceResults = /* GraphQL */ `subscription OnUpdateRaceResults(
  $filter: ModelSubscriptionRaceResultsFilterInput
) {
  onUpdateRaceResults(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRaceResultsSubscriptionVariables,
  APITypes.OnUpdateRaceResultsSubscription
>;
export const onDeleteRaceResults = /* GraphQL */ `subscription OnDeleteRaceResults(
  $filter: ModelSubscriptionRaceResultsFilterInput
) {
  onDeleteRaceResults(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRaceResultsSubscriptionVariables,
  APITypes.OnDeleteRaceResultsSubscription
>;
export const onCreateGameStoreLink = /* GraphQL */ `subscription OnCreateGameStoreLink(
  $filter: ModelSubscriptionGameStoreLinkFilterInput
) {
  onCreateGameStoreLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameStoreLinkSubscriptionVariables,
  APITypes.OnCreateGameStoreLinkSubscription
>;
export const onUpdateGameStoreLink = /* GraphQL */ `subscription OnUpdateGameStoreLink(
  $filter: ModelSubscriptionGameStoreLinkFilterInput
) {
  onUpdateGameStoreLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameStoreLinkSubscriptionVariables,
  APITypes.OnUpdateGameStoreLinkSubscription
>;
export const onDeleteGameStoreLink = /* GraphQL */ `subscription OnDeleteGameStoreLink(
  $filter: ModelSubscriptionGameStoreLinkFilterInput
) {
  onDeleteGameStoreLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameStoreLinkSubscriptionVariables,
  APITypes.OnDeleteGameStoreLinkSubscription
>;
export const onCreateRaces = /* GraphQL */ `subscription OnCreateRaces($filter: ModelSubscriptionRacesFilterInput) {
  onCreateRaces(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRacesSubscriptionVariables,
  APITypes.OnCreateRacesSubscription
>;
export const onUpdateRaces = /* GraphQL */ `subscription OnUpdateRaces($filter: ModelSubscriptionRacesFilterInput) {
  onUpdateRaces(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRacesSubscriptionVariables,
  APITypes.OnUpdateRacesSubscription
>;
export const onDeleteRaces = /* GraphQL */ `subscription OnDeleteRaces($filter: ModelSubscriptionRacesFilterInput) {
  onDeleteRaces(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRacesSubscriptionVariables,
  APITypes.OnDeleteRacesSubscription
>;
export const onCreateSeries = /* GraphQL */ `subscription OnCreateSeries($filter: ModelSubscriptionSeriesFilterInput) {
  onCreateSeries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSeriesSubscriptionVariables,
  APITypes.OnCreateSeriesSubscription
>;
export const onUpdateSeries = /* GraphQL */ `subscription OnUpdateSeries($filter: ModelSubscriptionSeriesFilterInput) {
  onUpdateSeries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSeriesSubscriptionVariables,
  APITypes.OnUpdateSeriesSubscription
>;
export const onDeleteSeries = /* GraphQL */ `subscription OnDeleteSeries($filter: ModelSubscriptionSeriesFilterInput) {
  onDeleteSeries(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSeriesSubscriptionVariables,
  APITypes.OnDeleteSeriesSubscription
>;
export const onCreateLinks = /* GraphQL */ `subscription OnCreateLinks($filter: ModelSubscriptionLinksFilterInput) {
  onCreateLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLinksSubscriptionVariables,
  APITypes.OnCreateLinksSubscription
>;
export const onUpdateLinks = /* GraphQL */ `subscription OnUpdateLinks($filter: ModelSubscriptionLinksFilterInput) {
  onUpdateLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLinksSubscriptionVariables,
  APITypes.OnUpdateLinksSubscription
>;
export const onDeleteLinks = /* GraphQL */ `subscription OnDeleteLinks($filter: ModelSubscriptionLinksFilterInput) {
  onDeleteLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLinksSubscriptionVariables,
  APITypes.OnDeleteLinksSubscription
>;
export const onCreateRacers = /* GraphQL */ `subscription OnCreateRacers($filter: ModelSubscriptionRacersFilterInput) {
  onCreateRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRacersSubscriptionVariables,
  APITypes.OnCreateRacersSubscription
>;
export const onUpdateRacers = /* GraphQL */ `subscription OnUpdateRacers($filter: ModelSubscriptionRacersFilterInput) {
  onUpdateRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRacersSubscriptionVariables,
  APITypes.OnUpdateRacersSubscription
>;
export const onDeleteRacers = /* GraphQL */ `subscription OnDeleteRacers($filter: ModelSubscriptionRacersFilterInput) {
  onDeleteRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRacersSubscriptionVariables,
  APITypes.OnDeleteRacersSubscription
>;
export const onCreateSweepstakesEntry = /* GraphQL */ `subscription OnCreateSweepstakesEntry(
  $filter: ModelSubscriptionSweepstakesEntryFilterInput
) {
  onCreateSweepstakesEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSweepstakesEntrySubscriptionVariables,
  APITypes.OnCreateSweepstakesEntrySubscription
>;
export const onUpdateSweepstakesEntry = /* GraphQL */ `subscription OnUpdateSweepstakesEntry(
  $filter: ModelSubscriptionSweepstakesEntryFilterInput
) {
  onUpdateSweepstakesEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSweepstakesEntrySubscriptionVariables,
  APITypes.OnUpdateSweepstakesEntrySubscription
>;
export const onDeleteSweepstakesEntry = /* GraphQL */ `subscription OnDeleteSweepstakesEntry(
  $filter: ModelSubscriptionSweepstakesEntryFilterInput
) {
  onDeleteSweepstakesEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSweepstakesEntrySubscriptionVariables,
  APITypes.OnDeleteSweepstakesEntrySubscription
>;
export const onCreatePlaceholder = /* GraphQL */ `subscription OnCreatePlaceholder(
  $filter: ModelSubscriptionPlaceholderFilterInput
) {
  onCreatePlaceholder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlaceholderSubscriptionVariables,
  APITypes.OnCreatePlaceholderSubscription
>;
export const onUpdatePlaceholder = /* GraphQL */ `subscription OnUpdatePlaceholder(
  $filter: ModelSubscriptionPlaceholderFilterInput
) {
  onUpdatePlaceholder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlaceholderSubscriptionVariables,
  APITypes.OnUpdatePlaceholderSubscription
>;
export const onDeletePlaceholder = /* GraphQL */ `subscription OnDeletePlaceholder(
  $filter: ModelSubscriptionPlaceholderFilterInput
) {
  onDeletePlaceholder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlaceholderSubscriptionVariables,
  APITypes.OnDeletePlaceholderSubscription
>;
export const onCreateSuggestions = /* GraphQL */ `subscription OnCreateSuggestions(
  $filter: ModelSubscriptionSuggestionsFilterInput
) {
  onCreateSuggestions(filter: $filter) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSuggestionsSubscriptionVariables,
  APITypes.OnCreateSuggestionsSubscription
>;
export const onUpdateSuggestions = /* GraphQL */ `subscription OnUpdateSuggestions(
  $filter: ModelSubscriptionSuggestionsFilterInput
) {
  onUpdateSuggestions(filter: $filter) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSuggestionsSubscriptionVariables,
  APITypes.OnUpdateSuggestionsSubscription
>;
export const onDeleteSuggestions = /* GraphQL */ `subscription OnDeleteSuggestions(
  $filter: ModelSubscriptionSuggestionsFilterInput
) {
  onDeleteSuggestions(filter: $filter) {
    id
    suggestion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSuggestionsSubscriptionVariables,
  APITypes.OnDeleteSuggestionsSubscription
>;
export const onCreateRacesRacers = /* GraphQL */ `subscription OnCreateRacesRacers(
  $filter: ModelSubscriptionRacesRacersFilterInput
) {
  onCreateRacesRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRacesRacersSubscriptionVariables,
  APITypes.OnCreateRacesRacersSubscription
>;
export const onUpdateRacesRacers = /* GraphQL */ `subscription OnUpdateRacesRacers(
  $filter: ModelSubscriptionRacesRacersFilterInput
) {
  onUpdateRacesRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRacesRacersSubscriptionVariables,
  APITypes.OnUpdateRacesRacersSubscription
>;
export const onDeleteRacesRacers = /* GraphQL */ `subscription OnDeleteRacesRacers(
  $filter: ModelSubscriptionRacesRacersFilterInput
) {
  onDeleteRacesRacers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRacesRacersSubscriptionVariables,
  APITypes.OnDeleteRacesRacersSubscription
>;

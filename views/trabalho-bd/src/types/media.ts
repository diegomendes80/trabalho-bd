export interface BaseMedia {
  name: string;
  type: string;
  sinopse: string;
  genders: string[];
  srcBanner: string;
  srcBannerMobile: string;
  director: string;
  releaseYear: number;
  minuteDuration: number;
  saved: boolean;
}

export interface Movie extends BaseMedia {
    type: "movies";
}

export interface Serie extends BaseMedia {
    type: "series";
    qtdEpisodes: number;
    qtdSeasons: number;
}

export type Media = Movie | Serie;
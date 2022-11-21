interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Image {
  jpg: Jpg;
  webp: Webp;
}

interface Title {
  type: string;
  title: string;
}

interface From {
  day: number;
  month: number;
  year: number;
}

interface To {
  day?: any;
  month?: any;
  year?: any;
}

interface Prop {
  from: From;
  to: To;
}

interface Published {
  from: string;
  to?: any;
  prop: Prop;
  string: string;
}

export interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Serialization {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Manga {
  mal_id: number;
  url: string;
  images: Image;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  chapters?: any;
  volumes?: any;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: any[];
  themes: any[];
  demographics: Demographic[];
}

interface MangaRequest {
  data: Manga
}

interface MangaRequestSearch {
  data: Manga[];
}
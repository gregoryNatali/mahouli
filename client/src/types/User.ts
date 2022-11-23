import { EntryList } from "./Database";

export interface User {
  id: number;
  profile_picture: string;
  name: string;
  email: string;
  confirmed_email: boolean;
  confirm_code: string;
  private_lists: boolean;
  password: string;
  join_date: string;
  entries?: EntryList[];
}

export interface Account {
  user: {
    name: string
    join_date: string
    profile_picture: string
  },
  entries: entry[]
}

interface entry {
  is_anime: boolean
  score: number
  anime: {
    name: string
    img_url: string
    mal_id: number
  }
}
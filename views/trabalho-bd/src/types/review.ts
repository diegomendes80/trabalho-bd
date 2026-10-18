import type { Media } from "./media";

export interface Review {
  text: string;
  username: string;
  date: string;
  rate: number;
  media: Media; 
}
import type { Media } from "./media";
import type { Review } from "./review";

export interface User {
  name: string;
  usercode: string;
  email: string;
  bioPhrase: string;
  registerDate: Date;
  birthdate: Date;
  savedMedias: Media[];
  reviews: Review[];
}

import { Country } from "./Country";

export type Continent = {
  id: number;
  name: string;
  image: string;
  description: string;
  paragraph: string;
  countryNumber: number;
  languageNumber: number;
  cities100: number;
  countries: Country[];
}
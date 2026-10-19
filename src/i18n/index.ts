import { el } from "./el";
import { en } from "./en";

export type Locale = "el" | "en";

export const getUi = (locale: Locale) => (locale === "el" ? el : en);

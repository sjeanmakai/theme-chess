import { selector } from "recoil";
import { themeState } from "../atoms/themeState";

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    theme: get(themeState).theme,
    dark: get(themeState).darkVariant,
    light: get(themeState).lightVariant,
  }),
});

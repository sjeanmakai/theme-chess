import { atom } from "recoil";
import { ThemeContent } from "../../types";

export const themeState = atom({
  key: "themeContent",
  default: {
    theme: "Classic",
    darkVariant: "#5C4033",
    lightVariant: "#C4A484",
  } as ThemeContent,
});

export type Theme = {
    name: string,
    body?: string,
    text?: string,
    dark?: string,
    secondaryText?: string,
    accentColor?: string,
    accentBright?: string,
    projectCard?: string,
    skinColor?: string,
    skinColor2?: string,
    imageDark?: string,
    imageClothes?: string,
    avatarMisc?: string,
    avatarShoes?: string
  };

export type Themes = {
  light: Theme,
  dark: Theme
}
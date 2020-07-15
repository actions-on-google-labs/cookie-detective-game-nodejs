import { strEnum } from './type.util';

export const themeId = strEnum(['primary', 'secondary', 'tertiary']);
export type ThemeId = keyof typeof themeId;

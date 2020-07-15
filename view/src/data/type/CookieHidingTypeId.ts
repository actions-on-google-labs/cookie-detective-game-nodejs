import { strEnum } from './type.util';

export const cookieHidingTypeId = strEnum(['auto', 'manual']);
export type CookieHidingTypeId = keyof typeof cookieHidingTypeId;

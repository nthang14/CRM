import cookie from "js-cookie";

// Json to string
export const jsonToString = (value: any) => {
  if (typeof value === "string") return value;
  return JSON.stringify(value);
};
//
export const stringToJson = (value: string = "") => {
  if (!value) return;
  return JSON.parse(value);
};

// ===== ACCESS_TOKEN =====
const ACCESS_TOKEN_KEY = "accessToken";

export const saveAccessToken = (accessToken: string) => {
  cookie.set(ACCESS_TOKEN_KEY, accessToken);
};

export const readAccessToken = () => {
  return cookie.get(ACCESS_TOKEN_KEY);
};

// ===== REFRESH ACCESS_TOKEN =====

const REFRESH_TOKEN_KEY = "refreshToken";

export const saveRefreshToken = (refreshToken: string) => {
  cookie.set(REFRESH_TOKEN_KEY, refreshToken);
};

export const readRefreshToken = () => {
  return cookie.get(REFRESH_TOKEN_KEY);
};


// save profile
const PROFILE = "profile";
export const saveProfile = (profile: object) => {
  cookie.set(PROFILE, jsonToString(profile));
}
export const readProfile = () => {
  return stringToJson(cookie.get(PROFILE) || "");
};
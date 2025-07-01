export type AuthStore = {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
};
// const LINKS = ["/shuffle", "/best", "/new", "/read", "/all", "/favorites"];
export const LINKS = [
  "/top",
  "/random",
  "/new",
  "/done",
  "/all",
  "/videos",
  "/favorites",
  "/data",
];

export const LINK_ALIASES: { [key: string]: string } = {
  "/data": "/#",
};
export const HOME = "/";
export const DEFAULT_PATH = LINKS[0];

export const mediaSources = ["soundcloud.com", "youtube.com", "spotify.com"];

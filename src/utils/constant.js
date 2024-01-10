export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_USER_AVATAR =
  "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:`Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  }
     
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w300/";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/1c598436-a03a-49fc-afc5-69e717e55e3d/LK-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "german",
    name: "German",
  },
  {
    identifier: "arabic",
    name: "Arabic",
  },
];

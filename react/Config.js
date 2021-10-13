// define your environment
export const ENVIRONMENT = "development" // "development" or "production"

// API URLs
const developmentApiUrl = "http://ad-manager.local/api/";
const productionApiUrl = "";

// Localstorage Key Identifiers
export const AppConst = {
  'token': '@admanager:token'
}

// Don't touch this
export const API_URL = ENVIRONMENT === "development" ? developmentApiUrl : productionApiUrl;

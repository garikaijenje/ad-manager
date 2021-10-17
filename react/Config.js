// define your environment
export const ENVIRONMENT = "production" // "development" or "production"

// API URLs
const developmentApiUrl = "http://ad-manager.local/api/";
const productionApiUrl = "http://fs.itguy.co.zw/api/";

// Localstorage Key Identifiers
export const AppConst = {
  'token': '@admanagerprod:token'
}

// Don't touch this
export const API_URL = ENVIRONMENT === "development" ? developmentApiUrl : productionApiUrl;

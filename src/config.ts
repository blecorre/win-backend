import dotenv from 'dotenv';
dotenv.config();

export const checkEnvVariables = (vars: string[]): void =>
  vars.forEach((variable) => {
    if (!process.env[variable] || process.env[variable] === '') {
      throw new Error(`${variable} must be provided in the ENV`);
    }
  });

checkEnvVariables([
  'PORT',
  'APP_ACCESS_TOKEN_KEY',
  'APP_REFRESH_TOKEN_KEY',
  'APP_PROMETHEUS_PORT',
  'APP_VERSION',
  'MONGODB_URL',
  'DB_NAME',
  'DERBYSOFT_PROXY_URL',
  'CLIENT_JWT',
  'SIMARD_JWT',
  'SIMARD_ORG_ID',
  'SUMARD_URL'
]);

export const port = Number(process.env.PORT);
export const accessTokenKey = String(process.env.APP_ACCESS_TOKEN_KEY);
export const refreshTokenKey = String(process.env.APP_REFRESH_TOKEN_KEY);
export const debugEnabled = Boolean(process.env.DEBUG_LPMS_SERVER === 'true');
export const prometheusEnabled = Boolean(
  process.env.PROMETHEUS_ENABLED === 'true'
);
export const prometheusPort = Number(process.env.APP_PROMETHEUS_PORT);
export const refreshTokenMaxAge = 30 * 24 * 60 * 60 * 1000; //30d
export const accessTokenMaxAge = 30 * 60 * 1000; //30m
export const mongoDBUrl = String(process.env.MONGODB_URL);
export const DBName = String(process.env.DB_NAME);
export const derbySoftProxyUrl = String(process.env.DERBYSOFT_PROXY_URL);
export const clientJwt = String(process.env.CLIENT_JWT);
export const simardJwt = String(process.env.SIMARD_JWT);
export const simardOrgId = String(process.env.SIMARD_ORG_ID);
export const simardUrl = String(process.env.SUMARD_URL);
export const defaultRadius = 2000; //in meters

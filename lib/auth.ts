import * as msal from '@azure/msal-node';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: process.env.AAD_ENDPOINT + process.env.TENANT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
};

/**
 * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
 * The scope is always in the format '<resource>/.default'. For more, visit:
 * https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow
 */

export type TokenRequest = { scopes: string[] };
export const tokenRequest: TokenRequest = {
  scopes: [process.env.GRAPH_ENDPOINT + '.default'],
};

export const apiConfig = {
  uri: process.env.GRAPH_ENDPOINT + 'v1.0/users',
};

/**
 * Initialize a confidential client application. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
 */
export const cca = new msal.ConfidentialClientApplication(msalConfig);

export const getToken = async (tokenRequest: TokenRequest) => {
  return await cca.acquireTokenByClientCredential(tokenRequest);
};

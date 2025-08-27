import { createGraphQLClient } from '@shopify/graphql-client';

export const shopifyGraphqlClient = createGraphQLClient({
  url: 'https://quickstart-6e6df1c6.myshopify.com/api/2025-01/graphql.json',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Shopify-Storefront-Access-Token': 'public-token',
  },
  retries: 1,
});

/*
 - Direct API Access
 You can make requests to the Admin API directly from your app using the standard web fetch API!

 - https://shopify.dev/docs/api/app-bridge-library#direct-api-access
*/
export const shopifyGraphqlProxyClient = createGraphQLClient({
  url: 'shopify:admin/api/2025-01/graphql.json',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Shopify-Storefront-Access-Token': 'public-token',
  },
  retries: 1,
});

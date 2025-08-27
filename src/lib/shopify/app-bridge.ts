import { ShopifyGlobal } from '@shopify/app-bridge-react';

/*
 Using app bridge library 4 directl throws error Error: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')

 https://github.com/Shopify/shopify-app-bridge/issues/385

 So we did this solution in analyzify react router
*/

// Define a Proxy object to throw an error when accessed in a server environment.
const serverProxy = new Proxy(
  {},
  {
    get(target, property) {
      // When trying to access any property of the Proxy, throw an error.
      throw new Error(
        `shopify.${String(
          property
        )} can&apos;t be used1 in a server environment. You likely need to move this code into an Effect.`
      );
    },
  }
);

// Function to determine the appropriate Shopify object to use.
export default function useAppBridge(): ShopifyGlobal {
  // Check if the code is running in a server environment (by checking if window is undefined).
  if (typeof window === 'undefined') {
    // If in a server environment, return the Proxy that throws errors on access.
    return serverProxy as ShopifyGlobal;
  }

  // If not in a server environment, check if the global shopify object exists on window.
  if (!window.shopify) {
    // If the shopify object is not found, throw an error indicating the likely setup issue.
    throw new Error(
      'The shopify global is not defined. This likely means the App Bridge script tag was not added correctly to this page'
    );
  }

  // If the shopify object exists, return it for use.
  return window.shopify;
}

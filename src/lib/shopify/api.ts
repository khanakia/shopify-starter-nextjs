import { ShopQueryDocument, ShopQueryQuery } from '@/gen/shopify/graphql';
import { shopifyGraphqlProxyClient } from './graphql';

export const getShop = async () => {
  // const sessions = await findSessionsByShop(shop);
  // const client = new shopify.clients.Graphql({
  //   session: sessions[0],
  // });

  const { data, errors } = await shopifyGraphqlProxyClient.request<ShopQueryQuery>(ShopQueryDocument, {
    // variables: { first: 10 }
  });
  if (errors) {
    throw new Error(errors.message);
  }
  if (!data) {
    throw new Error('No data returned from Shopify');
  }
  return data.shop;
};

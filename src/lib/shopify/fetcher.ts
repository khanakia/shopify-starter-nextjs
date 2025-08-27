// import { GraphqlErrorFromResponse } from '@fasto/utils'

import { shopifyGraphqlProxyClient } from './graphql';

// import { getFastoGqlClient } from './util'

export const shopifyProxyFetcher = <TData, TVariables>(
  operation: string,
  variables?: TVariables
): (() => Promise<TData>) => {
  return async () => {
    // const result = await (API.graphql({
    //   query,
    //   variables: variables || {},
    //   authMode: 'AMAZON_COGNITO_USER_POOLS',
    // }) as unknown as Promise<GraphQLResult<TData>>)

    const {
      data,
      errors,
      extensions: _extensions,
    } = await shopifyGraphqlProxyClient.request(operation, {
      keepalive: true,
      variables: variables as Record<string, unknown>,
    });
    // console.log(data, errors, extensions);

    // if (result.errors) {
    //   throw GraphqlErrorFromResponse(result);
    // }

    if (errors) {
      const message = Array.isArray(errors) && errors.length > 0 ? errors[0].message : 'GraphQL fetching error';
      throw new Error(message);
    }

    return data!;
  };
};

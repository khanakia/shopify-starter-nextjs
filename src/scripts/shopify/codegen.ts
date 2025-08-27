import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // schema: 'https://shopify.dev/admin-graphql-direct-proxy/2025-01',
  schema: './shopify.graphql',
  overwrite: true,

  documents: ['./src/scripts/shopify/schema.graphql'],
  generates: {
    './src/gen/shopify/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],

      config: {
        // withHooks: true,
        fetcher: {
          func: '@/lib/shopify/fetcher#shopifyProxyFetcher',
        },
        reactQueryVersion: 5,
        scalars: {
          // ID: "number",
        },
      },
    },
  },

  hooks: {
    // afterAllFileWrite: ["sed -i '' '/types.dom/d' ./src/generated/saasbytee/graphql.ts"],
  },

  // documents: [
  //   // './document.graphql',
  //   // './app/**/*.{js,ts,jsx,tsx}',
  //   // // './components/**/*.{js,ts,jsx,tsx}',
  //   // // './hooks/**/*.{js,ts,jsx,tsx}',
  //   // // './providers/**/*.{js,ts,jsx,tsx}',
  //   './src/lib/**/*.{js,ts,jsx,tsx}',
  //   // '!./lib/gql/**/*.{js,ts,jsx,tsx}',
  // ],

  // // pluckConfig: pluckConfig,
  // generates: {
  //   './lib/gql/': {
  //     preset: 'client',
  //     plugins: [],
  //   },
  //   // './types/admin.generated.d.ts': {
  //   //   preset,
  //   //   presetConfig: {
  //   //     apiType: ApiType.Admin,
  //   //   },
  //   // },
  // },
};

export default config;

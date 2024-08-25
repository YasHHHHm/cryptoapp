import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Headers for the API requests
const cryptoApiHeaders = {
  'x-rapidapi-key': '01aec5205dmsh40e415db2649df8p144105jsn7c7e23f8ef6f',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

// Utility function to create API request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Create the API service using RTK Query
export default function cryptoApi () {
     createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});
}

// Named export for the generated hook


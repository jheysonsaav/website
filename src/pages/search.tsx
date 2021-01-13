// Copyright (C) Jheyson Saavedra ~ All right reserved.
import React, { ChangeEvent } from 'react'
import { useRouter } from 'next/router';
import Layout from 'src/components/Layout';

function SearchPage() {
  const { query: routerQuery, replace } = useRouter();
  const query =
    (Array.isArray(routerQuery.q)
      ? routerQuery.q[0]
      : routerQuery.q) || '';

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value
      ? { q: event.target.value }
      : undefined;
    replace({
      pathname: '/search',
      query,
    });
  }
  return (
    <Layout
      header
      title={
        query
          ? `${query} - search - Jheyson Saavedra`
          : 'search - Jheyson Saavedra'
      }
      className="flex items-center align-center justify-center mt-4"
    >
      <div className="bg-gray-600 text-gray-300 p-1 hover:border-gray-900 hover:shadow-lg ring-4 ring-gray-500 ring-opacity-50 rounded w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/4 transition duration-500 ease-in-out">
        <input
          type="text"
          name="searcher"
          id="query"
          className="bg-transparent border-none w-full font-medium appearance-none"
          role="search"
          placeholder="Search..."
          value={query}
          onChange={handleSearchInput}
        />
      </div>
    </Layout>
  );
}

export default SearchPage;

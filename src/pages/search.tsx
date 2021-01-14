// Copyright (C) Jheyson Saavedra ~ All right reserved.
import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Layout from 'src/components/Layout';

function SearchPage() {
  const { query: routerQuery, replace } = useRouter();
  const query =
    (Array.isArray(routerQuery.q) ? routerQuery.q[0] : routerQuery.q) || '';

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value ? { q: event.target.value } : undefined;
    replace({
      pathname: '/search',
      query,
    });
  }

  return (
    <Layout
      header
      title={query ? `${query} - search` : 'search'}
      className="flex items-center align-center justify-center h-full"
    >
      <form className="bg-white text-gray-700 dark:bg-gray-600 dark:text-gray-300 focus:shadow-lg hover:shadow-lg ring-4 ring-gray-100 dark:ring-gray-500 dark:ring-opacity-50 rounded p-1 mt-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/4 transition duration-500 ease-in-out">
        <input
          type="text"
          name="query"
          id="query"
          className="block bg-transparent border-none w-full font-medium appearance-none outline-none"
          role="search"
          placeholder="Search..."
          value={query}
          onChange={handleSearchInput}
        />
      </form>
    </Layout>
  );
}

export default SearchPage;

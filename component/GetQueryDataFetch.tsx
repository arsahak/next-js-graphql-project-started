"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./graphql/queries";

const GetQueryDataFetch = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <h1>Books</h1>
        {data?.hello}
      </div>
    </div>
  );
};

export default GetQueryDataFetch;

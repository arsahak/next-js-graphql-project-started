"use client";
import { ReactNode } from "react";
import { ApolloProvider as Provider } from "@apollo/client";
import client from "../lib/apolloClient";

interface ApolloProviderProps {
  children: ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  return <Provider client={client}>{children}</Provider>;
}

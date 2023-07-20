import { ReactNode } from "react";

import { Header } from "./";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

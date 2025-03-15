import React from "react";

export const Button = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <a
    target="_blank"
    href="https://discord.com/invite/vilsrp"
    className="rounded-md bg-purple-600 px-6 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
  >
    {children}
  </a>
);

import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
      <main className="">{children}</main>
    </div>
  );
}

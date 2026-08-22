import React from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Router } from "./Router.tsx";

const rootTailwindStyle =
  "min-h-screen flex flex-col gap-15 items-center justify-start font-medium text-base";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className={rootTailwindStyle}>
      <RouterProvider router={Router} />
    </main>
  </React.StrictMode>,
);

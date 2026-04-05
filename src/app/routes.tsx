import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Admissions } from "./pages/AdmissionsNew";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "admissions", Component: Admissions },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
    ],
  },
]);
import { createBrowserRouter } from "react-router-dom";
import { LaunchEvents } from "./components/LaunchEvents";
import { EventDetails } from "./components/EventDetails";
import { Layout } from "./routes/Layout";
import { ListEvents } from "./components/ListEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ListEvents /> },
      { path: "events/:id", element: <LaunchEvents /> },
      { path: "events/:id/:eventName", element: <EventDetails /> },
    ],
  },
]);

export default router;

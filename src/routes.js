import Home from "./pages/Home";
import Labels from "./pages/Labels";
import Reminder from "./pages/Reminder";
import EditLabel from "./pages/EditLabel";
import Archived from "./pages/Archived";
import Bin from "./pages/Bin";
import Layout from "./components/Layout";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/reminders",
        element: <Reminder />,
      },
      {
        path: "/labels",
        element: <Labels />,
      },
      {
        path: "/editlabel",
        element: <EditLabel />,
      },
      {
        path: "/archived",
        element: <Archived />,
      },
      {
        path: "/bin",
        element: <Bin />,
      },
    ],
  },
];

export default Routes;

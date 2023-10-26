import Home from "./pages/Home";
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
      //   {
      //     path: "/sports/:key",
      //     element: <Sports />,
      //   },
      //   {
      //     path: "/our-team",
      //     element: <CoreTeam />,
      //   },
      //   {
      //     path: "/matches",
      //     children: [
      //       {
      //         index: true,
      //         element: <Matches />,
      //       },
      //       {
      //         path: "/matches/:id",
      //         element: <SpecificSportMatch />,
      //       },
      //     ],
      //   },
      //   {
      //     path: "/Score",
      //     element: <Score />,
      //   },
    ],
  },
];

export default Routes;

/* eslint-disable no-lone-blocks */
import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [{
      path: "/",
      element: <MainContainer />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },
  ]
    
  },
]);

/* eslint-disable no-lone-blocks */
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/* Router provider will load my body and  outlet will load childrens
        */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

{
  /*** Sketleton of Our App
   * Head
   * Body
   *  Sidebar
   *    MenuItems
   *  MainContainer
   *    ButtonsList
   *    VideoContainer
   *      VideoCart
   */
}

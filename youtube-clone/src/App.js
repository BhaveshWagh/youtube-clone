/* eslint-disable no-lone-blocks */
import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";

import store from "./components/utils/store";

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
/* eslint-disable no-lone-blocks */
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}


export default App;

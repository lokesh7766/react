import Home from "./components/home";
import { createBrowserRouter,RouterProvider,Link } from "react-router-dom";
import Dash from "./components/Dash";
import Navbar from "./components/Navbar";
import About from "./components/about";
const router = createBrowserRouter([

  {

    path:"/",
    element:   <div>
      <Home/>
      <Navbar/>

    </div>
  },{
    path:"about",
    element: <div><About/>
      <Navbar/>
      </div>
  },{
    path:"dash",
    element:
    <div><Home/>
 <Navbar/>
    </div>
  }
]);
const App = () => {

  return (
<RouterProvider router = {router }/>
  )
}


export default App
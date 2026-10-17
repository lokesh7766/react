import Home from "./components/home";
import { createBrowserRouter } from "react-router";
import Dash from "./components/Dash";
import About from "./components/about";
const router = createBrowserRouter([

  {

    path:'/',
    element:<Home/>
  },{
    path:'/about',
    element:<About/>
  },{
    path:'/dash',
    element:<Dash/>
  }
]);
const App = () => {

  return (
   <Routerprovider router = {router}/>  
  )
}


export default App
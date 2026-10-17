
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from './component/Navbar';
import Hero from './component/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path:"/about",
    element:<Hero/>
  }
]);

function App() {


  return (
    <>

     <RouterProvider router={router} />
    </>
  )
}

export default App

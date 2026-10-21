
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Home from './component/Home';
import MovieListingPage from './MovieListingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/moviePage",
    element:<MovieListingPage/>
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

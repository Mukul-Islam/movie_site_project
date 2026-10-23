
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import Navbar from './component/Navbar';

import Home from './component/Home';
import MovieListingPage from './pages/MovieListingPage';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
  {
    index:true,
    element: <Home/>,
  },
  {
    path:"/moviePage",
    element:<MovieListingPage/>
  },
  ]
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

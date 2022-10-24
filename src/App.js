import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Tinformation from './components/Tinformation/Tinformation';
import Main from './layout/Main';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
       {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch("https://trendy-travel-server.vercel.app/travels"),
       },
       {
      path:'/travels/:id',
      element:<Tinformation></Tinformation>,
      loader: ({ params }) =>
      fetch(`https://trendy-travel-server.vercel.app/travels/${params.id}`)
       },
       {
        path:'/booking',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>,
       },
    
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/register',
        element:<Register></Register>
       }
      //  {
      //   path: "/news/:id",
      //   element: <PrivateRoute><News></News></PrivateRoute>,
      //   loader: ({ params }) =>
      //     fetch(`https://trendy-travel-server.vercel.app/news/${params.id}`),
      // },

      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
     </div>
  );
}

export default App;

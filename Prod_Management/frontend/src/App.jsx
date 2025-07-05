import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Products from './Components/Products'
import AddProduct from './Components/AddProduct'
import ErrorPage from './Components/ErrorPage'
import EditProduct from './Components/EditProduct'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/admin" replace />,
    },
    {
      path:'/admin',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {index:true,element:<Home/>},
        {path:'products',element:<Products/>},
        {path:'products/add',element:<AddProduct/>},
        {path:'products/edit/:id',element:<EditProduct/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

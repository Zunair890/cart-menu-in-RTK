{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Cart from "./component/Cart"
import RootLayout from './component/RootLayout';

function App() {
 const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Route>
 ))





  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
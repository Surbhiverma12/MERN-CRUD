import User from './getUser/User.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddUser from './addUser/AddUser.jsx'
import Update from './updateUser/update.jsx'

function App() {
  const route = createBrowserRouter([
    {
    path: "/",
    element: <User/>
    },
    {
      path: "/add",
      element: <AddUser/>
    },
    {
      path: "update/:id",
      element: <Update/>

    }
  ])
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

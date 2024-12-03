import User from './getUser/User.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddUser from './addUser/AddUser.jsx'
import Update from './updateUser/update.jsx'
import ViewUser from './viewUser/viewUser.jsx'

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

    },
    {
      path: "view/:id",
      element: <ViewUser/>
    }
  ])
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

import { createBrowserRouter } from "react-router-dom"
import Home from "./routes/Home"
import Users from "./routes/Users"
import Root from "./components/Root"
import HomeDetail from "./routes/homedetail"
import NotFound from "./routes/NotFound"

const router = createBrowserRouter(
  [{
    path:"",
    element:<Root />, 
    errorElement:<NotFound />,
    children: [
      {
        path:"",
        element:<Home />,
        children:[{
          path:"home/detail",
          element:<HomeDetail />
        }]
      },
    ]
  }]
)

export default router
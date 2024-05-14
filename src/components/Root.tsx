import { Outlet } from "react-router-dom";
import { Box} from '@chakra-ui/react'
import RootHeader from "./RootHeader";



export default function Root() {

  return (
    <Box> 
       <RootHeader />
       <Outlet />
   </Box>
  )
}
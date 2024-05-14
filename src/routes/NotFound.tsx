import { VStack,Heading,Text, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

export default function NotFound(){
  return <VStack justifyContent={"center"} minHeight="100vh" bg="blue.100">
    <Heading> page not found. </Heading>
    <Text> It seems that you're lost. </Text>
    <Link to="/">
    <Button colorScheme= {"red"}variant={"link"}> Go Home &rarr;</Button>
    </Link>
    <CircularProgress isIndeterminate color='green.300' />
    <Tooltip hasArrow label='Search places' bg='gray.300' color='black'>
  <Button bg={"red.240"}>fdfdf</Button>
</Tooltip>
  </VStack>
}
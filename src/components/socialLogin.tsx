import {Box, VStack,Button , HStack,Divider,Text} from '@chakra-ui/react'
import { FiMessageCircle } from "react-icons/fi";
import {FaGithub} from "react-icons/fa"

export default function SocialLogin(){
  return(
    <Box>
      <HStack my={"8"}>
      <Divider />
      <Text fontSize={"xs"} as={"b"} textTransform={"uppercase"} color={"gray.400"}>or</Text>

      <Divider />
      </HStack>
      <VStack>
      <Button colorScheme="blue" leftIcon={<FaGithub />}> Continue with Github</Button>
      <Button colorScheme="yellow" leftIcon={<FiMessageCircle />}> Continue with kakao</Button>
    </VStack>
    </Box>

  )
}
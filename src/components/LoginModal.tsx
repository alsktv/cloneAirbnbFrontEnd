import { Box,Button, useDisclosure, ModalOverlay , Modal, ModalHeader, ModalContent, ModalCloseButton ,ModalBody , Input, InputGroup, InputLeftElement, VStack} from '@chakra-ui/react'
import { FaUser} from "react-icons/fa"
import SocialLogin from "./socialLogin"
import { RiLockPasswordFill } from "react-icons/ri";

interface LoginModalProps {
  isOpen:boolean
  onClose:() => void
}

export default function LoginModal ({isOpen , onClose}: LoginModalProps) {
  
  return(
    <Box>
       <Modal motionPreset="slideInRight" isOpen={isOpen} onClose = {onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Login </ModalHeader>
              <ModalCloseButton/>
              <ModalBody>
                <VStack>
                  <InputGroup>
                    <InputLeftElement children={<FaUser />}></InputLeftElement>
                    <Input variant = {"filled"} placeholder='User name'  />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement children={<RiLockPasswordFill />} />
                    <Input variant = {"filled"} placeholder='Password' />
                  </InputGroup>     
                  <Button width={"100%"} colorScheme="red">Log in</Button>         
                </VStack>
                <SocialLogin />
              </ModalBody>
            </ModalContent>
           
          </Modal>
    </Box>
  )
}
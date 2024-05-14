import { Box,Button, useDisclosure, ModalOverlay , Modal, ModalHeader, ModalContent, ModalCloseButton ,ModalBody , Input, InputGroup, InputLeftElement, VStack} from '@chakra-ui/react'
import { FaUser} from "react-icons/fa"
import SocialLogin from "./socialLogin"
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail ,MdDriveFileRenameOutline} from "react-icons/md";

interface SignupModalProps {
  isOpen:boolean
  onClose:() => void
}

export default function SignupModal ({isOpen , onClose}: SignupModalProps) {
  
  return(
    <Box>
       <Modal motionPreset="slideInRight" isOpen={isOpen} onClose = {onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Sign up </ModalHeader>
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
                  <InputGroup>
                    <InputLeftElement children={<MdEmail />}></InputLeftElement>
                    <Input variant = {"filled"} placeholder='email'  />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement children={<MdDriveFileRenameOutline />} />
                    <Input variant = {"filled"} placeholder='name' />
                  </InputGroup>  
                  <Button width={"100%"} colorScheme="red">sign up</Button>         
                </VStack>
                <SocialLogin />
              </ModalBody>
            </ModalContent>
           
          </Modal>
    </Box>
  )
}
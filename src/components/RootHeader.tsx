import { Box, Button, HStack, IconButton, LightMode, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { IoIosSunny } from "react-icons/io";


export default function RootHeader() {
  const {isOpen:loginIsOpen , onClose:loginOnClose , onOpen:loginOnOpen} = useDisclosure()  //모달창 사용할 때 사용하는 함수임. , : 을 사용해서 이름을 바꿔서 쓸 수 있음
  const {isOpen:signUpIsOpen , onClose:signUpOnClose , onOpen:signUpOnOpen} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode(); //useColorMode라는 함수는 colorMode에 light,dark 둘중 하나의 값을 전달한다.
  const logoColor = useColorModeValue("red.500","red.200");  //인자를 2개 받는 함수, light 모드이면 첫번째 인자를, dark 모드이면 두번째 인자를 반환한다.
  return (
    <Box>
      <HStack justifyContent = {"space-between"}py={"5"} px={"10"} borderBottomWidth={"1px"}>
        <Box color= {logoColor}>
          <Link to={"/"}>
            <FaAirbnb size={"50"} />
          </Link>
        </Box>
        <HStack spacing={"4"}> 
          <IconButton aria-label="Toggle dark mode" icon={useColorModeValue(<FaMoon />,<IoIosSunny />)   } variant={"goest"}  onClick={toggleColorMode}></IconButton>
          <LoginModal isOpen = {loginIsOpen} onClose = {loginOnClose}/>
          <Button color={"red.200"} onClick={loginOnOpen}>Log in</Button>
          <LightMode>
            <Button colorScheme="red"  onClick={signUpOnOpen}>sign in</Button>
          </LightMode>
          <SignupModal isOpen = {signUpIsOpen} onClose={signUpOnClose}/>
        </HStack>
      </HStack>
    </Box>
  )
}
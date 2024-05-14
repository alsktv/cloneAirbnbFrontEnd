import {extendTheme , type ThemeConfig} from "@chakra-ui/react"

const config:ThemeConfig = {
  initialColorMode:"light",
  useSystemColorMode:false,

}

const theme = extendTheme({config}) ; //extendTheme에는 config:{}를 속성으로 가지는 object가 값으로 들어와야 됨.

export default theme
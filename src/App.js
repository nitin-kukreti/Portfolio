import { VStack, Flex, Heading, IconButton, useColorMode, Spacer, useMediaQuery } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMoon, FaSun, FaWhatsapp } from 'react-icons/fa'
import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import { Social } from './Components/Social';
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%" >
        <Heading ml="8" fontWeight="semibold" size="md">Portfollio</Heading>
        <Spacer></Spacer>

        <IconButton ml={2} icon={<FaFacebook />} onClick={() => window.open("https://www.facebook.com/nitin.kukrati/", "_blank")} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} onClick={() => window.open("https://www.instagram.com/nitin_kukreti1/", "_blank")} isRound="true"></IconButton>
        <IconButton ml={2} icon={<FaLinkedinIn />} onClick={() => window.open("https://www.linkedin.com/in/nitin-kukreti-133741184/", "_blank")} isRound="true"></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>

    </VStack>
  );
}

export default App;

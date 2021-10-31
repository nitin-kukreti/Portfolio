import { Circle, Stack, useColorMode, Flex, useMediaQuery, Box, Text, Image, Button } from '@chakra-ui/react';
import React from 'react'

export const Header = () => {
    const { colorMode } = useColorMode();
    const { isNotSmaller } = useMediaQuery("min-width:600px");
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                flexWrap="wrap"
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Nitin Kukreti</Text>

                    <Button mt={8} colorScheme="blue" onClick={function () { }}>Hire Me</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    ml={4}
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/59364817?s=400&u=2dd479e772f6877f7712155041080434858c589f&v=4' />
            </Flex>

        </Stack>
    );
}

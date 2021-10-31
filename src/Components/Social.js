import React from 'react'
import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'
export const Social = () => {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
        </HStack>
    )
}

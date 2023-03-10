import React from 'react';
import CartWidget from './CartWidget';
import { Button, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import { Flex, Spacer, Box, Heading, Card } from '@chakra-ui/react';
import logo from '../assets/img/logo.jpg';
import style from 'styled-components';

const NavBar = () => {

    return (

        <Box w='100%' m = '1' bg='blue.300' color='black'>
            
            <Flex justify='center' align='center'>

                <Card w='190px' p='2' m='10px'>
                    <Heading w='110px' m='5px'><img src={logo} alt="" /></Heading>
                </Card>
                <Spacer />

                <Box w='100%' p='2'>
                    <ul>
                        <Button p='2' m='15px' colorScheme='gray'>Inicio</Button>
                        <Menu>
                            <MenuButton p='2' m='15px' colorScheme='gray' as={Button}>Productos</MenuButton>
                            <MenuList>
                                <MenuItem>Remeras</MenuItem>
                                <MenuItem>Gorras</MenuItem>
                                <MenuItem>Tazas</MenuItem>
                                <MenuItem>Mates</MenuItem>
                                <MenuItem>Vasos</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button p='2' m='15px' colorScheme='gray'>Sobre nosotros</Button>
                        <Button p='2' m='15px' colorScheme='gray'>Contacto</Button>
                    </ul>
                </Box>
                <Spacer />

                <Box w='150px' p='3'>

                    <CartWidget />
                </Box>

            </Flex>

        </Box>


    )
}

export default NavBar



import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react' //Importo los elementos del Menu de Chakra
import { ChevronDownIcon} from '@chakra-ui/icons' //Importo icono de Chakra
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            
            <h1 id='title'>Tech Store</h1>

            <Flex>
            <Box p='4'>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Our Products</MenuItem>
                        <MenuItem>About Us</MenuItem>
                        <MenuItem>Our Stores</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Spacer/>

            <Box p='4'>
                <CartWidget/>
            </Box>
            </Flex>
        </div>
    )
}

export default NavBar
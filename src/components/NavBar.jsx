import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react' //Importo los elementos del Menu de Chakra
import { ChevronDownIcon} from '@chakra-ui/icons' //Importo icono de Chakra
import TechStoreIcon from '../assets/TechStoreIcon.jfif'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            
            <div id='title'>
                <Link to={"/"}>                                 {/* Si tocamos el icono de Tech Store, vamos a la pagina principal */}
                    <img src={TechStoreIcon} alt="Tech Store Icon" width='200px' height='200px'/>
                </Link>
            </div>

            <Flex>
            <Box p='4'>
                <Menu>
                    <MenuButton className='generalButton' as={Button} rightIcon={<ChevronDownIcon />}>
                        Category
                    </MenuButton>
                    <MenuList>

                        <MenuItem>
                            <Link  to={`/category/${'Headset'}`}>
                                <button className='generalButton'>
                                    Headset
                                </button>
                            </Link>
                        </MenuItem>


                        <MenuItem>
                            <Link  to={`/category/${'Mouse'}`}>
                                <button className='generalButton'>
                                    Mouse
                                </button>
                            </Link>
                        </MenuItem>
                        

                        <MenuItem>
                            <Link  to={`/category/${'Keyboard'}`}>
                                <button className='generalButton'>
                                    Keyboard
                                </button>
                            </Link>
                        </MenuItem>

                    </MenuList>
                </Menu>
            </Box>

            <Spacer/>

            <Box p='4'>
                <Link to= {"/cart"}>            {/* Si tocamos el icono del carrito, vamos a la pagina cart */}
                    <CartWidget/>
                </Link>
            </Box>
            </Flex>
        </div>
    )
}

export default NavBar
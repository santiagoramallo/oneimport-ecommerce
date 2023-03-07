import React from "react";
import CartWidget from "./CartWidget";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,
  } from '@chakra-ui/react';


const NavBar = () => {
    return (
<Flex>
  <Box p='4' bg='red.400'>
    <Link to={"/"}>One Import</Link>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    <CartWidget/>
  </Box>
</Flex>

    )
}

export default NavBar;
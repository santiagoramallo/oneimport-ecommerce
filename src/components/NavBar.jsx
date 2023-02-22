import React from "react";


const NavBar = () => {
    return (
        <>
        <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
                <menuitem>Lentes Ray Ban</menuitem>
                <menuitem>Lentes Oakley</menuitem>
            </MenuList>
        </Menu>
        <box flex="1" bg="orange">
            <CartWidget/>
        </box>
        </>

    )
}
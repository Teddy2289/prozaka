import React from "react";
import {PaddingContainner, FlexContainer} from "../../styled/Global.styled";
import {MenuIcon, MenuItem, NavMenuContainer} from "../../styled/NavBar.styled/NavBar.styled"
import {AiOutlineClose} from "react-icons/ai"
import {NavLinks} from "../../utils/Data";
import {motion} from "framer-motion";
import {slideInLeft} from "../../utils/Variant";

function NavMenu({setOpenMenu}) {
    return (
        <NavMenuContainer as={motion.div}
                          variants={slideInLeft}
                          initial="hidden"
                          whileInView="visible"
                          exit="exit">
            <PaddingContainner top="2rem" left="5%" right="5%">
                <FlexContainer justify="flex-end" responsiveFlex>
                    <MenuIcon onClick={() => {
                        setOpenMenu(false)
                    }}>
                        <AiOutlineClose/>
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainner>
            <PaddingContainner top="8%">
                <FlexContainer direction="column" align="center" responsiveFlex>
                    {
                        NavLinks.map((link) => (
                            <MenuItem href={`#${link.href}`}
                                      onClick={() => {
                                          setOpenMenu(false)
                                      }}
                            >{link.name}</MenuItem>
                        ))
                    }


                </FlexContainer>
            </PaddingContainner>
        </NavMenuContainer>
    )
}

export default NavMenu;
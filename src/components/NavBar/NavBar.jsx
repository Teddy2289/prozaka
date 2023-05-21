import React, {useState, useEffect} from "react";
import {BlueText, Container, FlexContainer, PaddingContainner} from "../../styled/Global.styled";
import {Logo, NavbarContainer, MenuIcon} from "../../styled/NavBar.styled/NavBar.styled";
import {CiMenuKebab} from "react-icons/ci";
import NavMenu from "../layouts/NavMenu";
import {theme} from "../../utils/Theme";
import {AnimatePresence} from "framer-motion";

function NavBar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        //function scroll
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false)
        }
        window.addEventListener('scroll', onScroll);
        //effacer
        return ()=>window.removeEventListener('scroll',onScroll);
    }, [])
    return (
        <NavbarContainer
                         BgColor={ sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainner top="1.2rem" bottom="1.2rem" responsiveRight="1rem" responsiveLeft="1rem">
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>
                        <Logo>Teddy<BlueText>Dev</BlueText></Logo>
                        <MenuIcon onClick={() => {
                            setOpenMenu(true)
                        }}>
                            <CiMenuKebab/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                <AnimatePresence>
                    {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
                </AnimatePresence>
            </PaddingContainner>
        </NavbarContainer>
    )
}

export default NavBar;
import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FiX } from 'react-icons/fi'
import logo from '../../images/Logo_white.png'

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
`

const CloseIcon = styled.div`
  margin-left: auto;
`
const Logo = styled.img`
  margin: 1rem;
`

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`

const MobileMenu = styled.aside`
  list-style-type: none;
  background-color: hsl(247, 69%, 15%);
  position: fixed;
  z-index: 999;
  width: 100%;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ showMenu }) => (showMenu ? '100%' : '0')};
  top: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
`

const Overlay = styled.div`
  background: black;
  width: 100%;
  height: ${({ showMenu }) => (showMenu ? '100%' : '0')};
  position: fixed;
  z-index: -1;
  left: 0;
  opacity: 0.2;
  top: 0;
`

const MenuInnerContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 45px);
  margin-top: 1rem;
`

const MenuItem = styled.div`
  margin: 0 2.5rem;
`

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: lowercase;
  width: 80%;
  display: block;
`

const Sidebar = ({ showMenu, toggleMenu, items }) => {
  return (
    <MenuWrapper className="menu-wrapper">
      <MobileMenu showMenu={showMenu} onClick={toggleMenu}>
        <LogoIcon>
          <Link to="/">
            <Logo src={logo} width={158} />
          </Link>
          <CloseIcon onClick={toggleMenu}>
            <FiX size={34} style={{ color: 'white', marginRight: '1rem' }} />
          </CloseIcon>
        </LogoIcon>
        <MenuInnerContainer>
          {items.map((menuItem, i) => {
            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

            const itemId = 'menu-item-' + menuItem.databaseId

            return (
              <MenuItem
                id={itemId}
                key={i + menuItem.url}
                className={
                  'menu-item menu-item-type-custom menu-item-object-custom menu-item-home ' + itemId
                }
              >
                <MenuLink
                  // style={{
                  //   color: 'white',
                  //   textDecoration: 'none',
                  //   textTransform: 'lowercase',
                  //   width: '80px',
                  // }}
                  to={path}
                  activeClassName={'current-menu-item current_page_item small-letters'}
                >
                  {menuItem.label}
                </MenuLink>
              </MenuItem>
            )
          })}
        </MenuInnerContainer>
        <Overlay showMenu={showMenu} />
      </MobileMenu>
    </MenuWrapper>
  )
}

export default Sidebar

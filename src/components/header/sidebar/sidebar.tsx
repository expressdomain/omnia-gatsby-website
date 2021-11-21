import React from 'react'
import { Link } from 'gatsby'
import { FiX } from 'react-icons/fi'
import logo from '../../../images/Logo_white.png'
import * as S from './sidebarStyles'

const Sidebar = ({ showMenu, toggleMenu, items }) => {
  return (
    <S.MenuWrapper className="menu-wrapper">
      <S.MobileMenu showMenu={showMenu} onClick={toggleMenu}>
        <S.LogoIcon>
          <Link to="/">
            <S.Logo src={logo} width={158} />
          </Link>
          <S.CloseIcon onClick={toggleMenu}>
            <FiX size={34} style={{ color: 'white', marginRight: '1rem' }} />
          </S.CloseIcon>
        </S.LogoIcon>
        <S.MenuInnerContainer>
          {items.map((menuItem, i) => {
            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

            const itemId = 'menu-item-' + menuItem.databaseId

            return (
              <S.MenuItem
                id={itemId}
                key={i + menuItem.url}
                className={
                  'menu-item menu-item-type-custom menu-item-object-custom menu-item-home ' + itemId
                }
              >
                <S.MenuLink
                  to={path}
                  activeClassName={'current-menu-item current_page_item small-letters'}
                >
                  {menuItem.label}
                </S.MenuLink>
              </S.MenuItem>
            )
          })}
        </S.MenuInnerContainer>
        <S.Overlay showMenu={showMenu} />
      </S.MobileMenu>
    </S.MenuWrapper>
  )
}

export default Sidebar

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import UniversalLink from './UniversalLink'
import styled from '@emotion/styled'
import { FiMenu, FiX } from 'react-icons/fi'
import Sidebar from '../sidebar'

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const OpenIcon = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
`

const PrimaryMenu = styled.ul`
  display: flex;
  flex-flow: row;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 2.5rem;
`

const Menu = ({ items, toggleMenu }) => {
  if (items === 0) return null

  return (
    <MenuWrapper className="menu-wrapper">
      <OpenIcon onClick={toggleMenu}>
        <FiMenu size={34} style={{ color: '#0F0E40', marginRight: '1rem' }} />
      </OpenIcon>

      <DesktopWrapper>
        <PrimaryMenu>
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
                <Link
                  className="menu-item"
                  to={path}
                  activeClassName={'current-menu-item current_page_item small-letters'}
                >
                  {menuItem.label}
                </Link>
              </MenuItem>
            )
          })}
        </PrimaryMenu>
      </DesktopWrapper>
    </MenuWrapper>
  )
}

export default Menu

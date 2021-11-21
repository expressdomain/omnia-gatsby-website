import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FiMenu, FiX } from 'react-icons/fi'
import Sidebar from '../sidebar'
import * as S from './menuStyles'

const Menu = ({ items, toggleMenu }) => {
  if (items === 0) return null

  return (
    <S.MenuWrapper className="menu-wrapper">
      <S.OpenIcon onClick={toggleMenu}>
        <FiMenu size={34} style={{ color: '#0F0E40', marginRight: '1rem' }} />
      </S.OpenIcon>

      <S.DesktopWrapper>
        <S.PrimaryMenu>
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
                <Link
                  className="menu-item"
                  to={path}
                  activeClassName={'current-menu-item current_page_item small-letters'}
                >
                  {menuItem.label}
                </Link>
              </S.MenuItem>
            )
          })}
        </S.PrimaryMenu>
      </S.DesktopWrapper>
    </S.MenuWrapper>
  )
}

export default Menu

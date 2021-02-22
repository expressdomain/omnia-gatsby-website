import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import UniversalLink from './UniversalLink'
import styled from 'styled-components'

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

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu {
        name
        menuItems {
          nodes {
            url
            label
            id
            databaseId
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <MenuWrapper className="menu-wrapper">
      <PrimaryMenu className="primary-menu">
        {wpMenu.menuItems?.nodes.map((menuItem, i) => {
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
              <Link style={{color: 'white', textDecoration: 'none', textTransform: 'lowercase'}} to={path} activeClassName={'current-menu-item current_page_item small-letters'}>
                {menuItem.label}
              </Link>
            </MenuItem>
          )
        })}
      </PrimaryMenu>
    </MenuWrapper>
  )
}

export default Menu

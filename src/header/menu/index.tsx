import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import UniversalLink from './UniversalLink'
import styled from 'styled-components'

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: end;
`

const PrimaryMenu = styled.ul`
  display: flex;
  flex-flow: row;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  text-decoration: none;
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
    <MenuWrapper>
      <PrimaryMenu>
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
              <Link to={path} activeClassName={'current-menu-item current_page_item small-letters'}>
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

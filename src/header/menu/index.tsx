import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import UniversalLink from './UniversalLink'

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

  console.log(wpMenu)
  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <nav className="primary-menu-wrapper" aria-label="Horizontal" role="navigation">
      <ul className="primary-menu reset-list-style">
        {wpMenu.menuItems?.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = 'menu-item-' + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                'menu-item menu-item-type-custom menu-item-object-custom menu-item-home ' + itemId
              }
            >
              <Link to={path} activeClassName={'current-menu-item current_page_item'}>
                {menuItem.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu

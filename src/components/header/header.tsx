import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Menu from './menu/menu'
import logo from '../../images/Logo.png'
import Sidebar from './sidebar/sidebar'
import * as S from './headerStyles'

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

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

  return (
    <S.HeaderWrapper>
      <S.GlobalHeader>
        <Link to="/">
          <S.Logo src={logo} width={158} />
        </Link>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          <Menu toggleMenu={toggleMenu} items={wpMenu.menuItems.nodes} />
          <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} items={wpMenu.menuItems.nodes} />
        </div>
      </S.GlobalHeader>
    </S.HeaderWrapper>
  )
}

export default Header

import parse from 'html-react-parser'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import './header.scss'
import Menu from './menu'
// import { HeaderNav } from './header-static'

const Header = ({ isHomePage = false }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  // console.log(parse(label))
  // console.log(id)
  return (
    <div>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{parse(title)}</Link>
        </h1>
      </header>
      <Menu />
    </div>
  )
}

export default Header

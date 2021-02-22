import parse from 'html-react-parser'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Menu from './menu'
import styled from 'styled-components'

const GlobalHeader = styled.header`
  display: flex;
  flex-flow: row;
`

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

  return (
    <div>
      <GlobalHeader>
        <h1 className="main-heading">
          <Link to="/">{parse(title)}</Link>
        </h1>
        <div>
          <Menu />
        </div>
      </GlobalHeader>
    </div>
  )
}

export default Header

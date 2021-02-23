import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/Logo.png'
import { FaLinkedin } from 'react-icons/fa'

const FooterLeft = styled.div`
  color: white;
  text-align: right;

  p {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
  }
`

const FooterRight = styled.div`
  color: white;
  margin-left: 2rem;

  p {
    margin-bottom: 0;
  }
`

const Logo = styled.img`
  margin-right: 13rem;
`

const Footer = () => {
  // const { wpFooterMenu } = useStaticQuery(graphql`
  //   query FooterQuery {
  //     wpMenu {
  //       name
  //       menuItems {
  //         nodes {
  //           url
  //           label
  //           id
  //           databaseId
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(wpFooterMenu)
  // if (!wpFooterMenu?.menuItems?.nodes || wpFooterMenu.menuItems.nodes === 0) return null

  return (
    <footer id="site-footer" role="contentinfo" className="footer">
      <div className="section-inner">
        <Link to="/">
          <Logo src={logo} width={158} />
        </Link>
        <FooterLeft className="footer-left">
          <p>Omnia Consultancy</p>
          <p>John Mollema</p>
          <p>Meerstraat 9</p>
          <p>5473AA Heeswijk-Dinther</p>
          <a style={{ color: 'white' }} href="https://www.linkedin.com/in/johnmollema/">
            <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
          </a>
        </FooterLeft>
        <FooterRight className="footer-left">
          <p>
            <a href="tel:0031643889974">+31 6 43889974</a>
          </p>
          <p>john.mollema@omnia-consultancy.com</p>
          <p>KvK-nummer:</p>
          <p>BTW-nummer:</p>
        </FooterRight>
      </div>
    </footer>
  )
}

export default Footer

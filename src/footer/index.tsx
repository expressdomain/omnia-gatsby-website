import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../images/Logo.png'
import { FaLinkedin } from 'react-icons/fa'
import contact from '../../create-pages/contact'

const DesktopWrapper = styled.div`
    @media only screen and (min-width: 416px) {
      display: flex;
      flex-flow: row;
    }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`
const MobileWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    display: none;
  }
      @media only screen and (max-width: 414px) {
        display: flex;
        place-items: center;
        flex-flow: column;
    }
`

const MobileInner = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`

const MobileContactWrapper = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  margin-left: 0.8rem;

  p {
    margin: 0;
    font-size: 9px;
  }
`

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

const FooterMenu = styled.div`
  display: flex;
flex-flow: column;
  margin-left: 6rem;

  a {
    margin-bottom: 0;
    color: white;
    text-decoration: none;
    line-height: 2;
    text-transform: lowercase;
    font-size: 20px;
  }
`

const Logo = styled.img`
  margin-right: 13rem;
`

const Footer = () => {
  const wpFooterMenu  = useStaticQuery(graphql`
    query FooterQuery {
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


  const contactDetails = {
    companyName: 'Omnia Consultancy',
    bossName: 'John Mollema',
    street: 'Meerstraat 9',
    zipCity: '5473 AA Heeswijk-Dinther',
    linkedIn: 'https://www.linkedin.com/in/johnmollema/',
    telephoneUser: '+31 6 43889974',
    telephoneSystem: '0031643889974',
    email: 'john.mollema@omnia-consultancy.com',
    CoC: 'KvK-nummer:',
    Vat: 'BTW-nummer:'
  }

  // if (!wpFooterMenu?.menuItems?.nodes || wpFooterMenu.menuItems.nodes === 0) return null

  return (
    <footer id="site-footer" role="contentinfo" className="footer">
      <div className="section-inner">
        <DesktopWrapper>
        <Link to="/">
          <Logo src={logo} width={158} />
        </Link>
        <FooterLeft className="footer-left">
          <p>{contactDetails.companyName}</p>
          <p>{contactDetails.bossName}</p>
          <p>{contactDetails.street}</p>
          <p>{contactDetails.zipCity}</p>
            <a style={{ color: 'white' }} href={contactDetails.linkedIn}>
            <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
          </a>
        </FooterLeft>
        <FooterRight className="footer-left">
          <p>
              <a style={{ color: 'white', textDecoration: 'none' }} href={contactDetails.telephoneSystem}>{contactDetails.telephoneUser}</a>
          </p>
          <p>{contactDetails.email}</p>
          <p>{contactDetails.CoC}</p>
          <p>{contactDetails.Vat}</p>
        </FooterRight>
        <FooterMenu>
          {wpFooterMenu !== null || undefined ? (
              wpFooterMenu.wpMenu.menuItems.nodes.map((item) =>
                <Link key={item.id} to={`${ item.url }`}>{item.label}</Link>
              )
            ) : (null)}
          </FooterMenu>
        </DesktopWrapper>

        <MobileWrapper>
          <Link to="/" style={{ maxWidth: `119px`}}>
            <Logo src={logo} width={119} />
          </Link>
          <MobileInner>
            <a style={{ color: 'white' }} href={contactDetails.linkedIn}>
              <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
            </a>
            <MobileContactWrapper>
              <p>
                <a style={{ color: 'white', textDecoration: 'none' }} href={contactDetails.telephoneSystem}>{contactDetails.telephoneUser}</a>
              </p>
              <p>{contactDetails.email}</p>
            </MobileContactWrapper>
          </MobileInner>
        </MobileWrapper>
      </div>
    </footer>
  )
}

export default Footer

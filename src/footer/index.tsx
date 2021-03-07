import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../images/Logo_white.png'
import { FaLinkedin } from 'react-icons/fa'
import parse from 'html-react-parser'
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
    overflow-x: hidden;
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

const NO_DETAILS = 'No details loaded.'

const Footer = () => {
  const wpFooterMenu = useStaticQuery(graphql`
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
      page: wpPage(slug: { eq: "contact" }) {
        contactACF {
          email
          kamerVanKoophandel
          linkedin
          personName
          street
          telephone
          zipCity
          companyName
          btwNummer
        }
      }
    }
  `)

  return (
    <footer id="site-footer" role="contentinfo" className="footer">
      <div className="section-inner">
        <DesktopWrapper>
          <Link to="/">
            <Logo src={logo} width={158} />
          </Link>
          {wpFooterMenu.page.contactACF != null || undefined ? (
            <>
              <FooterLeft className="footer-left">
                <p>{parse(wpFooterMenu.page.contactACF?.companyName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.personName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.street)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.zipCity)}</p>
                <a style={{ color: 'white' }} href={wpFooterMenu.page.contactACF?.linkedIn}>
                  <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
                </a>
              </FooterLeft>
              <FooterRight className="footer-left">
                <p>
                  <a
                    style={{ color: 'white', textDecoration: 'none' }}
                    href={`tel:${wpFooterMenu.page.contactACF?.telephone}`}
                  >
                    {parse(wpFooterMenu.page.contactACF?.telephone)}
                  </a>
                </p>
                <p>{parse(wpFooterMenu.page.contactACF?.email)}</p>
                <p>{wpFooterMenu.page.contactACF?.CoC}</p>
                <p>{wpFooterMenu.page.contactACF?.Vat}</p>
              </FooterRight>
            </>
          ) : (
            <pre>{NO_DETAILS}</pre>
          )}
          <FooterMenu>
            {wpFooterMenu !== null || undefined
              ? wpFooterMenu.wpMenu.menuItems.nodes.map((item) => (
                  <Link key={item.id} to={`${item.url}`}>
                    {item.label}
                  </Link>
                ))
              : null}
          </FooterMenu>
        </DesktopWrapper>

        <MobileWrapper>
          <Link to="/" style={{ maxWidth: `119px` }}>
            <Logo src={logo} width={119} />
          </Link>
          <MobileInner>
            <a style={{ color: 'white' }} href={wpFooterMenu.page.contactACF?.linkedIn}>
              <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
            </a>
            <MobileContactWrapper>
              {wpFooterMenu.page.contactACF != null || undefined ? (
                <>
                  <p>
                    <a
                      style={{ color: 'white', textDecoration: 'none' }}
                      href={wpFooterMenu.page.contactACF.telephone}
                    >
                      {parse(wpFooterMenu.page.contactACF?.telephone)}
                    </a>
                  </p>
                  <p>{parse(wpFooterMenu.page.contactACF?.email)}</p>
                </>
              ) : (
                <pre>{NO_DETAILS}</pre>
              )}
            </MobileContactWrapper>
          </MobileInner>
        </MobileWrapper>
      </div>
    </footer>
  )
}

export default Footer

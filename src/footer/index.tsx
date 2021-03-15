import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../images/Logo_white.png'
import { FaLinkedin } from 'react-icons/fa'
import parse from 'html-react-parser'
import contact from '../../create-pages/contact'

const DesktopWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 2rem;
    margin: 0 auto;
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    place-items: center;
    flex-flow: column;
    overflow-x: hidden;
  }
`

const SectionInner = styled.div`
  margin: 0 auto;
  display: flex;
  @media only screen and (min-width: 1025px) {
    max-width: 1230px;
    flex-flow: row;
    padding: 4rem 0;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    justify-content: center;
    padding: 0;
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

const Logo = styled(Link)`
  @media only screen and (max-width: 1024px) {
    display: none;
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

  a {
    margin-bottom: 0;
    color: white;
    text-decoration: none;
    line-height: 2;
    text-transform: lowercase;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  a:hover {
    color: #d1dce5;
  }
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
      <SectionInner>
        <DesktopWrapper>
          <Logo to="/">
            <img src={logo} width={158} />
          </Logo>
          {wpFooterMenu.page.contactACF != null || undefined ? (
            <>
              <FooterLeft className="footer-left">
                <p>{parse(wpFooterMenu.page.contactACF?.companyName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.personName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.street)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.zipCity)}</p>
                <a className="footer-link" href={`${wpFooterMenu.page.contactACF?.linkedin}`}>
                  <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
                </a>
              </FooterLeft>
              <FooterRight className="footer-left">
                <p>
                  <a
                    className="footer-link"
                    href={`tel:${wpFooterMenu.page.contactACF?.telephone}`}
                  >
                    {parse(wpFooterMenu.page.contactACF?.telephone)}
                  </a>
                </p>
                <p>
                  <a className="footer-link" href={`mailto:${wpFooterMenu.page.contactACF?.email}`}>
                    {parse(wpFooterMenu.page.contactACF?.email)}
                  </a>
                </p>
                <p>{wpFooterMenu.page.contactACF?.kamerVanKoophandel}</p>
                <p>{wpFooterMenu.page.contactACF?.btwNummer}</p>
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
            <img src={logo} width={119} />
          </Link>
          <MobileInner>
            <a className="footer-link" href={`${wpFooterMenu.page.contactACF?.linkedin}`}>
              <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
            </a>
            <MobileContactWrapper>
              {wpFooterMenu.page.contactACF != null || undefined ? (
                <>
                  <p>
                    <a
                      className="footer-link"
                      href={`tel:${wpFooterMenu.page.contactACF?.telephone}`}
                    >
                      {parse(wpFooterMenu.page.contactACF?.telephone)}
                    </a>
                  </p>
                  <p>
                    <a
                      className="footer-link"
                      href={`mailto:${wpFooterMenu.page.contactACF?.email}`}
                    >
                      {parse(wpFooterMenu.page.contactACF?.email)}
                    </a>
                  </p>
                </>
              ) : (
                <pre>{NO_DETAILS}</pre>
              )}
            </MobileContactWrapper>
          </MobileInner>
        </MobileWrapper>
      </SectionInner>
    </footer>
  )
}

export default Footer

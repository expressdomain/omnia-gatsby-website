import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import logo from '../../images/Logo_white.png'
import { FaLinkedin } from 'react-icons/fa'
import parse from 'html-react-parser'
import contact from '../../../create-pages/contact'
import * as S from './footerStyles'

const NO_DETAILS = 'No details loaded.'

const CONTRIBUTERS_DETAILS = [
  {text: "Code by Robbert Tuerlings", link: "https://www.linkedin.com/in/robberttuerlings"},
  {text: "Design by Ruth Mollema", link: "https://www.linkedin.com/in/ruth-mollema-218083ba/"},
  {text: "Illustrations by Iris Bender", link: "https://www.linkedin.com/in/iris-bender/"},
]

const MappedContacts = () => (
  <S.PoweredByFooter>
    {CONTRIBUTERS_DETAILS.map((item, index) => 
       <a target="_blank" rel="noopener noreferrer" key={index} href={item.link}>{item.text}</a>
    )}
  </S.PoweredByFooter>
  )


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
      <S.SectionInner>
        <S.DesktopWrapper>
          <S.Logo to="/">
            <img src={logo} width={158} />
          </S.Logo>
          {wpFooterMenu.page.contactACF != null || undefined ? (
            <>
              <S.FooterLeft className="footer-left">
                <p>{parse(wpFooterMenu.page.contactACF?.companyName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.personName)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.street)}</p>
                <p>{parse(wpFooterMenu.page.contactACF?.zipCity)}</p>
                <a className="footer-link" href={`${wpFooterMenu.page.contactACF?.linkedin}`}>
                  <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
                </a>
              </S.FooterLeft>
              <S.FooterRight className="footer-left">
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
              </S.FooterRight>
            </>
          ) : (
            <pre>{NO_DETAILS}</pre>
          )}
          <S.FooterMenu>
            {wpFooterMenu !== null || undefined
              ? wpFooterMenu.wpMenu.menuItems.nodes.map((item) => (
                  <Link key={item.id} to={`${item.url}`}>
                    {item.label}
                  </Link>
                ))
              : null}
          </S.FooterMenu>
        </S.DesktopWrapper>

        <S.MobileWrapper>
          <Link to="/" style={{ maxWidth: `119px` }}>
            <img src={logo} width={119} />
          </Link>
          <S.MobileInner>
            <a className="footer-link" href={`${wpFooterMenu.page.contactACF?.linkedin}`}>
              <FaLinkedin style={{ marginTop: '0.5rem' }} size={26} />
            </a>
            <S.MobileContactWrapper>
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
            </S.MobileContactWrapper>
          </S.MobileInner>
        </S.MobileWrapper>
      </S.SectionInner>

      <MappedContacts />
      
    </footer>
  )
}

export default Footer

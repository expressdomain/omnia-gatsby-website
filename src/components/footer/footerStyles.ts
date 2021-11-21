import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DesktopWrapper = styled.div`
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
export const MobileWrapper = styled.div`
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

export const SectionInner = styled.div`
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

export const MobileInner = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`

export const MobileContactWrapper = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  margin-left: 0.8rem;

  p {
    margin: 0;
    font-size: 9px;
  }
`

export const Logo = styled(Link)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

export const FooterLeft = styled.div`
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

export const FooterRight = styled.div`
  color: white;
  margin-left: 2rem;

  p {
    margin-bottom: 0;
  }
`

export const FooterMenu = styled.div`
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

export const PoweredByFooter = styled.div`
  width: 100%;
  font-size: 0.7rem;
  display: flex;
  justify-content: space-evenly;
  
  a {
    color: white;
    text-decoration: none
  }

  a:hover {
    color: #d1dce5;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
    font-size: 0.5rem;
  }
`
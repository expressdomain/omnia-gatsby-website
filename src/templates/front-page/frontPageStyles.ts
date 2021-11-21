import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DesktopWrapper = styled.div`
  grid-column: 1/4;
  width: 100%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    grid-column: 1/4;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  @media only screen and (min-width: 1025px) {
    margin-bottom: 130px;
    /* margin-left: -230px; */
    justify-content: center;
    flex-flow: row;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 60px;
    flex-flow: row;
  }
  @media only screen and (max-width: 768px) {
    flex-flow: column-reverse;
  }
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    margin-bottom: 0;
  }
`

export const HeroInnerContainer = styled.div`
  padding: 0 4rem;
  justify-content: center;
  display: flex;
  flex-flow: column;
  background-color: hsl(247, 69%, 15%);
  @media only screen and (max-width: 768px) {
    padding: 0 7.8rem;
  }
`

export const HeroHeader = styled.div`
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  /* text-align: left; */
  @media only screen and (min-width: 1025px) {
    margin-bottom: 45px;
    /* padding-top: 146px; */
    max-width: 685px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 1.6rem;
    padding-top: 5rem;
    /* width: 685px; */
  }
  @media only screen and (max-width: 480px) {
    background-color: hsl(241, 64%, 15%);
    padding: 1rem 2rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: var(--color-heading-white);
  }
`

export const HeroSubTextContainer = styled.div`
  display: flex;
  @media only screen and (min-width: 1025px) {
    justify-content: flex-end;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`

export const HeroButtonContainer = styled.div`
  display: none;
`

export const UspServicesWrapper = styled.div`
  display: grid;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    grid-column: 1/4;
  }
`

export const UspServicesContainer = styled.div`
  border-radius: 5px;
  @media only screen and (min-width: 1025px) {
    background-color: #120c42;
    height: 400px;
    max-width: 1230px;
    padding: 60px 50px 0 45px;
  }
  @media only screen and (max-width: 1024px) {
    background-color: #120c42;
    height: 220px;
    width: 820px;
    padding: 40px 0 0 40px;
  }
  @media only screen and (max-width: 768px) {
    background-color: #120c42;
    height: 150px;
    width: 600px;
    padding: 2.125rem 0 0 2rem;
  }
  @media only screen and (max-width: 480px) {
    background-color: transparent;
    padding: 2.75rem 2rem 4rem;
    display: flex;
    place-content: center;
  }
`

export const UspServicesInnerContainer = styled.div`
  border-radius: 5px;
  flex-flow: row;
  display: flex;
  @media only screen and (min-width: 1025px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 1024px) {
    padding-top: 3.3rem;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 2.5rem;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 0;
  }
`

export const ServicesTextContainer = styled.div`
  @media only screen and (min-width: 1025px) {
    padding: 37px 55px 0 56px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(264, 71%, 43%);
  }
  @media only screen and (max-width: 1024px) {
    padding: 22px 22px 0 42px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(264, 71%, 43%);
    height: 160px;
  }
  @media only screen and (max-width: 768px) {
    padding: 16px 0 0 32px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(264, 71%, 43%);
    height: 130px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0;
    border-radius: 5px;
    box-shadow: none;
    background-color: transparent;
    height: auto;
  }
`

export const ServicesContent = styled.div`
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: 0.24px;
  text-align: left;
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    color: hsl(247, 69%, 15%);
  }
`

export const ServicesButton = styled(Link)`
  position: relative;
  @media only screen and (min-width: 1025px) {
    top: 26px;
    left: 230px;
  }
  @media only screen and (max-width: 1024px) {
    top: 8px;
    left: 230px;
  }
  @media only screen and (max-width: 768px) {
    top: -10px;
    left: 166px;
  }
  @media only screen and (max-width: 480px) {
    top: 10px;
    left: -60px;
  }
`

export const BlogWrapper = styled.div`
  @media only screen and (min-width: 1025px) {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 15%;
    margin-bottom: 0;
    display: flex;
    place-content: center;
    width: 100%;
    grid-column: 1/4;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`
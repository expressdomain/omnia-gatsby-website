import styled from '@emotion/styled'

export const ContactWrapper = styled.div`
  margin-bottom: 5%;
  max-width: 1240px;
  justify-self: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 0;
    background-color: hsl(247, 69%, 15%);
  }
`
export 
const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
export 
const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`
export 
const ContactHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  margin-top: 10%;
  @media only screen and (max-width: 480px) {
    background-color: transparent;
    margin-top: 0;
  }
`
export 
const ContactHeaderInner = styled.div`
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
  }
`
export 
const HeroMobileContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  place-content: center;
  background-color: inherit;
`
export 
const ContactHeaderContent = styled.div`
  @media only screen and (min-width: 481px) {
    height: 425px;
    max-width: 920px;
    padding: 3rem 4rem 1rem;
  }
  @media only screen and (min-width: 1025px) {
    margin: 0 auto;
    padding: 2rem 13rem;
  }
`
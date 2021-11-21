import styled from '@emotion/styled'

export const OverWrapper = styled.div`
  margin-bottom: 10%;
  max-width: 1240px;
  justify-self: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    grid-column: 1 / 4;
  }
`

export const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

export const OverHeaderWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    border-radius: 5px;
    margin-top: 5%;
  }
  @media only screen and (min-width: 481px) {
    background-color: hsl(247, 69%, 15%);
  }
`

export const OverHeader = styled.div`
  color: white;
  /* max-width: 920px; */
  margin: 0 auto;
  /* padding: 1rem; */
  display: flex;
  flex-flow: row;
  padding-top: 2rem;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    padding: 1rem 3rem;
    background-color: hsl(247, 69%, 15%);
    border-radius: 5px;
  }
`

export const OverInnerHeader = styled.div`
  margin-left: 2.3rem;
  max-width: 540px;
  @media only screen and (max-width: 1024px) {
    max-width: 360px;
  }
  @media only screen and (max-width: 480px) {
    margin: 1rem 3rem;
  }
`

export const HeroMobileContainer = styled.div`
  display: flex;
  place-content: center;
`

export const OverContentContainer = styled.div`
  display: flex;
  place-content: center;
`

export const OverContentInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-top: 10%;
  @media only screen and (max-width: 1024px) {
    margin: 5% 5%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const OverContentItem = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`

export const OverInnerContent = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1.5rem;
`
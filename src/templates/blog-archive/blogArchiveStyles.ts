import styled from '@emotion/styled'

export const BlogWrapper = styled.div`
  margin-top: 5%;
  @media only screen and (min-width: 1025px) {
    display: flex;
    flex-flow: column;
    justify-self: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    grid-column: 1 / 4;
  }
`

export const BlogOverviewHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  max-width: 1400px;
  @media only screen and (min-width: 1025px) {
    margin: 0 -40px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

export const BlogOverviewHeaderInner = styled.div`
  max-width: 920px;
  padding: 3rem 4rem 15rem;
  @media only screen and (max-width: 480px) {
    padding: 1.125rem 3.062rem;
  }
`

export const BlogContainer = styled.div`
  max-width: 990px;
  display: grid;
  place-items: center;
  margin: 0 5rem;
  @media only screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 2rem;
  }
`

export const BlogInnerContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 310px);
    grid-column-gap: 2rem;
    grid-row-gap: 3.75rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 310px);
    grid-column-gap: 2rem;
    grid-row-gap: 3.75rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 310px;
    grid-template-rows: auto;
    grid-row-gap: 2.5rem;
    margin-bottom: 1rem;
    transform: none;
  }
`
export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  transform: translateY(-80px);
  @media only screen and (max-width: 480px) {
    transform: none;
    padding-bottom: 2rem;
  }
`
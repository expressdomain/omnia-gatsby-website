import styled from '@emotion/styled'

export const ServicesWrapper = styled.div`
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

export const ServicesHeaderWrapper = styled.div`
  max-width: 1400px;
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  @media only screen and (min-width: 1025px) {
    margin: 0 -40px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0;
  }
  @media only screen and (max-width: 480px) {
    background-color: transparent;
    margin: 0;
  }
`

export const ServicesHeader = styled.div`
  color: white;
  @media only screen and (min-width: 481px) {
    max-width: 920px;
    padding: 3rem 4rem 15rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 1rem 3.5rem;
  }
`

export const ServicesInnerHeader = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 2rem;
`

export const ServicesContentContainer = styled.div`
  display: flex;
  place-content: center;
`

export const ServicesContentInnerContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
    transform: none;
    grid-column-gap: 0;
  }
`

export const ServicesContentItem = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
`

export const ServicesContentImage = styled.div`
  @media only screen and (min-width: 481px) {
    width: 348px;
    height: 348px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(0, 0%, 100%);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const ServicesContentItemSecondary = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(258, 60%, 44%);
`
export const BlogWrapper = styled.div`
  display: flex;
  place-content: center;
  @media only screen and (min-width: 481px) {
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 2%;
  }
`
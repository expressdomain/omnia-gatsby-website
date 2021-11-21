import styled from '@emotion/styled'

export const BlogWrapper = styled.div`
  max-width: 1240px;
  justify-self: center;
  @media only screen and (max-width: 1024px) {
    max-width: 1024px;
    width: 100%;
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 768px) {
    max-width: 768px;
    width: 100%;
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`

export const BlogHeaderWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

export const BlogHeader = styled.div`
  color: white;
  @media only screen and (min-width: 481px) {
    max-width: 920px;
    margin: 0 auto;
    height: 440px;
    padding: 1rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`

export const BlogInnerHeader = styled.div`
  display: flex;
  margin-top: 2rem;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
  }
`

export const BlogContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 481px) {
    margin-top: 10%;
    max-width: 60%;
    margin-bottom: 10%;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 2rem;
    max-width: 80%;
  }
`

export const BlogText = styled.div`
  @media only screen and (max-width: 480px) {
    max-width: 80%;
    margin: 1rem auto;
  }
`
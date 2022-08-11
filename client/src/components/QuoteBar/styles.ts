import styled from "styled-components";

export const QuoteBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

export const QuoteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;

  a {
    text-decoration: none;
  }

  h1 {
    color: #747171;
  }

  h2 {
    color: #BDBDBD;
  }

`

export const QuoteImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    opacity: 0.5;
    height: 175px;
  }

  /* div {
    position: relative;
    top: 0;
    left: 0;
    height: 175px;
    background-color: linear-gradient(to right, #272727, transparent);
  } */
`
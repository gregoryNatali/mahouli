import styled from "styled-components";

export const QuoteBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 1rem;

`

export const QuoteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;

  a {
    text-decoration: none;
  }

  h1 {
    color: #f7f7f7;
    margin: 0;
  }

  h3 {
    color: #858585;
    margin: 0;
  }

`

export const QuoteImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    opacity: 0.5;
    height: 175px;
		border-radius: 5px;
  }

  /* div {
    position: relative;
    top: 0;
    left: 0;
    height: 175px;
    background-color: linear-gradient(to right, #272727, transparent);
  } */
`
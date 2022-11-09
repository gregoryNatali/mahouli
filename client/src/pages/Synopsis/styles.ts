import styled from "styled-components";

export const SynopsisPageContainer = styled.div`
display: flex;
flex-direction: column;

overflow: hidden;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  `
export const ContentContainer = styled.div`
  margin: 1rem;
  
  img {
    width: 17rem;
  }
`

export const ActionsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;

button {
  background-color: #6A336A;
  border: none;
  color: #d9d9d9;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}
`

export const SynopsisContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  
  background-color: #191919;
  border-radius: 15px;

  p {
    font-size: 1.2rem;
  }
`
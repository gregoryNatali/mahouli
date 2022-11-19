import styled from "styled-components";

export const SynopsisPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;

	margin: 15px;

	h2 {
		margin: 0;
		text-align: center;
	}
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
	gap: 15px;
`

export const ContentContainer = styled.div`
  img {
    width: 17rem;
		border-radius: 0 0 10px 10px;
  }

	.card {
		background-color: #191919;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 15px;
		padding-top: 10px;
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
}
`

export const SynopsisContainer = styled.div`
  padding: 1rem;
  
  background-color: #191919;
  border-radius: 15px;

  p {
    font-size: 1.2rem;
  }
`
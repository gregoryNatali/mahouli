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
		width: auto;
		max-width: 300px;
		border-radius: 0 0 10px 10px;
  }

	.card {
		background-color: #191919;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 15px;
		padding-top: 10px;
		max-width: 300px;
	}
`

export const ActionsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1vw;

button {
  background-color: #6A336A;
  border: none;
  color: #d9d9d9;
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
}
`

export const SynopsisContainer = styled.div`
  padding: 15px; 
  
  background-color: #191919;
  border-radius: 15px;

	h1 {
		margin-top: 0;
	}

  p {
    font-size: 1.2rem;
		text-align: justify;
  }
`

export const UnavailableContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 auto;
	text-align: center;

	div {
		background-color: #727;
		margin: 0;
		padding-top: 10px;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
	}

	h1 {
		margin: 0;
		padding: 0;
	}
	
	p {
		padding: 0 16px;
		margin: 5px 0;
	}

	img {
		border-radius: 0 0 10px 10px;
		max-width: 498px;
		max-height: 280px;
		width: 100%;
		height: 100%;
	}
`
import styled from "styled-components";

export const AccountPageContainer = styled.div`
display: flex;
flex-direction: row;
flex: 1 1 auto;
`

export const UserSideContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 auto;

max-width: 256px;
padding: 10px;
border-right: 2px solid #575757;
`


export const ProfileContainer = styled.div`
  width: 100%;
  background-color: #322F2F;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0.75rem;
  }
  
  img {
		width: 100%;
  }

	button {
		background-color: #6A336A;
		border: 0;
		color: #d7d7d7;
		outline: none;
		border-radius: 0 0 15px 15px;
		width: 100%;
		transition: 200ms;
		font-size: 12pt;
		padding: 4px;
	}

	button:hover {
		background-color: #442144;
		transition: 200ms;
	}
  
  border-radius: 15px;
  overflow: hidden;
  `

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .listText {
    h4 {
      background-color: #442144;
      padding: 0.35rem 4rem;
      border-radius: 15px;
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
  
  .buttonsContainer {
		gap: 2vw;
    display: flex;
		flex: 1 1 auto;
    justify-content: space-around;
  }
  
  .entryDateContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 3vh;
		gap: 10px;
		background-color: #202020;
		border-radius: 10px;
		padding: 10px;
		margin: 10px;
  }
  `

export const StyledListButton = styled.button`
  padding: 15px;
  cursor: pointer;
  
  background-color: #6A336A;
  color: #d7d7d7;
  border: none;
  border-radius: 10px;
  font-weight: 500;
	font-size: 14pt;
  transition: 200ms;
  
  :hover {
    background-color: #4d244d;
    transition: 200ms;
  }
`

export const ContentSideContainer = styled.div`
	margin: 15px;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
`

export const FavoritesContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;

	h4 {
			background-color: #442144;
			padding: 0.35rem 3rem;
			border-radius: 10px;
			font-weight: 500;
			font-size: 1.2rem;
			margin-bottom: 0.5rem;
			margin-top: 1rem;
			width: 4.5rem;
	}
`

export const FavoritesListContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	margin-left: 20px;

	.carousel-wrapper {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;

		img {
			border-radius: 10px;
		}
	}
`
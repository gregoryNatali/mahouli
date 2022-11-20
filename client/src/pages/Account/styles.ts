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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  .entryDateContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5rem;
  }
  `

export const StyledListButton = styled.button`
  padding: 1rem;
  
  background-color: #6A336A;
  color: #d7d7d7;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  
  :hover {
    background-color: #4d244d;
    transition: 0.3s;
  }
  transition: 0.3s;
  
  `
  export const ContentSideContainer = styled.div`
  margin-left: 1rem;
  `
  
  export const FavoritesContainer = styled.div`
  
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
    margin-left: 2rem;
  `
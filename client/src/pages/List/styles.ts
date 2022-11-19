import styled from "styled-components";

export const ListDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	gap: 50px;
	padding: 10px;
	align-items: center;
`

export const ListContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: #202020;
	padding: 0 25px;
	padding-bottom: 10px;
	border-radius: 25px;
	width: 80%;

	#legend {
		background-color: #727;
		border-radius: 25px 25px 0 0;
		user-select: none;
		height: 50px;
		max-height: 50px;
	}
`

export const ListItem = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex: 1 1 auto;
	text-overflow: ellipsis;
	padding: 0 25px;
	align-items: center;
	height: 80px;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;

		img {
			max-height: 80px;
		}
	}

  #date {
    margin-right: 12rem;
  }
`

export const ListEmptyError = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1 1 auto;
`

export const StyledButton = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  
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

	&.active {
    background-color: #4d244d;
		transition: 0.3s;
	}
`
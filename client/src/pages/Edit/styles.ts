import styled from "styled-components";

export const EditPageDiv = styled.div`
	display: flex;
  flex-direction: column;
	flex: 1 1 auto;
	align-items: center;
	justify-content: center;

	.main {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		width: 50%;
		gap: 10px;

		h3 {
			padding: 0;
			margin: 0;
		}
	}

	input {
		background-color: #232323;
		color: #d9d9d9;
		font-size: 12pt;
		border: 0;

		:focus {
			outline: 2px solid #727;
			/* border: 2px solid #727; */
		}
	}
`

export const ProgressDiv = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	span {
		width: 20px;
		text-align: center;
	}

	button {
		border-radius: 50%;
		border: 0;
		margin: 0;
		padding: 0;
		background-color: #727;
		color: #d9d9d9;
		transition: 200ms;

		:hover {
			background-color: #525;
			transition: 200ms;
		}
	}
`

export const InfoDiv = styled.div`
	background-color: #232323;
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 10px;
	border-radius: 10px;
	margin: 10px;
`

export const InputDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;

  select {
    background-color: #272727;
    color: #d9d9d9;
    border: 1px solid #d9d9d9;
    border-radius: 5px;

    option {
      background-color: #272727;
      color: #d9d9d9;
      border: 1px solid #d9d9d9;
    }
  }

	input {
		padding: 5px;
		border-radius: 5px;
	}
`

export const UnfavButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 6%;
  padding: 15px;
  transition: 200ms;
  max-width: 100px;
  max-height: 35px;
  cursor: pointer;
  
  background-color: #a88900;

  :hover {
    transition: 200ms;
    background-color: #695601
  }
`

export const FavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0;
  border-radius: 6%;
  padding: 15px;
  max-width: 100px;
  max-height: 35px;
  cursor: pointer;
  
  background-color: #ffd000;

  :hover {
    transition: 200ms;
    background-color: #ad8e00
  }
`

export const SaveButton = styled.button`
  padding: 1rem;
  
  background-color: #6A336A;
  color: #d7d7d7;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  
  :hover {
    background-color: #4d244d;
    transition: 200ms;
  }
  transition: 200ms;
`
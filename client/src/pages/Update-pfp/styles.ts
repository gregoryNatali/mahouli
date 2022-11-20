import styled from "styled-components"

export const PfpDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;
`

export const PfpForm = styled.form`
	background-color: #191919;
	padding-top: 20px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	h3 {
		margin: 0;
	}

	input {
		margin: 10px;
	}
	
	button {
		width: 100%;
		background-color: #6A336A;
		border: 0;
		color: #d7d7d7;
		outline: none;
		border-radius: 0 0 15px 15px;
		transition: 200ms;
		font-size: 12pt;
		padding: 4px;
	}

	button:hover {
		background-color: #442144;
		transition: 200ms;
	}
`
import styled from "styled-components";

export const EditPageDiv = styled.div`
	display: flex;
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

	input {
		padding: 5px;
		border-radius: 5px;
	}
`
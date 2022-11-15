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
	flex: 1 1 auto;
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
		height: auto;
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
	}
`

export const ListEmptyError = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1 1 auto;
`
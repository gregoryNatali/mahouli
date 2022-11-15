import styled from "styled-components";

export const SearchPageStyle = styled.div`
`

export const SearchPageResultsContent = styled.div`
	display: flex;
	flex: 1 1 auto;
	margin: 10px;
	padding: 15px;
	background-color: #202020;
	border-radius: 25px;
`

export const SearchPageSideContent = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	gap: 10px;
	justify-content: space-between;

	.image {
		width: 80px;
		max-width: 80px;
		height: 80px;
		max-height: 80px;
		justify-content: center;
		align-items: center;
	}

	.image img {
		display: flex;
		max-width: 80px;
		max-height: 80px;
		flex: 1 1 auto;
	}

	/* tr td {
		height: 80px;
		max-height: 80px;
		max-width: 80px;
	} */

	tr td {
		max-width: 250px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.ano, .status {
		text-align: center;
	}
`

export const SearchPageResult = styled.div`
	display: flex;
	flex: 1 1 auto;
	min-height: 100px;
	justify-content: space-between;
	align-items: center;

	div {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.image-wrapper {
		min-width: 70px;
		min-height: 70px;
		max-width: 70px;
		max-height: 70px;
		width: 70px;
		height: 70px;
		justify-content: center;
		display: flex;
	}
`

export const SearchPageControls = styled.div`
`
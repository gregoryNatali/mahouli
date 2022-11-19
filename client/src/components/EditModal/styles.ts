import styled from "styled-components";

export const Dimmer = styled.div`
	display: none !important;

	&.active {
		background-color: #00000050;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;

		display: flex !important;
		justify-content: center;
		align-items: center;

		div {
			display: flex;
		}
	}
`

export const ModalDiv = styled.div`
	display: none;
	background-color: #272727;
	width: 50%;
	height: 75%;
	border: 5px solid #727;
	border-radius: 10px;
	transition: all ease;
`

export const InfoDiv = styled.div`
`

export const ImageDiv = styled.div`
`
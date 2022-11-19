import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
	flex: 1 1 auto;
  flex-direction: column;
	overflow-y: clip;
`

export const NavbarContainer = styled.nav`
  background-color: #727;
  
  a {
    text-decoration: none;
    color: #F8F9F6;
  }
`

export const LinksContainer = styled.div`
  margin: 0.5rem;

  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    margin: 0;

    gap: 0.5rem;

    li {
      list-style-type: none;
    }
  }

  img {
    height: 3rem;

    margin-left: 1rem;
  }

`

export const Logout = styled.li`
	color: #F8F9F6;
	cursor: pointer;
	transition: 200ms;

  :hover {
    color: #eb1111;
    transition: 200ms;
  }
  
`

export const ContentContainer = styled.div`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	height: 1px;
`
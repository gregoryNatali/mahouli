import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  /* flex: 1 1 auto; */
  flex-direction: column;

  width: 100%;
`

export const NavbarContainer = styled.nav`
  padding: 1rem 0 1rem 0;

  width: 100%;

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

  ul {
    display: flex;

    padding: 0;
    margin: 0;

    gap: 0.5rem;

    li {
      list-style-type: none;
    }
  }
`

export const ContentContainer = styled.div`

`
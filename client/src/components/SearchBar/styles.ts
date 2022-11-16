import styled from "styled-components";

export const SearchBarContainer = styled.form`
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #fff ;
  border-radius: 7px;
button {
  background: none;
  border: none;
  cursor: pointer
}
`

export const SearchBarInput = styled.input`
  background-color: #727;
  border: none ;
  border-radius: 7px;
  height: 1.5rem;
  color: #fff;
  font-size: 1.05rem;

  :focus {
    outline: none;
  }
`
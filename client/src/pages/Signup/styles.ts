import styled from "styled-components";

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #191919;
  padding: 0 2rem 2rem 2rem;
  border-radius: 6px;

  color: #d9d9d9;
`

export const StyledSignupForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: #242424;
    border: none;
    border-radius: 6px;
  }

  button {
    background-color: #6A336A;
    border: none;
    color: #d9d9d9;
  }
`
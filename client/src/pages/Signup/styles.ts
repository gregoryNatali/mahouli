import styled from "styled-components";

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem 2rem 2rem;
  border-radius: 6px;

  color: #d9d9d9;
`

export const StyledSignupForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #191919;
  padding: 2rem;
  border-radius: 6px;

  label {
    font-size: 0.88rem;
  }

  input {
    background-color: #242424;
    border: none;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    color: #d9d9d9;
    padding: 0.2rem;
  }

  button {
    background-color: #6A336A;
    border: none;
    color: #d9d9d9;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
`

export const ErrorMessageSpan = styled.span`
font-size: 0.8rem;
color: #e20000;
`
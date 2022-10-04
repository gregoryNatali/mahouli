import styled from "styled-components";

export const EmailConfirmationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem 2rem 2rem;
  border-radius: 6px;

  color: #d9d9d9;
  
  span {
    margin-top: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    color: #777777;
    text-decoration: underline;
  }
`

export const StyledEmailConfirmationForm = styled.form `
    display: flex;
  flex-direction: column;
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
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 6px;
  }

`

export const ErrorMessageSpan = styled.span`
font-size: 0.8rem;
color: #e20000;
`
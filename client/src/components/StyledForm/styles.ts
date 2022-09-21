import styled from "styled-components";

export const StyledFormContainer = styled.form`
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
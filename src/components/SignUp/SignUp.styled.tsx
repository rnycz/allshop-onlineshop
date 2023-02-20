import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  margin: auto 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 95%;
  max-width: 650px;
  label {
    margin-top: 15px;
  }
  input {
    padding: 10px;
    margin: 5px 0;
    border: none;
    font-size: 1.1em;
    &:focus {
      background-color: #f2f2f2;
      outline: none;
    }
  }
`;
export const ValidationError = styled.p`
  color: #ff0000;
  margin: 0;
`;

export const Rules = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
  }
  input {
    width: 20px;
    height: 20px;
  }
  label {
    padding-left: 5px;
    margin: 0;
  }
`;
export const SignUpButton = styled.button`
  border: none;
  width: fit-content;
  padding: 10px 20px;
  background-color: #eec790;
  border-radius: 30px;
  font-size: 1.2em;
  display: flex;
  gap: 8px;
  margin: 15px auto 5px auto;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f2d2a6;
  }
`;

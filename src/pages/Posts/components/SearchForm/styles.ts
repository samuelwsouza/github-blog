import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    margin-top: 1rem;
    height: 50px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    color: ${(props) => props.theme["base-text"]};

    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
    }
  }
`;

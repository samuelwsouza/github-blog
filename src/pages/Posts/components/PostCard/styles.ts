import styled from "styled-components";

export const PostUnityContainer = styled.div`
  width: 25rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme["base-post"]};
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;
  position: relative;

  transition: border-color 0.1s ease;

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h1 {
      max-width: 16.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: ${(props) => props.theme["base-title"]};
      line-height: 1.6;
    }

    span {
      font-size: 0.75rem;
      padding-top: 0.3rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  .summary {
    line-height: 1.6;
    width: 100%;
    height: 8rem;
    padding-top: 1.5rem;

    color: ${(props) => props.theme["base-text"]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;

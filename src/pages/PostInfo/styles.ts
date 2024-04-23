import styled from "styled-components";

export const TitleCard = styled.div`
  width: 53rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: -6rem auto;
  padding: 2rem;

  border-radius: 10px;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: inherit;
      /* Tirando a estilização do <Link /> do React Router */

      position: relative;
      display: inline-block;

      .items-head {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme["blue"]};
      }

      &:hover::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme["blue"]};
        transition: 0.2s;
      }
    }

    .items-head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    span {
      color: ${(props) => props.theme["blue"]};
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;

      text-decoration: none;
    }
  }

  .card-down {
    padding-top: 1.25rem;
    width: 100%;
    height: 100%;

    .theme-title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .list {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 2rem;

      padding-top: 1rem;

      .category-profile {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          color: ${(props) => props.theme["base-label"]};
        }

        span {
          color: ${(props) => props.theme["base-span"]};
        }
      }
    }
  }
`;

export const ContentCard = styled.div`
  width: 54rem;
  height: 26rem;

  margin: 6rem auto;
  padding: 2rem;

  .summary {
    font-size: 1rem;
    line-height: 1.6;
  }

  .special-underline {
    margin-top: 2rem;
    color: ${(props) => props.theme["blue"]};
    text-decoration: underline;
  }

  .special-underline-summary {
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .code-area {
    margin-top: 1.75rem;
  }
`;

import styled from "styled-components";

export const ProfileCard = styled.div`
  width: 53rem;
  height: 13.25rem;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: -6rem auto;
  padding: 2rem;

  border-radius: 10px;
  display: flex;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ProfileContent = styled.div`
  padding-left: 2rem;
  padding-top: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .username {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.6;
      color: ${(props) => props.theme["base-title"]};
    }

    a {
      position: relative;
      display: inline-block;
      text-decoration: none;

      .open-github {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme["blue"]};
      }

      svg {
        margin-left: 0.5rem;
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
  }

  .profile-down {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;

    .description {
      font-size: medium;
      color: ${(props) => props.theme["base-text"]};
      line-height: 1.6;
    }

    .list {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      gap: 1.5rem;

      .category-profile span {
        margin-left: 0.5rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      .category-profile svg {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;

export const PostContainer = styled.main`
  width: 100%;
  max-width: 55rem;
  margin: 10rem auto 0;
  padding: 0 1.5rem;
`;

export const MyPosts = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
  padding-bottom: 10rem;
`;

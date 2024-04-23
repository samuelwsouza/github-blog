import styled from "styled-components";
import backgroundImage from "../../assets/background-header.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

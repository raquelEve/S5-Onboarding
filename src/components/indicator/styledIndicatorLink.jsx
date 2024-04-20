import styled from "styled-components";

export const StyledIndicatorLink = styled.a`
  height: 10px;
  width: ${({ isActive }) => isActive ? '20px' : '10px'};
  background-color: ${({ isActive }) => isActive ? '#000' : '#ced2d6'};
  border-radius: ${({ isActive }) => isActive ? '10px' : '50%'};
  margin: 0 5px;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ isActive }) => isActive ? '#ced2d6' : '#000'};
    border: ${({ isActive }) => isActive ? '2px solid #000' : ''};
  }
`;

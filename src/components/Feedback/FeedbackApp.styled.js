import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: inline-flex;
  gap: 7px;
`;
export const StyledButton = styled.button`
  width: 70px;
  padding: 5px;
  background-color: grey;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: teal;
    color: black;
  }
`;

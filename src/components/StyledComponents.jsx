import styled from "styled-components";

export const StlyedComponents = () => {
  return (
    <StyleContainer>
      <StyleTitle>- Stlyed Components -</StyleTitle>
      <StyleButton>FIGHT!!</StyleButton>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyleTitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const StyleButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdef;
    color: #fff;
    cursor: pointer;
  }
`;
import styled from "styled-components";

const spacing = {
  1: "10px",
  2: "20px",
  3: "30px",
  4: "40px",
  5: "50px"
};

export const Margin = styled.div`
  margin-top: ${({ top }) => spacing[top]};
  margin-bottom: ${({ bottom }) => spacing[bottom]};
  margin-right: ${({ right }) => spacing[right]};
  margin-left: ${({ left }) => spacing[left]};
`;

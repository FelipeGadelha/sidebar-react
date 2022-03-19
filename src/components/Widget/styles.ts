import styled, { css } from "styled-components";
//import { Link } from "react-router-dom";

interface SectionProps {
  active: Boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1;
  padding: 1.6rem;
  -webkit-box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.secundary};
  box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.primary};
  border-radius: 1rem;
  height: 15rem;
  min-width: 30rem;
  background: ${p => p.theme.colors.panel};
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  color: ${p => p.theme.colors.text};
`;

export const Counter = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 5rem;
`;

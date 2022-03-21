import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const GenderIcon = styled.button`
  display: inline-flex;
  padding: 0.4rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  font-size: 2.2rem;
  background: ${p => p.theme.colors.primary};
  color: #FFF;//${p => p.theme.colors.text};
`;
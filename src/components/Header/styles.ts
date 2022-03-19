import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  background: ${p => p.theme.colors.header};
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
  height: 100%;
`;

interface IconProps {
  active: boolean
}

export const SwitchTheme = styled.button<IconProps>`
  display: inline-flex;
  padding: 0.4rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  font-size: 2.2rem;
  background: ${p => p.theme.colors.primary};
  color: #FFF;//${p => p.theme.colors.text};
`;
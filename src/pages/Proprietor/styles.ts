import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  overflow: hidden;
`;

type IconProp = {
  type: string
}

export const Icon = styled(Link)<IconProp>`
  display: inline-flex;
  padding: 0.2rem;
  border-radius: 0.3rem;
  font-size: 1.8rem;
  border: 0.1rem solid ${p => (p.type === 'update') ? "#FFAF00": "#f93e3e"};
  //background: ${p => p.theme.colors.background};
  color: ${p => (p.type === 'update') ? "#FFAF00": "#f93e3e"};
  transition: .1s ease-in;
  &:hover{
    background:  ${p => (p.type === 'update') ? "#FFAF00": "#f93e3e"};
    border: 0.1rem solid ${p => (p.type === 'update') ? "#FFAF00": "#f93e3e"};
    color: ${p => p.theme.colors.background};
  }
  
`;
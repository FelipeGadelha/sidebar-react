import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

type GenderProp = {
  gender: string
}

export const GenderIcon = styled.div<GenderProp>`
  display: inline-flex;
  padding: 0.4rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  font-size: 2.2rem;
  background: ${p => (p.gender === 'FEMALE') ? "#e66499" : "#0067b5"};
  color: #FFF;//${p => p.theme.colors.text};
`;

type IconProp = {
  type: string
}

export const Icon = styled(Link)<IconProp>`
  display: inline-flex;
  padding: 0.4rem;
  border-radius: 0.3rem;
  font-size: 2.2rem;
  border: 0.1rem solid ${p => p.theme.colors.panel};
  //background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  transition: .1s ease-in;
  &:hover{
    //background: ${p => p.theme.colors.background};
    border: 0.1rem solid ${p => (p.type === 'update') ? "#07b739": "#f93e3e"};
    color: ${p => (p.type === 'update') ? "#07b739": "#f93e3e"};
    
  }
  
`;
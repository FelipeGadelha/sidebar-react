import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';

export const Container = styled.div`
  width: 96%;
  overflow: hidden;
  
`;

type SearchProp = {
  toggle: boolean
}

export const Search = styled.div<SearchProp>`
  margin: 3rem auto;
  max-width: ${p => p.toggle ? '40rem' : '3rem' };
  width: 100%;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.3rem;
  outline: none;
  overflow: hidden;
  transition: max-width 0.2s ease-in;
  //background: ${p => p.toggle ? 'none' : p.theme.colors.primary };
  //border: 0.1rem solid ${p => p.theme.colors.primary};
  //border: ${p => p.toggle ? `0.1rem solid ${p.theme.colors.primary}` : '0rem' };
  //box-shadow: 0 0.1rem 0.5rem ${p => p.theme.colors.info};
`;

export const SearchInput = styled.input<SearchProp>`
  //display: ${p => p.toggle ? '' : 'none' };
  width: ${p => p.toggle ? '100%': '0rem'};
  max-width: ${p => p.toggle ? '100%': '0rem'};
  height: 3rem;
  border-radius: 0rem 0.3rem 0.3rem 0rem;
  border: none;
  outline: none;
  padding: ${p => p.toggle ? '0 0.5rem': '0rem'};
  font-size: 1.8rem;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.panel};
  border: 0.1rem solid ${p => p.theme.colors.primary};
  transition: 0.2s ease-in;
`;

export const SearchIcon = styled(BiSearch)<SearchProp>`
  width: 3.1rem;
  height: 3.1rem;
  padding: 0.5rem;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  outline: none;
  border: 0.1rem solid ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:active {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.dark};
  }
`;

type GenderProp = {
  gender: string
}

export const GenderIcon = styled.div<GenderProp>`
  display: inline-flex;
  padding: 0.2rem;
  border-radius: 0.3rem;
  font-size: 1.8rem;
  background: ${p => (p.gender === 'FEMALE') ? "#e66499" : "#0067b5"};
  color: ${p => p.theme.colors.white};
`;

type IconProp = {
  type: string
}

export const Icon = styled(Link)<IconProp>`
  display: inline-flex;
  padding: 0.2rem;
  border-radius: 0.3rem;
  font-size: 1.8rem;
  border: 0.1rem solid ${p => (p.type === 'update') ? p.theme.colors.warning : p.theme.colors.danger };
  //background: ${p => p.theme.colors.background};
  color: ${p => (p.type === 'update') ? p.theme.colors.warning : p.theme.colors.danger };
  transition: .1s ease-in;
  &:hover{
    background:  ${p => (p.type === 'update') ? p.theme.colors.warning : p.theme.colors.danger };
    border: 0.1rem solid ${p => (p.type === 'update') ? p.theme.colors.warning : p.theme.colors.danger };
    color: ${p => p.theme.colors.equivalent };
  }
  
`;



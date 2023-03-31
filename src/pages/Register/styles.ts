import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../styles/variables";

export const Container = styled.main`
  background:  ${p => p.theme.colors.background};
  grid-area: main;
  overflow-y: auto;
  padding: 2rem 2rem 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.4rem 1.5rem 0.2rem inset;

  ::-webkit-scrollbar {
    width: 0.6rem;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3)
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3)
  }
`;

export const PageGuide = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 0.1rem solid;
`;

export const Page = styled(Link)`
  text-decoration: none;
  list-style: none;
  color: ${p => p.theme.colors.text};
  &:hover {
    font-weight: bold;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin-top: 0.5rem;
  height: 100%;
  display: grid;
  grid-template-columns: 12rem auto;
  grid-auto-rows: minmax(5rem, max-content) auto;
  grid-template-areas: "menu menu menu menu"
                        "panel panel panel panel"
                        "panel panel panel panel"
                        "panel panel panel panel";
`;
export const Menu = styled.div`
  grid-area: menu;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const MenuItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
  margin: 0 0.5rem;
  text-decoration: none;
  list-style: none;
  font-size: 1.8rem;
  color: ${p => p.theme.colors.text};
  &:hover {
    border-radius: ${v.borderRadius};
    -webkit-box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.secundary};
    box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.primary};
    background: ${p => p.theme.colors.primary};
    color: #FFF;
  }
  &:focus {
    border-radius: ${v.borderRadius};
    -webkit-box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.secundary};
    box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.primary};
    background: ${p => p.theme.colors.primary};
    color: #FFF;
  }
`;

export const Panel = styled.div`
  grid-area: panel;
  display: flex;
  //align-items: center;
  justify-content: center;
  border-radius: ${v.borderRadius};
  //flex: 1 1;
  -webkit-box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.secundary};
  box-shadow: 0.2rem 0.4rem 1rem 0.1rem ${p => p.theme.colors.shadow.primary};
  background: ${p => p.theme.colors.panel};
`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  /* background: #FBFAFB; */
  background:  ${p => p.theme.colors.background};
  grid-area: main;
  overflow-y: auto;
  padding: 2rem;
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
  /* flex-wrap: wrap; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */

//  > h1 {
//    width: 100%;
//    margin-top: 1rem;
//  }
`;

export const Content = styled.div`
  width: 100%;
  //background: green;
  border-radius: 1rem;
  margin: 0 auto;
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

export const Widgets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  gap: 2.5rem;
  margin: 0 auto;
`;

export const SplineGraph = styled.div`
  background: ${p => p.theme.colors.panel};
  //width: 100%;
  border-radius: 0.8rem;
  margin: 1rem;
  padding: 1rem;
  
`;
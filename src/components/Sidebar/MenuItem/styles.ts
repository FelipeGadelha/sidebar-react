import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  text-decoration: none;
  list-style: none;
  border-radius: 0.5rem;
  display: block;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  transition: .2s ease-in;
  overflow: hidden;
  white-space: nowrap;
  padding: 1rem 0;

  &:hover {
    background: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.text};
  }
  &:focus {
    background: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.text};
  }
`;

export const IconMenu = styled.div`
  display: inline-block;
  width: 5rem;
  height: 100%;
  font-size: 2.5rem;
  line-height: 5rem;
  align-items: center;
  vertical-align: -13%;
  //vertical-align: sub;
  overflow: hidden;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

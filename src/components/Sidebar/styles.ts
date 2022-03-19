import styled, { css } from 'styled-components'
import { v } from '../../styles/variables'

interface SectionProps {
  active: Boolean;
};
export const Container = styled.div<SectionProps>`
  grid-area: sideMenu;
  width: ${({ active }) => (active ? v.sidebarWidth : v.sidebarWidthActive)};
  //width: ${({ active }) => (active ? "345px" : "80px")};
  background:  ${p => p.theme.colors.sidebar};
  transition: .2s ease-in;
`;

//export const Content = styled.div`
//  height: 100%;
//  width: 86%;
//`;

export const TopSection = styled.div`
  position: relative;
  height: 10rem;
  //width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem 1rem 1rem;
  & img {
    width: 6rem; 
    height: 6rem
  }
`;
export const ItemMenus = styled.div`
  padding: 0 1.5rem;
`;

export const Divider = styled.div`
  width: 96%;
  height: 0.2rem;
  border-radius: 0.1rem;
  background: ${p => p.theme.colors.hover};
  margin: auto;
`;

const sharedIconStyle = css<SectionProps>`
  color: ${p => p.theme.colors.text};
  font-size: 2.4rem;
  display: inline-block;
  position: absolute;
  right: ${p => p.active ? "10%" : "-65%" };
  //right: ${p => p.active ? "0" : "-70%" };
  top: 50%;
  transform: translateY(-50%);
  transition: right .2s ease-in;
  cursor: pointer;
`;

export const Icon = styled.div<SectionProps>`
  ${sharedIconStyle}
`;
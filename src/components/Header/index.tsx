import { useContext } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { ThemeContext } from 'styled-components';
import { Container, Content, SwitchTheme } from './styles';

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)
  const isActive = title === 'dark'
  return (
    <Container>
      <Content>
        <SwitchTheme active={isActive} onClick={ toggleTheme }>
          {(isActive) ? <RiSunLine/> : <RiMoonClearLine/>}
        </SwitchTheme>
      </Content>
      
    </Container>
  );
}

export default Header;
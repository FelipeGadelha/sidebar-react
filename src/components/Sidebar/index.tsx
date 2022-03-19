import { useContext, useState } from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as HeroIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import { SidebarContext } from '../../contexts/SidebarContext';
import ItemMenu from './MenuItem';
import { Container, Icon, TopSection, ItemMenus, Divider } from './styles';
import logoImg from "../../assets/medicina-veterinaria-vector.svg"
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {

  const [isActive, setIsActive] = useState<Boolean>(true);

  return (
    <Container active={isActive}>
      <TopSection>
        <Link to="/"><img src={logoImg} alt="Logo Vet Hero" /></Link>
        <Icon active={isActive} onClick={()=> setIsActive(!isActive)}>
          {(isActive) ? <FaIcons.FaChevronCircleLeft/> : <FaIcons.FaChevronCircleRight/>}
        </Icon>
      </TopSection>
      <ItemMenus>
        <ItemMenu path="/" icon={<RiIcons.RiHome3Line />} title="Home"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
        <ItemMenu path="/register" icon={<MdIcons.MdAppRegistration />} title="Registros"/>
        <Divider />
        <ItemMenu path="/dash" icon={<HeroIcons.HiOutlineDocumentReport />} title="Relatórios"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
      </ItemMenus>
    </Container>
  );
}

export default Sidebar;
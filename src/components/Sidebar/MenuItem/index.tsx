import React, { ReactElement } from 'react';
import { Container, IconMenu, Icon } from './styles';

interface ItemMenuProps {
  title: string;
  icon: ReactElement<any, any>; //JSX.Element
  path: string;
};

const ItemMenu: React.FC<ItemMenuProps> = ({title, icon, path}) => {

  return(
    <Container to={path}>
        <IconMenu><Icon>{icon}</Icon></IconMenu>{title}
    </Container>
  );
}

export default ItemMenu;
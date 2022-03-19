import React, { ReactElement } from 'react';

import { Container, Title, Left, Right, Counter } from './styles';

interface IWidgetProps {
  path?: string;
  title?: string;
  amount?: string;
  subtitle?: string;
  isMoney?: Boolean;
  icon?: ReactElement<any, any>;
}

const Widget: React.FC<IWidgetProps> = ({path, title, subtitle, amount, isMoney, icon}) => {
  return (
    <Container>
      <Left>
        <Title>{title}</Title>
        <span>{subtitle}</span>
        <Counter>
          {isMoney && "$"} {amount}
        </Counter>
      </Left>
      <Right>{icon}</Right>
    </Container>
  );
}

export default Widget;

import Widget from '../../components/Widget';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

import { Container, Content, Page, PageGuide, SplineGraph, Widgets } from './styles';
import AreaGraphic from '../../components/graphics/AreaGraphic';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log('RENDER')
  },[])
  
  return (
    <Container>

      <Content>
      <PageGuide>
        <Page to="/">Home</Page> / <Page to="/dash">Dashboard</Page>
      </PageGuide>
        <Widgets>
          <Widget title='Veterinários' amount='150' icon={<FaIcons.FaUserMd />}/>
          <Widget title='Pets' amount='100' icon={<MdIcons.MdOutlinePets />}/>
          <Widget title='Exames' amount='200' icon={<AiIcons.AiFillExperiment />}/>
          <Widget title='Faturamento' isMoney amount='300,00' subtitle='mensal' icon={<RiIcons.RiMoneyDollarCircleFill />}/>
        </Widgets>
        <SplineGraph>
          <AreaGraphic />
        </SplineGraph>
        <SplineGraph>
          <AreaGraphic />
        </SplineGraph>
        <SplineGraph>
          
        </SplineGraph>
      </Content>
    </Container>
  );
}

export default Dashboard;
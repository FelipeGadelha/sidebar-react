import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi'
import api from '../../services/api';
import { Proprietors } from '../../types/Proprietor';

import { Container, Icon } from './styles';

const Proprietor: React.FC = () => {

  const [proprietors, setProprietors] = useState<Proprietors>()
  const titles = ['id','nome','CPF','email','phone','editar', 'excluir' ]

  useEffect(() => {
    api.get(`/v1/proprietors`)
      .then(response => {
        setProprietors(response.data)
      }
    )
  }, [])

  const titlesJSX = titles.map(title =>(
    <th key={title}>{title}</th>
  ))

  const data = proprietors?.map(proprietor =>(
    <tr key={ proprietor.id }>
      <td data-label={ titles[0] }>{ proprietor.id }</td>
      <td data-label={ titles[1] }>{ proprietor.name }</td>
      <td data-label={ titles[2] }>{ proprietor.cpf }</td>
      <td data-label={ titles[3] }>{ proprietor.email }</td>
      <td data-label={ titles[4] }>{ proprietor.phone }</td>
      <td data-label={ titles[5] }><Icon to="#" type='update'><BiEdit/></Icon></td>
      <td data-label={ titles[6] }><Icon to="#" type='delete'><BsTrash/></Icon></td>
    </tr>
  ))
  return (
    <Container>
      <h1>Proprietors</h1>
      <Table titles={ titlesJSX } data={ data }/>
    </Container>
  );
}

export default Proprietor;
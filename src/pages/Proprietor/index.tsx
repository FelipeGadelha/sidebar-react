import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Proprietors } from '../../types/Proprietor';

import { Container } from './styles';

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
      <td data-label={ titles[5] }>editar</td>
      <td data-label={ titles[6] }>excluir</td>
    </tr>
  ))
  return (
    <Container>
      <Table titles={ titlesJSX } data={ data }/>
    </Container>
  );
}

export default Proprietor;
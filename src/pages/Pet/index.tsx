import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../services/api';
import { Pets } from '../../types/Pet';

import { Container } from './styles';

const Pet: React.FC = () => {

  const [pets, setPets] = useState<Pets>()
  const titles = ['id', 'nome', 'gênero', 'editar', 'excluir' ]

  useEffect(() => {
    api.get(`/v1/pets`)
      .then(response => {
        setPets(response.data)
      }
    )
  }, [])

  const title = titles.map(p =>(
      <th key={p}>{p}</th>
    ))
  const data = pets?.map(pet =>(
    <tr key={ pet.id }>
      <td data-label={ titles[0] }>{ pet.id }</td>
      <td data-label={ titles[1] }>{ pet.name }</td>
      <td data-label={ titles[2] }>{ pet.gender }</td>
      <td data-label={ titles[3] }>editar</td>
      <td data-label={ titles[4] }>excluir</td>
    </tr>
  ))
  return (
    <Container>
      <Table titles={ title } data={ data }/>
    </Container>
  );
}

export default Pet;
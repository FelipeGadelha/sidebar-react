import React, { useEffect, useState } from 'react';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import Table from '../../components/Table';
import api from '../../services/api';
import { Pets } from '../../types/Pet';

import { Container, GenderIcon } from './styles';

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

  const titlesJSX = titles.map(title =>(
    <th key={title}>{title}</th>
  ))

  
  const data = pets?.map(pet =>(
    
    <tr key={ pet.id }>
      <td data-label={ titles[0] }>{ pet.id }</td>
      <td data-label={ titles[1] }>{ pet.name }</td>
      <td data-label={ titles[2] }>{ 
        (pet.gender.toString() === 'FEMALE') ? <GenderIcon><BsGenderFemale/></GenderIcon> : <GenderIcon><BsGenderMale/></GenderIcon> 
      }</td>
      <td data-label={ titles[3] }>editar</td>
      <td data-label={ titles[4] }>excluir</td>
    </tr>
  ))
  return (
    <Container>
      <Table titles={ titlesJSX } data={ data }/>
    </Container>
  );
}

export default Pet;
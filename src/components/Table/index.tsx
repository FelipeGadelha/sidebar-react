import React, { ReactElement } from 'react';

import { CustonTable } from './styles';

interface TableProps {
  titles: JSX.Element[],
  data: JSX.Element[] | undefined
}

const Table: React.FC<TableProps> = ({titles, data = <tr><td>Nenhum</td></tr>}) => {
  return (
    <CustonTable>
      <thead>
        <tr>
          {titles}
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </CustonTable>
  );
}

export default Table;

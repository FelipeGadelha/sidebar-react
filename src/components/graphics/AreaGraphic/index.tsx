import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// import { Container } from './styles';

const AreaGraphic: React.FC = () => {
  
  const data = [
    {
      "date": "2021-02-10",
      "value": "1.34646565"
    },
    {
      "date": "2021-02-11",
      "value": "5.93231321214"
    },
    {
      "date": "2021-02-12",
      "value": "2.93231321214"
    }, 
    {
      "date": "2021-02-13",
      "value": "4.93"
    },
    {
      "date": "2021-02-14",
      "value": "1.34646565"
    },
    {
      "date": "2021-02-15",
      "value": "5.93231321214"
    },
    {
      "date": "2021-02-16",
      "value": "2.93231321214"
    }, 
    {
      "date": "2021-02-17",
      "value": "9.932319758"
    }
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey="value" /*type="monotone"*/ stroke="#2451B7" fill="url(#color)" />
        <XAxis dataKey="date" 
          axisLine={false} 
          tickLine={false}
        />
        <YAxis dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />
        <Tooltip/>
        <CartesianGrid opacity={0.1} vertical={false}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaGraphic;
import * as React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { Mês: 'Jan', Cliques: 2.525 },
  { Mês: 'Fev', Cliques: 3.018 },
  { Mês: 'Mar', Cliques: 5.682 },
  { Mês: 'Abr', Cliques: 4.440 },
  { Mês: 'Mai', Cliques: 6.310 },
  { Mês: 'Jun', Cliques: 7.127 },
  { Mês: 'Jul', Cliques: 3.874 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className="card">
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="Cliques"
            argumentField="Mês"
          />
          <Title text="Estatisticas" />
          <Animation />
        </Chart>
      </div>
    );
  }
}
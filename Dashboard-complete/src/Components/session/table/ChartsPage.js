import React from 'react';
import "./ChartsPage.css";
import { PieChart, Pie, Label ,Cell } from 'recharts';

const ChartsPage =  () => {
  const data = [
    { name: 'Approved', value: 5 },
    { name: 'Rejected', value: 3 },
    { name: 'Issues', value: 3 },
  ];
  const COLORS = ['#4DAE68', '#F9C717', '#F24747'];
  return (
    
      <div className="chart">
        <PieChart width={300} height={300}>
          <Pie data={data} cx={150} cy={150} innerRadius={80} outerRadius={130} fill="#8884D8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            {/* <Label value={`${totalCalls}<br/>Total Calls`} position="center" /> */}
            <Label
              content={(props) => {
                const {
                  viewBox: { cx, cy },
                } = props;
                const positioningProps = {
                  x: cx,
                  y: cy,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle',
                };
                const presentationProps = {
                  fill: 'black',
                  fontWeight: 1000,
                  fontSize: 30,
                };
                const positioningProps1 = {
                  x: cx,
                  y: cy + 20,
                  textAnchor: 'middle',
                  verticalAnchor: 'middle',
                };
                const presentationProps1 = {
                  fill: '#6E6E6F',
                  fontWeight: 700,
                  fontSize: 12,
                };
                return (
                  <>
                    <text {...positioningProps} {...presentationProps}>
                      {28}
                    </text>
                    <text {...positioningProps1} {...presentationProps1}>
                      Total Calls
                    </text>
                  </>
                );
              }}
            />
          </Pie>
        </PieChart>
      </div>

  );
}

export default ChartsPage
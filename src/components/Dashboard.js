// src/components/Dashboard.js
import React from 'react'
import styled from 'styled-components'
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { BarPlot } from '@mui/x-charts/BarChart'
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart'
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
import { PiePlot } from '@mui/x-charts/PieChart'
import theme from '../theme'

const DashboardContainer = styled.div`
  background-color: ${theme.primary};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const WidgetContainer = styled.div`
  background-color: ${theme.white};
  color: ${theme.secondary};
  padding: 20px;
  margin: 10px;
  width: 45%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const WidgetTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
]

const Dashboard = () => {
  return (
    <DashboardContainer>
      <WidgetContainer>
        <WidgetTitle>Decision Framework Weights</WidgetTitle>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', height: 200 }} elevation={3}>
            <ResponsiveChartContainer
              series={[{ data: uData, label: 'uv', type: 'bar' }]}
              xAxis={[{ scaleType: 'band', data: xLabels }]}
            >
              <BarPlot />
            </ResponsiveChartContainer>
          </Paper>
        </Box>
      </WidgetContainer>

      <WidgetContainer>
        <WidgetTitle>Decision Scores</WidgetTitle>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', height: 200 }} elevation={3}>
            <ResponsiveChartContainer
              series={[
                {
                  type: 'bar',
                  data: [1, 2, 3, 2, 1],
                },
                {
                  type: 'line',
                  data: [4, 3, 1, 3, 4],
                },
              ]}
              xAxis={[
                {
                  data: ['A', 'B', 'C', 'D', 'E'],
                  scaleType: 'band',
                  id: 'x-axis-id',
                },
              ]}
            >
              <BarPlot />
              <LinePlot />
              <MarkPlot />
              <ChartsXAxis
                label='X axis'
                position='bottom'
                axisId='x-axis-id'
              />
            </ResponsiveChartContainer>
          </Paper>
        </Box>
      </WidgetContainer>

      <WidgetContainer>
        <WidgetTitle>Decision Impact</WidgetTitle>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', height: 200 }} elevation={3}>
            <ResponsiveChartContainer
              series={[
                {
                  type: 'pie',
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                },
              ]}
            >
              <PiePlot />
            </ResponsiveChartContainer>
          </Paper>
        </Box>
      </WidgetContainer>
    </DashboardContainer>
  )
}

export default Dashboard

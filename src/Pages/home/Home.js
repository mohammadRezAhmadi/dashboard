import React from 'react'
import Feature from '../../Components/features/Feature'
import './Home.css'
import Chart from '../../Components/chart/Chart'
import {XAxisChartData} from '../../Data'
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import WidgetLg from '../../Components/widgetLg/WidgetLg'
export default function Home() {
  return (
    <div className="home">
      <Feature/>
      <Chart grid title="Month Sale" data={XAxisChartData} dataKey="Sale"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

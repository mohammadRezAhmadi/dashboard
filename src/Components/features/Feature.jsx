import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Feature.css'
export default function Feature() {
  return (
    <div className='feature'>
      <div className='featureItem'>
        <span className='featureTitle'>Revanue</span>
        <div className="featureContainer">
            <span className='featureMoney'>$2.14</span>
            <span className="featureRate">
                -11.4 <ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
            <span className='featureSub'>Compared to last month</span>
      </div>
      <div className='featureItem'>
        <span className='featureTitle'>Sales</span>
        <div className="featureContainer">
            <span className='featureMoney'>$11.4</span>
            <span className="featureRate">
                -5.4 <ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
            <span className='featureSub'>Compared to last month</span>
      </div>
      <div className='featureItem'>
        <span className='featureTitle'>Cost</span>
        <div className="featureContainer">
            <span className='featureMoney'>$4.61</span>
            <span className="featureRate">
                +2.4 <ArrowDownwardIcon className='featureIcon negative'/>
            </span>
        </div>
            <span className='featureSub'>Compared to last month</span>
      </div>
    </div>
  )
}

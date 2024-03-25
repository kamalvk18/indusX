import React from 'react'
import BasicBars from '../../components/BasicBar/BasicBar'
import './MobiliserDashboard.css'

export default function MobiliserDashboard(props) {
    const {name} = props
  return (
    <div className="main-content">
          <h3 className="title">{`Hello ${name} (Mobiliser)`}</h3>
          <div className='box-wrapper'>
            <div className="box-container">
            <div className="box">
              <div className="box-title">Total Registered</div>
              <div className="box-number">100</div>
            </div>
            <div className="box">
              <div className="box-title">Total Moved</div>
              <div className="box-number">10</div>
            </div>
            <div className="box">
              <div className="box-title">Total Under</div>
              <div className="box-number">70</div>
            </div>
            <div className="box">
              <div className="box-title">Total Selected</div>
              <div className="box-number">18</div>
            </div>
            <div className="box">
              <div className="box-title">Total Rejected</div>
              <div className="box-number">2</div>
            </div>
            </div>
            <div className='bars-container'>
              <BasicBars  xtext='Date'/>
              <BasicBars xtext='Camp Name'/>
            </div>
            
          </div>
        </div>
  )
}

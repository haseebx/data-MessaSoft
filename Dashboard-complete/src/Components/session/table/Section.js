import React from 'react';
import './Section.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import TabBar from '../tabbar/TabBar';
import ChartsPage from './ChartsPage';
const Section = () => {
  return (
    <div className="flex-container ">
      <div className=" flex1 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="activity-text">
          My Activity
          <span className="show-text">
            Show:<span className="today-text">Today</span>
          </span>
          <span className="section-angle-down">
            <MDBIcon fas icon="angle-down" />
          </span>
          <hr />
          <div className="charts-page">
            <ChartsPage />
          </div>
          <hr className="line1" />
          <div className="chart-main-div1">
            <div className="first">
              <div className="child1"> </div>
              <span className="approved-text">Approved</span>
            </div>
            <div className="number">14</div>
          </div>
          <hr className="mainline" />
          <div className="chart-main-div1">
            <div className="first">
              <div className="child2"></div>
              <span className="approved-text">Rejected</span>
            </div>
            <div className="number">10</div>
          </div>
          <hr className="mainline" />
          <div className="chart-main-div1">
            <div className="first">
              <div className="child3"></div>
              <span className="approved-text">Issue</span>
            </div>
            <div className="number">04</div>
          </div>
        </div>
        <hr className="mainline" />
      </div>
      <div className=" flex2  shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <TabBar />
        </div>
      </div>
    </div>
  );
};

export default Section;

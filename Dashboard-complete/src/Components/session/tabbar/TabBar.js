import React from 'react';
import { useEffect } from 'react';
import './TabBar.css';
import { Tabs, Tab } from 'react-bootstrap';
import { FaUserCheck } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Tab, Tabs } from 'react-bootstrap';
import { ComunityLogo } from '../../../asserts/ComunityLogo';
import { HistoryLogo } from '../../../asserts/HistoryLogo';
function TabBar() {
  const [value, setValue] = React.useState('CustumerQueue');
  const [stateData, setStateData] = React.useState([]);

  const handleChange = (selectedTab) => {
    setValue(selectedTab);
  };

  const getUsers = async () => {
    console.log('hi');

    const response = await fetch('http://192.168.8.105:3000/student/findStudents' );
    const data = await response.json();
       
    setStateData(data);
  };
  console.log('state', stateData);

  useEffect(() => {
    getUsers();
    
  }, []);


  const onDetailHandler=()=>{
    alert("chall rha hn bhai")

  }

  return (
    <div className="tab-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12"></div>

          <Tabs
            onSelect={handleChange}
            defaultActiveKey="CustumerQueue"
            id="uncontrolled-tab-example"
            className="mb-3 pt-1"
          >
            <Tab
              eventKey="CustumerQueue"
              title={
                <div style={{ display: 'flex' }}>
                  <ComunityLogo isActive={value === 'CustumerQueue'} /> &nbsp;
                  Customer Queue
                </div>
              }
            >
              <div className="tab-item-wrapper">
                <div className="all-btns">
                  <button className="btn-val-1">
                    <span className="span-val1">
                      <i class="fas fa-video"></i>{' '}
                    </span>{' '}
                    Live ( 1 ){' '}
                  </button>
                  <button className="btn-val2">
                    {' '}
                    <span className="span-val2">
                      {' '}
                      <BiTime />
                    </span>
                    <span className="shedule">Scheduled (0)</span>
                  </button>
                  <button className="btn-val3">
                    <span className="span-val3">
                      <FaUserCheck />
                    </span>
                    <span className="assign">Assigned (0)</span>
                  </button>
                </div>

               
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"> #</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email.com</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      {stateData.map((item) => {
                  return (
                      <tbody>
                        
                        <tr>
                          <th scope="row">{item.ID}</th>
                          <td>{item.FirstName}</td>
                          <td>{item.LastName}</td>
                          <td>
                             {item.Email}
                          </td>
                          <td><button onClick={onDetailHandler} type="button" class="btn btn-primary btn-sm">Detail</button></td>
                        </tr>
                      </tbody>
                  );
                })}
                </table>

                {/* <table className="main-table">
                  <thead className="t-head">
                    <tr className="row-text">
                      <td>
                        <span className="t-text">Customer Name</span>
                      </td>
                      <td>
                        <span className="t-text">Apple ID</span>
                      </td> */}
                {/* <td>
                        <span className="t-text">Location</span>
                      </td>
                      <td>
                        <span className="t-text">IP Status</span>
                      </td>
                      <td>
                        <span className="t-text">Waiting Since</span>
                      </td> */}
                {/* </tr>
                  </thead>
                </table>
                <table className="body-text">
                  <tr>
                    <td>
                      <span className="td-body-text">Abilash Madhukumar</span>{' '}
                    </td>
                    <td>
                      <span className="td-body-text">8526705017-1</span>
                    </td>
                    <td> */}
                {/* <span className="td-body-text">India</span>
                    </td>
                    <td>
                      <span className="safe-text"> Safe</span> |proxy/VPN not
                      detectet India
                    </td>
                    <td>
                      <span className="td-body-text">00:44</span>
                    </td> */}
                {/* </tr>
                </table> */}
                <div className="last-div">
                  <button className="btn-val-last">
                    <span className="span-value-last">
                      <FaPhoneAlt />
                    </span>
                    Initiate call
                  </button>
                </div>
              </div>
            </Tab>

            <Tab
              eventKey="callhistory"
              title={
                <div style={{ display: 'flex' }}>
                  <HistoryLogo isActive={value === 'callhistory'} /> &nbsp; Call
                  history
                </div>
              }
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"> #</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email.com</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ali</td>
                    <td>+92 (306)-8601990</td>
                    <td>
                      <b>1:31</b>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Hamid</td>
                    <td>+92 (300)-8601120</td>
                    <td>
                      <b>00:11</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default TabBar;

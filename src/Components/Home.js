import Table from './Main/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTasks, faClock, faFile } from '@fortawesome/free-solid-svg-icons';
import {useLoaderData, useNavigation} from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import Context from './Context';
import {useContext, useState} from 'react';

function Home() {

  //const [ modal, setModal ] = useState(true);

  const [logedIn, setLogedInn, token, setToken, name, setName, email, setEmail] = useContext(Context);
     

  console.log(name);

  let tasksAmount = useLoaderData();

  return (

    <div>
        <p className="mt-5 welcome text-dark">Welcome
        <h4>{name}</h4>
        </p>


        
        <div className="row">
            <div className="col-md-6">
                <small className="j-tracker">Job Tracker</small>
                <div className="shadow tableCard">
                	{/* <FontAwesomeIcon icon={faTasks} className="icon" /> */}
                	

                    <div className="row">

                        <div className="col-md-3">
                            <b className="text-job">Total Jobs:</b>
                        </div>

                        <div className="col-md-2">
                        <h3>{useNavigation.state=="loading"?'Loading...':tasksAmount}</h3>
                        </div>
                    </div>


                <div className="row">


                    <div className="col-md-6">
                        <div className="row">

                            <div className="col-md-2">
                                <p>Open:</p>
                            </div>

                            <div className="col-md-2">
                                <p>{useNavigation.state=="loading"?'Loading...':tasksAmount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">

                            <div className="col-md-3">
                                <p>Closed:</p>
                            </div>

                            <div className="col-md-2">
                                <p>{useNavigation.state=="loading"?'Loading...':tasksAmount}</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <ProgressBar completed={60} maxCompleted={100} bgColor="#000"/>
                	
                	<FontAwesomeIcon icon="fa-solid fa-bars-progress" />
                </div>
            </div>

            <div className="col-md-6">
                <small className="j-tracker">Jobs that need attention</small>
                <div className="shadow tableCard">
                	<FontAwesomeIcon icon={faClock} className="icon" />
                	<p>Total deadlinse: <h3>10</h3></p>
                </div>
            </div>
        </div>


        <div className="row">
            <small className="j-tracker">Appointments</small>
            <div className="col-md-4">
                <div className="shadow-lg tableCard">
                	<FontAwesomeIcon icon={faFile} className="icon" />
                	<p>Total Appointments: <h3>10</h3></p>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Home;

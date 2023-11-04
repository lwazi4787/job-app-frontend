import {Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTasks, faClock, faFile } from '@fortawesome/free-solid-svg-icons';
import {useLoaderData, useNavigation, NavLink} from 'react-router-dom';
function Tasks() {


  return (

    <div>
        <h4 className="mt-5">All tasks</h4>

        <div className="row">

          <div className="col-md-6">
            <NavLink to="/tasks/all" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark u" style={{textDecoration: 'none'}}>All tasks: <h3>{useLoaderData().total}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/tasks/pending" className="my-link-card">
            <div className="tableCard">
              <FontAwesomeIcon icon={faTasks} className="icon" />
              <p className="text-dark">Pending tasks: <h3>{useLoaderData().pending}</h3></p>
              
              <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
            </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/tasks/active" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark">Active tasks: <h3>{useLoaderData().active}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/tasks/completed" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark">Completed tasks: <h3>{useLoaderData().completed}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

        </div>
    </div>
  );
}

export default Tasks;
import {Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTasks, faClock, faFile } from '@fortawesome/free-solid-svg-icons';
import {useLoaderData, useNavigation, NavLink} from 'react-router-dom';
function TasksCat() {


  return (

    <div>
        <h4 className="mt-5">All tasks</h4>

        <div className="row">

          <div className="col-md-6">
            <NavLink to="/categories/all" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark u" style={{textDecoration: 'none'}}>All tasks: <h3>{useLoaderData().total}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/categories/tech" className="my-link-card">
            <div className="tableCard">
              <FontAwesomeIcon icon={faTasks} className="icon" />
              <p className="text-dark">Tech tasks: <h3>{useLoaderData().tech}</h3></p>
              
              <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
            </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/categories/marketing" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark">Marketing tasks: <h3>{useLoaderData().marketing}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink to="/categories/admin" className="my-link-card">
              <div className="tableCard">
                <FontAwesomeIcon icon={faTasks} className="icon" />
                <p className="text-dark">Admin tasks: <h3>{useLoaderData().admin}</h3></p>
                
                <FontAwesomeIcon icon="fa-solid fa-bars-progress" />
              </div>
            </NavLink>
          </div>

        </div>
    </div>
  );
}

export default TasksCat;
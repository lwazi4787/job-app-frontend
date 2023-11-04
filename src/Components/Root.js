import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import Assign from './assignJob';
import ClientInfoSet from './Client'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';


const Root = () => {
  const [ modal, setModal ] = useState(true);
  const [ assign, setAssign ] = useState(true);
  const [ id, setId ] = useState();
  const [ clientFormData, setClientFormData ] = useState(true);

  const [ page, setPage ] = useState('home');

  const [tasks, setTasks] = useState();
  const [tasksBckUp, setTasksBckUp] = useState();

  const addFormHandle = async (formData) => {

          const res = await fetch('http://127.0.0.1:8000/api/tasks/add', {

              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          })

          if (res.ok) {
            //throw new Error('Network response was not ok');

            toast.success('Job created successfully', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          else
          {
            toast.error('Job failed to add please check network connection!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          }
          setModal(true);
      //console.log(formData);   
  }

  const addFormHandle2 = async (formData) => {
          setModal(true);
          const res = await fetch('http://127.0.0.1:8000/api/customers/add', {

              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          })

          if (res.ok) {
            //throw new Error('Network response was not ok');

            toast.success('Customer added successfully', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
          else
          {
            toast.error('Customer failed to add please check network connection!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          }
          
          setClientFormData(true);
      //console.log(formData);
      
  }

  const status = (category) => {
      setTasks(category !== 'all'?tasksBckUp.filter((task) => (task.Status === category)):tasksBckUp);
  }

  const category = (category) => {
      setTasks(category !== 'all'?tasksBckUp.filter((task) => (task.Category === category)):tasksBckUp);
  }

  const showExtn = () => {
      const extn = document.getElementById('extn');
      extn.style.display = "block";
  }
  const exitExtn = () => {
      const extn = document.getElementById('extn');
      extn.style.display = "none";
  }

  const customerAdd = () => {
      setClientFormData(false);
      setModal(true);
  }
  const customerAddClose = () => {
      setClientFormData(true);
      setModal(true);
  }

      
  return(

    <div className='row'>

      <div className="col-md-1">
        <Sidebar page={setPage} setTasks={status} setTasksCat={category}/>

      </div>

          <div className="col-md-11">
            <main className="main-sec">
                <Outlet context={[tasks, setTasks, tasksBckUp, setTasksBckUp, assign, setAssign, id, setId]} />
            </main>

            <Modal open={modal} close={()=>setModal(true)} submitForm={addFormHandle} />

            <Assign open={assign} close={()=>setAssign(true)} id={id}/>

            <ClientInfoSet open={clientFormData} close={customerAddClose} submitForm={addFormHandle2}/>
      
          </div>

          <div className="myContainer">
              <button className="btn btn-dark fixed-button" onClick={()=>setModal(false)} onMouseEnter={showExtn} onMouseLeave={exitExtn}>
                <p className="btn-extn shadow" id="extn" onClick={customerAdd}>Add Customer</p>
                <FontAwesomeIcon icon={faCalendarPlus} />  Create a Job
              </button>
          </div>



          
      </div>
    )
}

export default Root;
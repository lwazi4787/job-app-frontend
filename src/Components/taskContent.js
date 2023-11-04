import {useLoaderData, useNavigation, useOutletContext} from 'react-router-dom';
import Table from './Main/Table';
import {useState} from 'react';

function TaskContent() {

  const [date, setDate] = useState('');
  const tasksOriginal = useLoaderData();

  const [tasks, setTasks, tasksBckUp, setTasksBckUp, assign, setAssign, id, setId] = useOutletContext(useLoaderData());
  //const [tasksBckUp, setTasksBckUp] = useOutletContext(useLoaderData());

  //setTasks(useLoaderData());

  const tasksNav = useNavigation();

  //console.log(tasksOriginal);

  if(tasksNav.state === 'loading')
  {
  	return(
  		<h3>loading...</h3>
  	)
  }


  const subHandle = async (e) => {
      e.preventDefault();
      console.log({'date': date})
      const res = await fetch('http://127.0.0.1:8000/api/tasks', {

        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({'date': date}),

      })


      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json(); // Parse response JSON if expected

      // Handle the data received from the server
      
      setTasks(data);
      setTasksBckUp(data);
      console.log(tasksBckUp);

  }

  const test = async (e) => {
      e.preventDefault();

      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let password = document.getElementById('password');

      const res = await fetch('http://127.0.0.1:8000/api/register', {

          method: 'POST',
          headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({'name': name.value, 'email': email.value, 'password': password.value}),

        })


        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        console.log(data);
  }
  return (
    <div>
        <form method="post" onSubmit={subHandle}>
            <div className="form-group">
              <div className="row">

              <div className="col-md-5">
                  <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Deadline" name="ddln" value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>

              <div className="col-md-2">
                  <input type="submit" className="btn btn-dark" value="Update"/>
              </div>

              </div>
            </div>
        </form><br />
        <Table data = {tasksOriginal} setAssign={setAssign} setId={setId} />
        
    </div>
  );
}

export default TaskContent;
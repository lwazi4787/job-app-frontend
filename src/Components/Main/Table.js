import TableHeader from '../Tables/TableHeader';
import TableRow from '../Tables/TableRow';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({text, data, setAssign, setId, stuff, open}) => {

  const changeStatus = async (thisId) =>
  {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks/${thisId}/action`, {
        method: 'PUT',
        headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({'tech': 'none'}),
      })

      if (res.ok) {
        //throw new Error('Network response was not ok');

        toast.success('Task was updated', {
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
        toast.error('Action failed please check network connection!!!', {
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
  }

  const seachFocus = () =>
  {
    const seach = document.getElementById('seach');

    //seach.style.border = "1px solid green";
  }

  const showHideFilters = () =>
  {
    const filters = document.getElementById('filters');

    if(filters.style.display === "none")
      filters.style.display = "block";
    else
      filters.style.display = "none"
  }

	return (

		<div className="tableCard2">
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-3">
                <input type="text" placeholder="Search" id="seach" className="myFormInput" onFocus={seachFocus} />
            </div>
            <div className="col-md-9">
                <button className="btn-filter" onClick={showHideFilters}>Filter</button>
            </div>

          </div>
        </div>

        <div className="col-md-2">
            <button className="btn-filter">Export</button>
            {stuff?<button className="btn-filter mx-3" onClick={() => open(false)}>add</button>: ''}
        </div>
      </div><br />


      <div id="filters">
      <div className="row">
          <div className="col-md-4">
            <select placeholder="Job status" className="myFormInput">
                <option disabled selected hidden>Job status</option>
                <option>Pending</option>
                <option>Active</option>
                <option>Completed</option>
            </select>
          </div>

          <div className="col-md-4">
            <select placeholder="Job status" className="myFormInput">
                <option disabled selected hidden>Job types</option>
                <option>Pending</option>
                <option>Active</option>
                <option>Completed</option>
            </select>
          </div>

          <div className="col-md-4">

          </div>
      </div>
      </div>
			<table className="table table-striped mt-2">
                <TableHeader stuff={stuff} />

                <tbody>
                  {
                    data?.map((task) => (task.Status==="Active"?
                        <TableRow thisId={task.id} entry="1" title={task.Task_Name} category={task.Customer} status={task.Status} AssignedTo={task.Assigned_to} AssignedBy={task.Assigned_by} TaskNumber={task.Task_number} action={(task.Status==="Pending")?"Start" : "Complete"} changeStatus={changeStatus} activeClass={true} completeClass={false} setAssign={setAssign} setId={setId} updated_at={task.updated_at} created_at={task.created_at} />: (task.Status==="Completed" 
                          ? <TableRow thisId={task.id} entry="1" title={task.Task_Name} category={task.Customer} status={task.Status} AssignedTo={task.Assigned_to} AssignedBy={task.Assigned_by} TaskNumber={task.Task_number} action={(task.Status==="Pending")?"Start" : "Complete"} changeStatus={changeStatus} activeClass={false} completeClass={true} setAssign={setAssign} setId={setId} updated_at={task.updated_at} created_at={task.created_at} /> :
                          <TableRow thisId={task.id} entry="1" title={task.Task_Name} category={task.Customer} status={task.Status} AssignedTo={task.Assigned_to} AssignedBy={task.Assigned_by} TaskNumber={task.Task_number} action={(task.Status==="Pending")?"Start" : "Complete"} changeStatus={changeStatus} activeClass={false} completeClass={false} setAssign={setAssign} setId={setId} updated_at={task.updated_at} created_at={task.created_at} />)
: ''
                        
                      ))
                  }
                </tbody>
              </table>
		</div>

	);
}

export default Table
import {Link} from 'react-router-dom'
const TableRow = ({title, category, deadline, entry, action, status, changeStatus, thisId, activeClass, completeClass, setAssign, setId, updated_at, created_at, AssignedBy, AssignedTo, TaskNumber}) => {

	return (

		<>

            <tr className={`${activeClass ? 'taskActive' : (completeClass ? 'taskComplete' : '')} `}>
              <td scope="row">#</td>
              <td scope="row">{TaskNumber}</td>
              <td scope="row">{AssignedTo}</td>
              <td>{title}</td>
              <td scope="row">{created_at}</td>
              <td scope="row">{AssignedBy}</td>
              <td scope="row">{updated_at}</td>
              <td>{category}</td>
              <td><button className="badge badge-danger text-dark">{status} </button></td>
              <td><button className="btn btn-success"  disabled={completeClass? true : false}  onClick={() => {setAssign(false); setId(thisId); }  }>{action} </button></td>
            </tr>
      
		</>

	);
}

export default TableRow
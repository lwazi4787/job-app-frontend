import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';

const Assign = ({open, close, id}) =>
{	
	const [stuff, setStuff] = useState();
	const [chosen, setChosen] = useState();

	const handleSub = async (e) => {
		e.preventDefault();
		
		const res = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/action`, {
        method: 'PUT',
        headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({'tech': chosen}),
      })

      if (res.ok) {
        //throw new Error('Network response was not ok');

        toast.success('Job was Assigned to tech', {
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
        toast.error('Job failed to assign... please check network connection!!!', {
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

      close();
	}

	const getStuff = async() => 
	{
		const res = await fetch('http://127.0.0.1:8000/api/stuff');
		const data = await res.json();

		//console.log(data);
		setStuff(data);
	}

	
	if(!open)
	{
		return(

			<div className="myOverlay">
				<div className="myModal">
					<strong onClick={close}>X</strong><br /><br />
					<form method="post" onSubmit={handleSub} >
					  <select class="form-select" aria-label="Default select example" onFocus={getStuff} onChange={(e)=>setChosen(e.target.value)}>
						  <option selected hidden>Assign employee</option>
						  {
						    	stuff?.map((member) => <option value={member.Name}>{member.Name}</option>)
						  }
					  </select>
					  <br />


					  
					  
					  <input type="submit" className="btn btn-dark" value="Submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default Assign
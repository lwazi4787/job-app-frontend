import {useState, useContext} from 'react';
import Context from './Context';


const Modal = ({open, close, submitForm}) => {

	const [logedIn, setLogedInn, token, setToken, name, setName, email, setEmail] = useContext(Context);

	const [thisName, setThisName] = useState('');
	const [phone, setPhone] = useState('');
	const [thisEmail, setThisEmail] = useState('');
	const [location, setLocation] = useState('');
	const [job, setJob] = useState('');
	const [customers, setCustomers] = useState();

	const handleSub = (e) => {
		e.preventDefault();
		
		submitForm({'name': thisName, 'job': job, 'phone': phone, 'email': thisEmail, 'location': location, 'admin': email});

		setPhone('');
		setThisEmail('');
		setLocation('');
		setJob('');
	}

	const getCustomers = async() => 
	{
		const res = await fetch('http://127.0.0.1:8000/api/customers');
		const data = await res.json();

		//console.log(data);
		setCustomers(data);
	}

	const autoFillForm = (e) =>
	{
		customers.forEach((customer) => {
			if(e == customer.Name)
			{
				setThisName(customer.Name);
				setPhone(customer.Phone_Number);
				setThisEmail(customer.Email);
				setLocation(customer.Address);
			}
		});
	}

	if(!open){
		return (

			<div className="myOverlay">
				<div className="myModal">
					<strong onClick={close}>X</strong><br /><br />
					<form method="post" onSubmit={handleSub} >
					  <div className="form-group">
						  <select className="form-control" id="inlineFormCustomSelectPref" name="cat"  onFocus={getCustomers} onChange={(e) => autoFillForm(e.target.value)}>
						    <option>Choose Customer</option>
						    {
						    	customers?.map((customer) => <option>{customer.Name}</option>)
						    }
						  </select>
					  </div><br />
					  

					  <label for="exampleFormControlTextarea1">Phone no.:</label>
					  <div className="form-group">
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone no." name="task" value={phone} />
					  </div><br />

					  <label for="exampleFormControlTextarea1">Email</label>
					  <div className="form-group">
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="task" value={thisEmail} />
					  </div><br />


					  <div class="form-group">
					    <label for="exampleFormControlTextarea1">Location</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" name="task" value={location} />
					  </div>
					  <br />


					  <div class="form-group">
					    <label for="exampleFormControlTextarea1">Task</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Task" name="task" value={job} onChange={(e) => setJob(e.target.value)} />
					  </div>
					  <br />


					  
					  
					  <input type="submit" className="btn btn-dark" value="Submit"/>
					</form>
				</div>
			</div>

		);
	}
}

export default Modal
import {useState} from 'react';


const AddStuff = ({open, close, submitForm}) => {

	const [thisName, setThisName] = useState('');
	const [last, setLast] = useState('');
	const [phone, setPhone] = useState('');
	const [thisEmail, setThisEmail] = useState('');
	const [location, setLocation] = useState('');

	const handleSub = (e) => {
		e.preventDefault();
		
		submitForm({'name': thisName, 'last': last, 'phone': phone, 'email': thisEmail});

		setThisName('');
		setLast('');
		setPhone('');
		setThisEmail('');
		setLocation('');
	}
	if(!open){
		return (

			<div className="myOverlay">
				<div className="myModal">
					<strong onClick={close}>X</strong><br /><br />
					<form method="post" onSubmit={handleSub} >

					  <div className="form-group">
					  	<label for="exampleFormControlTextarea1">First name</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" name="task" value={thisName} onChange={(e) =>setThisName(e.target.value)}/>
					    
					  </div><br />
	
				  
					  <div className="form-group">
					  	<label for="exampleFormControlTextarea1">Last name</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Lastname" name="task" value={last} onChange={(e) =>setLast(e.target.value)}/>
					    
					  </div>
						
					  <br />

					  
					  <div className="form-group">
					  	<label for="exampleFormControlTextarea1">Phone</label>
					    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone No." name="task" value={phone} onChange={(e) =>setPhone(e.target.value)}/>
					  </div><br />
	
					  <div className="form-group">
					  	<label for="exampleFormControlTextarea1">Email</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name="task" value={thisEmail} onChange={(e) =>setThisEmail(e.target.value)}/>
					  </div><br />
			
					  

					  <input type="submit" className="btn btn-dark" value="Submit"/>
					</form>
				</div>
			</div>

		);
	}
}

export default AddStuff
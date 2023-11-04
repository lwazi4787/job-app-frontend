const Register = () => {
	const handleSub = (e) => {
		e.preventDefault();
	}
	return(
		<>
			<div className="authForms">
				<form method="post" onSubmit={handleSub} >
				  <label for="exampleFormControlTextarea1">Name</label>
				  <div className="form-group">
				    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="task" />
				  </div><br />

				  <label for="exampleFormControlTextarea1">Email</label>
				  <div className="form-group">
				    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="task" />
				  </div><br />


				  <div class="form-group">
				    <label for="exampleFormControlTextarea1">Password</label>
				    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" name="task" />
				  </div>
				  <br />


				  
				  
				  <input type="submit" className="btn btn-dark" value="Submit"/>
				</form>
			</div>
		</>
	)
}

export default Register;
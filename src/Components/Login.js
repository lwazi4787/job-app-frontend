import {NavLink, Link} from 'react-router-dom';
import Context from './Context';
import {useContext, useState} from 'react';
const Login = () => {

	const [logedIn, setLogedIn, token, setToken, name, setName, email, setEmail] = useContext(Context);

	const [sub, setSub] = useState(false);

	const handleSub = async (e) => {
		e.preventDefault();
      	let thisEmail = document.getElementById('emailField');
      	let password = document.getElementById('passField');

		const res = await fetch('http://127.0.0.1:8000/api/login', {

          method: 'POST',
          headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({'email': thisEmail.value, 'password': password.value}),

        });


        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        if(data.message === "bad creds")
        {
        	const incorrect = document.getElementById('incorrect');
        	incorrect.textContent = 'incorrect email or password';
			incorrect.style.color = 'red';
        }
        else{
        	setToken(data.token);
        	setName(data.user['name']);
        	setEmail(data.user['email']);
        	localStorage.setItem("logedIn", "true");
			setLogedIn(true);
        }

        //console.log(data);
        //console.log(data.user['email']);
        //console.log(data.token);

        
	}

	const varify = (e) => {

		if(e.target.value === '')
		{
			//console.log(e.target.value);
			let emailField = document.getElementById('emailRequired');
			emailField.textContent = 'email is a required field';
			emailField.style.color = 'red';
		}
	}

	const varify2 = (e) => {

		if(e.target.value === '')
		{
			let passwordField = document.getElementById('passwordRequired');
			passwordField.textContent = 'password is a required field';
			passwordField.style.color = 'red';
		}
	}

	return(
		<>	
			<div className="authForms">
				<small id="incorrect"></small>
				<form method="post" onSubmit={handleSub} >

				  <label for="exampleFormControlTextarea1">Email</label>
				  <div className="form-group">
				    <input type="email" className="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Email" name="task" onBlur={varify} />
				    <small id="emailRequired"></small>
				  </div><br />


				  <div class="form-group">
				    <label for="exampleFormControlTextarea1">Password</label>
				    <input type="password" className="form-control" id="passField" aria-describedby="emailHelp" placeholder="Password" name="task" onBlur={varify2} />
				    <small id="passwordRequired"></small>
				  </div><br />


				  
				  
				  <input type="submit" className="btn btn-dark" value="Sign in" disabled={sub}/>
				</form>
				<small>New user? <b>Create an Account</b></small>
			</div>
		</>
	);
}

export default Login;
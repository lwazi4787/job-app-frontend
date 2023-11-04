import {NavLink, Link} from 'react-router-dom';
const SideLinks = ({page, setTasks, setTasksCat}) => {


	const perentLink = (e, u) => {

		const target = document.getElementById('target');
		const target2 = document.getElementById('target2');
		setTimeout(() => {
			if(target.classList.contains('tasksSubLink'))
			{
				if(e)
				{
					target.classList.remove('tasksSubLink');
					target.style.marginTop = '1em';
				}
			}
			else
			{
				target.classList.add('tasksSubLink');
				target.classList.add('tasksSubLink');
				target.style.marginTop = '0px';
			}


		}, 300) 
	target2.classList.add('tasksSubLink');
	target2.style.marginTop = '0px';
	}

	/*** Needs to be Updated ***/
	const perentLink2 = (e, u) => {

		const target = document.getElementById('target');
		
		const target2 = document.getElementById('target2');
		setTimeout(() => {
			if(target2.classList.contains('tasksSubLink'))
			{
				if(u)
				{
					target2.classList.remove('tasksSubLink');
					target2.style.marginTop = '1em';
				}
			}
			else
			{
				//target.classList.add('tasksSubLink');
				target2.classList.add('tasksSubLink');
				target2.style.marginTop = '0px';
			}


		}, 300) 
	target.classList.add('tasksSubLink');
	target.style.marginTop = '0px';
	}
	return (

		<div>
			<ul className="nav nav-pills flex-column mb-auto">
			  <li className="nav-item">
	            <NavLink to="/" className="nav-link text-white" onClick={() =>perentLink(false, false)}>
	              Dashboard
	            </NavLink>
	          </li>

	          <li className="nav-item">
	            <NavLink to="/tasks" className="nav-link text-white" >
	              Jobs
	            </NavLink>
	            		<div className="tasksSubLink tasksSubLinkStyles" id="target">
				            <li>
				            	<NavLink to="/tasks/all" className="my-nav-link text-dark" onClick={() => setTasks('all')}>
					              All Tasks
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/tasks/pending" className="my-nav-link text-dark" onClick={() => setTasks('Pending')}>
					              Pending Tasks
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/tasks/active" className="my-nav-link text-dark" onClick={() => setTasks('Active')}>
					              Active Tasks
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/tasks/completed" className="my-nav-link text-dark" onClick={() => setTasks('Completed')}>
					              Completed Tasks
					            </NavLink>
				            </li>
				 		</div>
	          </li>

	          <li className="nav-item" onClick={() => perentLink(false, false)}>
	            <NavLink to="/customers" className="nav-link text-white">
	              Customers
	            </NavLink>
	          </li>


	          <li className="nav-item">
	            <NavLink to="/stuff" className="nav-link text-white">
	              Stuff
	            </NavLink>
	            		<div className="tasksSubLink tasksSubLinkStyles" id="target2">
				            <li>
				            	<NavLink to="/categories/all" className="my-nav-link text-dark" onClick={() => setTasksCat('all')}>
					              All Categories
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/categories/tech" className="my-nav-link text-dark" onClick={() => setTasksCat('Tech')}>
					              Tech
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/categories/marketing" className="my-nav-link text-dark" onClick={() => setTasksCat('Marketing')}>
					              Marketing
					            </NavLink>
				            </li>
				            <li>
				            	<NavLink to="/categories/admin" className="my-nav-link text-dark" onClick={() => setTasksCat('Admin')}>
					              Admin
					            </NavLink>
				            </li>
				 		</div>
	          </li>

	          <li className="nav-item" onClick={() =>perentLink(false, false)}>
	            <NavLink to="/deadlines" className="nav-link text-white">
	              Deadlines
	            </NavLink>
	          </li>
	          <li className="nav-item" onClick={() => perentLink(false, false)}>
	            <NavLink to="/invoices" className="nav-link text-white">
	              invoices
	            </NavLink>
	          </li>
	          
	        </ul>
	        <hr />
        </div>

	)

}

export default SideLinks;
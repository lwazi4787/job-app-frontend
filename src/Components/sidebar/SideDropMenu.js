const SideDropMenu = () => {

	return(

		<div>
			<div className="dropdown fixed-bottom mySideDropDown">
	          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" >
	            {/*<img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />*/}
	            <strong>Lwazi</strong>
	          </a>
	          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" >
	            <li><a className="dropdown-item" href="#">New project...</a></li>
	            <li><a className="dropdown-item" href="#">Settings</a></li>
	            <li><a className="dropdown-item" href="#">Profile</a></li>
	            <li><hr className="dropdown-divider" /></li>
	            <li><a className="dropdown-item" href="#">Sign out</a></li>
	          </ul>
	        </div>
		</div>

	)

}

export default SideDropMenu;
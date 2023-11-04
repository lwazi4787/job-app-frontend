import SideHeader from './sidebar/SideHeader';
import SideLinks from './sidebar/SideLinks';
import SideDropMenu from './sidebar/SideDropMenu';

const Sidebar = ({page, setTasks, setTasksCat}) =>
{
	return(

	<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">

        <SideHeader />

        <SideLinks page={page} setTasks={setTasks} setTasksCat={setTasksCat} />
        
        <SideDropMenu />

    </div>

	)
}

export default Sidebar
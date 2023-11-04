import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider} from 'react-router-dom';
import { useState, createContext } from 'react';
import Sidebar from './Components/Sidebar';
import Cards from './Components/Main/Cards';
import Table from './Components/Main/Table';
import Modal from './Components/Modal';
import Deadlines from './Components/Deadlines';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import TasksCat from './Components/TasksCat';
import TaskContent from './Components/taskContent';
import Register from './Components/Register';
import Login from './Components/Login';
import Inoives from './Components/Inoives';
import Stuff from './Components/Stuff';
import Context from './Components/Context';
import Root from './Components/Root';
import DataLoada from './DataLoada.js';
import DataLoadaInt from './DataLoadaInt.js';
import pandingDataLoada from './Components/data/pending.js';
import { ToastContainer } from 'react-toastify';


function App() {

  //localStorage.setItem("logedIn", "false");
  const [logedIn, setLogedIn] = useState(JSON.parse(localStorage.getItem("logedIn")));
  const [token, setToken] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  //const Context = createContext();
  const router = createBrowserRouter(
      
      createRoutesFromElements(
          <Route path="/" element={<Root />}>
              <Route index element={<Home />} loader={DataLoadaInt} />
              <Route path="/deadlines" element={<Deadlines />} />
              <Route path="/tasks" element={<TaskContent Title="All Tasks" />} loader={DataLoada} />
                <Route path="/tasks/all" element={<TaskContent Title="All Tasks" />} loader={DataLoada} />
                <Route path="/tasks/pending" element={<TaskContent Title="All Tasks" />} loader={()=>DataLoada('Pending')} />
                <Route path="/tasks/active" element={<TaskContent Title="All Tasks" />} loader={()=>DataLoada('Active')} />
                <Route path="/tasks/completed" element={<TaskContent Title="All Tasks" />} loader={()=>DataLoada('Completed')} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            
              

              <Route path="/categories" element={<TasksCat />} loader={()=>DataLoadaInt('cat')} />
                <Route path="/categories/all" element={<TaskContent />} loader={DataLoada} />
                <Route path="/categories/tech" element={<TaskContent />} loader={()=>DataLoada('Tech')} />
                <Route path="/categories/marketing" element={<TaskContent />} loader={()=>DataLoada('Marketing')} />
                <Route path="/categories/admin" element={<TaskContent />} loader={()=>DataLoada('Admin')} />
              
              
              <Route path="/invoices" element={<Inoives />} />
              <Route path="/customers" element={<Inoives />} />
              <Route path="/stuff" element={<Stuff />} />
          </Route>
      )

  )

  return (
    <Context.Provider value={[logedIn, setLogedIn, token, setToken, name, setName, email, setEmail]}>
      {logedIn?
        <>
          <RouterProvider router={router} />
          <ToastContainer />
        </>
        :
        <>
          <Login />
        </>
      }
    </Context.Provider>
  );
}

export default App;




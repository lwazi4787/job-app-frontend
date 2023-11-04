import Table from './Main/Table';
import AddStuff from './addStuff';
import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Stuff = () =>
{
	const [ modal, setModal ] = useState(true);

	const addFormHandle = async (formData) => {

          const res = await fetch('http://127.0.0.1:8000/api/stuff/add', {

              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          })

          if (res.ok) {
            //throw new Error('Network response was not ok');

            toast.success('Stuff member added successfully', {
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
            toast.error('Stuff member failed to add please check network connection!!!', {
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
          setModal(true);
      //console.log(formData);   
  }

	return (

    <div>
        <h4 className="mt-5">Stuff</h4>
        <Table stuff={true} open={setModal} />

        <AddStuff open={modal} close={()=>setModal(true)} submitForm={addFormHandle} />
    </div>
  );
}

export default Stuff
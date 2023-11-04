const pandingDataLoada = async () => {

	const res = await fetch(`http://127.0.0.1:8000/api/tasks/status/Pending`);
	const data = await res.json();
	

	return data;

}

export default pandingDataLoada;
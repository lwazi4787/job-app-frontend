const DataLoada = async(categoty) => {
	let data, res;

	res = await fetch('http://127.0.0.1:8000/api/tasks/');
	data = await res.json();

	console.log(data);
	
	return data;
}

export default DataLoada;
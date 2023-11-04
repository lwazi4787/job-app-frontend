const DataLoaderInt = async (cat) =>
{
	let data;
	if(cat === "sub")
	{
		const res1 = await fetch('http://127.0.0.1:8000/api/tasks/total');
		const data1 = await res1.json();

		const res2 = await fetch('http://127.0.0.1:8000/api/tasks/total/status/Pending');
		const data2 = await res2.json();

		const res3 = await fetch('http://127.0.0.1:8000/api/tasks/total/status/Active');
		const data3 = await res3.json();

		const res4 = await fetch('http://127.0.0.1:8000/api/tasks/total/status/Completed');
		const data4 = await res4.json();

		data = {'total': data1, 'pending': data2, 'active': data3, 'completed': data4} 
	}
	else if(cat === "cat")
	{
		const res1 = await fetch('http://127.0.0.1:8000/api/tasks/total');
		const data1 = await res1.json();

		const res2 = await fetch('http://127.0.0.1:8000/api/tasks/total/category/Tech');
		const data2 = await res2.json();

		const res3 = await fetch('http://127.0.0.1:8000/api/tasks/total/category/Marketing');
		const data3 = await res3.json();

		const res4 = await fetch('http://127.0.0.1:8000/api/tasks/total/category/Admin');
		const data4 = await res4.json();

		data = {'total': data1, 'tech': data2, 'marketing': data3, 'admin': data4} 
	}
	else
	{
		const res = await fetch('http://127.0.0.1:8000/api/tasks/total');
		data = await res.json();
	}
	

	return data;
}

export default DataLoaderInt 
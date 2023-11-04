const TableHeader = ({stuff}) => {

	return (

		<>
      <thead>
        {
          stuff?<tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>

        :

        <tr>
          <th scope="col">#</th>
          <th scope="col">Number</th>
          <th scope="col">Assigned to</th>
          <th scope="col">Jobe</th>
          <th scope="col">Start</th>
          <th scope="col">Updated by</th>
          <th scope="col">Updated date</th>
          <th scope="col">Customer</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>

      }
      </thead>
		</>

	);
}

export default TableHeader
const Cards = ({text, bgclass}) => {

	return (

		<div>
			<div className={`card text-dark ${bgclass} mb-3 border-left`} style={{maxWidth: "18rem"}}>
              <div className="card-body">
                <h3 className="display-5 text-center py-2">{text}</h3>
                
              </div>
            </div>
		</div>

	);
}

export default Cards
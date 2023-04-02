import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../../Loading/Loading';

import style from '../pets.module.scss';

function AllPets() {
	const [Pets, setPets] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:9999/api/cats')
			.then((r) => {
				console.log(r.data);
				setPets(r.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<ul className={style.AllPetsList}>
				{!!Pets &&
					Pets.map((pet, index) => {
						<li key={index}>
							<span>{pet.name}</span>
						</li>;
					})}
			</ul>
			{!Pets && <Loading />}
		</>
	);
}

export default AllPets;

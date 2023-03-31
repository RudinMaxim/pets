import axios from 'axios';
import { useRef } from 'react';

function AddPets(props) {
	const inputDate = useRef(null);
	const AddPets = () => {
		const name = inputDate.current.value;

		const Pets = {
			Name: name,
			IsStrip: true,
			Color: '',
		};

		axios
			.post('http://localhost:9999/api/cat/add', JSON.stringify(Pets), {
				headers: {
					'Content-Type': 'application/json',
				},
			}) 
			.then(() => {
				props.toLinke();
			});
	};

	return (
		<div>
			<fieldset>
				<legend>Добавить</legend>
				<label htmlFor='input-add' id='label-add' onClick={() => AddPets()}>
					+Add
				</label>
				<input
					type='text'
					id='input-add'
					aria-labelledby='label-add'
					ref={inputDate}
				/>
			</fieldset>
		</div>
	);
}

export default AddPets;

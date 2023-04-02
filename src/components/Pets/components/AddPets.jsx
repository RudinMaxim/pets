import axios from 'axios';
import { useRef } from 'react';
import style from '../pets.module.scss';
import add from '../../../assets/add.svg';

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
		<div className={style.AddPets}>
			<input
				type='text'
				id='input-add'
				aria-labelledby='label-add'
				ref={inputDate}
				placeholder='Введи имя котику'
			/>
			<label htmlFor='input-add' id='label-add' onClick={() => AddPets()}>
				<img src={add} alt='add' />
			</label>
		</div>
	);
}

export default AddPets;

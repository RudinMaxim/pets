import { useState } from 'react';
import Allpets from '../Pets/components/Allpets';
import AddCats from '../Pets/components/AddCats';
import style from './App.modules.scss';

function App() {
	const [menuLink, setmenuLink] = useState('add');

	return (
		<div className={style.App}>
			{menuLink === 'list' && <AddCats />}
			{menuLink === 'add' && <Allpets />}
		</div>
	);
}

export default App;

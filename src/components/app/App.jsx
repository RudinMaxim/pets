import { useState } from 'react';
import Navigator from '../Navigeiton/Navigeiton';
import AllPets from '../Pets/components/AllPets';
import AddPets from '../Pets/components/AddPets';
import style from './app.module.scss';

function App() {
	const [menuLink, setmenuLink] = useState('listPets');

	return (
		<div className={style.wrapper}>
			<div className={style.App}>
				<nav className={style.Navigeiton}>
					<ul className={style.Navigeiton__list}>
						<li>
							<button
								onClick={() => setmenuLink('listPets')}
								style={{ opacity: menuLink === 'listPets' ? 1 : 0.5 }}>
								<span>Питомци</span>
							</button>
						</li>

						<li>
							<button
								onClick={() => setmenuLink('add')}
								style={{ opacity: menuLink === 'add' ? 1 : 0.5 }}>
								<span>Добавить</span>
							</button>
						</li>
					</ul>
				</nav>
				<section>
					{menuLink === 'listPets' && <AllPets />}
					{menuLink === 'add' && (
						<AddPets toLinke={() => setmenuLink('listPets')} />
					)}
				</section>
			</div>
		</div>
	);
}

export default App;

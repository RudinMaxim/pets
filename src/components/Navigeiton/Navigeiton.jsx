import style from './navigeiton.module.scss'

function Navigeiton(menuLink, setmenuLink) {
	return (
		<nav className={style.Navigeiton}>
			<ul className={style.Navigeiton__list}>
				<li>
					<button
						onClick={() => setmenuLink('listPets')}
						style={{ opacity: menuLink === 'listPets' ? 1 : 0.5 }}>
						Все питомци
					</button>
				</li>

				<li>
					<button
						onClick={() => setmenuLink('add')}
						style={{ opacity: menuLink === 'add' ? 1 : 0.5 }}>
						Добавить питомцев
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigeiton;

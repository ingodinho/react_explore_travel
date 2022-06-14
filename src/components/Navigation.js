import logo from '../images/logo.png';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<nav className='navigation'>
			<div className='navigation__logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='navigation__right'>
				<ul className='nav__list'>
					<li>
						<NavLink to={'/'} className={({isActive}) => isActive ? 'nav__link__active nav__link' : 'nav__link'}>Home</NavLink>
					</li>
					<li>
						<NavLink to={'/destination'} className={({isActive}) => isActive ? 'nav__link__active nav__link' : 'nav__link'}>Destinations</NavLink>
					</li>
					<li>
						<NavLink to={'/guides'} className={({isActive}) => isActive ? 'nav__link__active nav__link' : 'nav__link'}>About</NavLink>
					</li>
					<li>
						<NavLink to={'/partner'} className={({isActive}) => isActive ? 'nav__link__active nav__link' : 'nav__link'}>Partner</NavLink>
					</li>
				</ul>
				<div className='btns'>
					<button className='btn__login'>Login</button>
					<button className='btn__register'>Register</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

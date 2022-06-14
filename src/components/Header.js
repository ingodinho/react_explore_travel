import Navigation from './Navigation';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Navigation/>
            <div className='header'>
                <article className="header__article">
                    <div className="headline">
                        <h1>Explore and</h1>
                        <h1>Travel</h1>
                    </div>
                    <p>Holiday finder</p>
                </article>
                <form action="" className='header__form'>
                    <div className="header__form__grid">
                        <select name="Location">
                            <option value="Location">Location</option>
                        </select>
                        <select name="Activity">
                            <option value="Activity">Activity</option>
                        </select>
                        <select name="Grade">
                            <option value="Grade">Grade</option>
                        </select>
                        <select name="Date">
                            <option value="Date">Date</option>
                        </select>
                    </div>
                    <button type='submit'>Explore</button>
                </form>
            </div>
        </header>
    )
}

export default Header;
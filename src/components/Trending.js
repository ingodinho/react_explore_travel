import './Trending.scss';
import trendingData from './trendingData';
import TrendingItem from './TrendingItem';

const Trending = () => {
    return (
        <section className="trending">
            <div className='trending__headline'>
				<h3>Trending Stories</h3>
				<a href='/'>View All</a>
			</div>
            <div className="trending__grid">
                {trendingData.map(el => 
                    <TrendingItem 
                        key={el.id}
                        img={el.img}
                        title={el.title}
                        desc={el.desc}
                    />
                    )}
            </div>
        </section>
    )
}

export default Trending;
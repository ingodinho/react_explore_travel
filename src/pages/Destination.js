import './Destination.scss';
import DestinationItem from '../components/DestinationItem';
import destinationData from '../components/destinationData';

const Destination = () => {
	return (
		<section className='destination'>
			<div className='destination__headline'>
				<h3>Featured Destinations</h3>
				<a href='/'>View All</a>
			</div>
            <div className="destination__grid">
                {destinationData.map(el => 
                    <DestinationItem 
                        key={el.id}
                        img={el.img}
                        country={el.country}
                        city={el.city}
                    />
                    )}
            </div>
		</section>
	);
};

export default Destination;

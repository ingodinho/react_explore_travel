import founder from '../images/image6.png';
import './Testimonial.scss';

const Testimonial = () => {
	return (
		<section className='testimonial'>
			<h3>Testimonials</h3>
			<div className='testimonials__grid'>
				<article className='testimonials__article'>
					<div className='testimonials__article__stars'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/></svg>
					</div>
					<p>
						"Quisque in lacus a urna fermentum euismod. Integer mi
						nibh, dapibus ac scelerisque eu, facilisis quis purus.
						Morbi blandit sit amet turpis nec"
					</p>
					<div>
						<h5>Edward Newgate</h5>
						<span>Founder Circle</span>
					</div>
				</article>
				<figure className='testimonials__figure'>
					<img src={founder} alt='Edward Newgate' />
					<div className='testimonials__btns'>
						<button className='testimonials__btn--inactive'>&lt;</button>
						<button className='testimonials__btn--active'>&gt;</button>
					</div>
				</figure>
			</div>
		</section>
	);
};

export default Testimonial;

const TrendingItem = (props) => {
    return (
        <figure className="trending-item">
        <img src={props.img} alt="city" />
        <div className="trending-item__capture">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <a href="/">Read more</a>
        </div>
    </figure>
    )
}

export default TrendingItem;
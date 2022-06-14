const DestinationItem = (props) => {

    return (
        <figure className="destination-item">
            <img src={props.img} alt="city" />
            <div className="destination-item__capture">
                <h6>{props.city}</h6>
                <span>{props.country}</span>
            </div>
        </figure>
    )
}

export default DestinationItem;
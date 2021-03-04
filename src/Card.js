const Card = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <img src={props.src} alt="My Pic" style={{ width: "100%" }} />
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.name}</h3>
                    <a href={props.link} target="_blank">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
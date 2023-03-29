const Good = function(props) {
    return(
        <div className="good">
            <img src={props.img}/>
            <b>{props.name}</b>
            <p>{props.price}</p>
        </div>
    )
}

export default Good; 
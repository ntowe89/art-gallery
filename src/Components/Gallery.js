
function Gallery(props) {
    return (
        <div style={{'width': '100%'}}>
            <img style={{'width': '100vh', 'display': 'block', 'margin': 'auto'}} src={props.objectImg} alt={props.title}></img>
            <p style={{'textAlign': 'center'}}>{props.artist}</p>
        </div>
    )
}

export default Gallery
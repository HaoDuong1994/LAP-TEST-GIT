function ImageItem (pros){
    console.log(pros)
    const {className, src, onClick} = pros
    return (
        <img className={className} src={src} onClick={onClick}></img>
    )
}
export default ImageItem
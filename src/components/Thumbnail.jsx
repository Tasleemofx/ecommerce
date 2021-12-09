import "../css/Thumbnail.css"
const Thumbnail = ({src, className, onClick}) => {
    return ( <img src={src}
        alt="thumbnail"
        className={className}
        onClick={onClick}
        / > );
}
 
export default Thumbnail;
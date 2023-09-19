import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Btn = (props) => {
    const btn_icon = props.btn_icon;

    return ( <>
        <button className="btn">
            <FontAwesomeIcon icon="fa-solid fa-play" />
        </button>
    </> );
}
 
export default Btn;
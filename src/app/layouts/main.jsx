import Clock from "../components/clock";
import Btn from "../components/btn";

const Main = () => {
    return ( 
        <>
            <div className="clock-section">
                <Clock></Clock>
                <Btn btn_icon="fa-solid fa-play"></Btn>
                <Btn></Btn>
            </div>
        </> 
    );
}
 
export default Main;
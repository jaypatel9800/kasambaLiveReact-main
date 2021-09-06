import { rtc } from "./rtc";
import { useHistory } from "react-router-dom";

const Audiance = () => {
    const history = useHistory();
    const LeaveAudience = () => {
        history.replace("/Final");
        rtc.client.leave(() => {
            console.log('audiance leaves the channel')
        }, (err) => {
            console.log('audience failed leave!!', err)
        })
    }
    return(
        <div>
            <div id="Join-as-a-guest" style={{ width: "400px", height: "400px" }} />
            <button onClick={LeaveAudience}>Leave as a Guest</button>
        </div>
    )
}


export default Audiance
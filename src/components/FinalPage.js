import {useHistory} from "react-router-dom";

const LastMassage = () => {
    const history = useHistory();
    return(
        <div>
        <h1>Thanks for Joined</h1>
        <button onClick={() => history.replace("/")}>Participate Again</button>
        </div>
    )
}

export default LastMassage
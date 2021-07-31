import Browser from "../browser/Browser";
import Navigator from "../navigator/Navigator";

function Main(){
    return (
        <div className="main">
            <div className="main-core">
                <Navigator/>
                <Browser/>
            </div>
        </div>
    );
}

export default Main;
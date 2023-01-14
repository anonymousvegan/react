import ArrowComponent from "./components/Arrow";
import PolylineComponent from "./components/Polyline";
import Rectangle from "./components/Rectangle";
import style from "./style.css";

function App() {
    return (
        <>
            <ArrowComponent
                direction="left"
                length={100}
                headLength={25}
                headWidth={10}
                id="arrow1"
            />
            <Rectangle
                header="Multiplican"
                small="Shift left"
                value="000 000 111 111"
                id="mltiplican"
            />
        </>
    );
}

export default App;

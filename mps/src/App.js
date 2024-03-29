import ArrowComponent from "./components/Arrow";
import PolylineComponent from "./components/Polyline";
import Rectangle from "./components/Rectangle";
import style from "./style.css";
import { useState, useEffect } from "react";

function App() {
    const [MultiplierValue, setMultiplierValue] = useState("001 010");
    const [ProductValue, setProductValue] = useState("000 000 000 000");
    const [MultiplicanValue, setMultiplicanValue] = useState("000 000 110 010");
    const [first, setFirst] = useState(false);
    const [alu1, setAlu1] = useState("");
    const [alu2, setAlu2] = useState("");
    const [start, setStart] = useState(false);
    const [zadnjaCifra, setZadnjaCifra] = useState("");
    useEffect(() => {
        setZadnjaCifra(MultiplierValue[MultiplierValue.length - 1]);

        let startTimeOut = setTimeout(() => {
            setStart(true);
        }, 3000);
        return () => {
            clearTimeout(startTimeOut);
        };
    }, []);

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
                header="Multiplicand"
                small="Shift left"
                value={MultiplicanValue}
                id="mltiplican"
                redFirst={start}
                blue={start}
            />
            <PolylineComponent alu1={alu1} alu2={alu2} />
            <Rectangle
                header="Product"
                small="White"
                value={ProductValue}
                id="product"
            />
            <Rectangle
                header="Multiplier"
                small="Shift right"
                value={MultiplierValue}
                id="Multiplier"
                redlast={start}
            />
            <Rectangle header="Control test" id="control" />
            <ArrowComponent
                direction="down"
                length={70}
                headLength={25}
                headWidth={10}
                id="arrow2"
            />
            <ArrowComponent
                direction="down"
                length={75}
                headLength={25}
                headWidth={10}
                id="arrow3"
            />
            <ArrowComponent
                direction="right"
                length={100}
                headLength={25}
                headWidth={10}
                id="arrow4"
            />
            <ArrowComponent
                direction="left"
                length={260}
                headLength={25}
                headWidth={10}
                id="arrow5"
            />
            <ArrowComponent
                direction="up"
                length={380}
                headLength={0}
                headWidth={10}
                id="arrow6"
            />
            <ArrowComponent
                direction="left"
                length={120}
                headLength={25}
                headWidth={10}
                id="arrow7"
            />
            <ArrowComponent
                direction="up"
                length={220}
                headLength={0}
                headWidth={10}
                id="arrow8"
            />
            <ArrowComponent
                direction="left"
                length={350}
                headLength={25}
                headWidth={10}
                id="arrow9"
            />
            {start && <div id="tekst">Multiplier = {zadnjaCifra} ? </div>}
        </>
    );
}

export default App;

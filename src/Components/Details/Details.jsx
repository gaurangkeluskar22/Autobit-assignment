// Details.jsx
import StockComponent from "../StockComponent/StockComponent";
import "./Details.css";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";
import { useState, useEffect } from "react";
import { FOREX_DATA } from "../../constants";
import useLiveForexData from "../../Hooks/useLiveForexData";

const Details = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight - 115);
    const  data  = useLiveForexData(FOREX_DATA)


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const rowRenderer = ({ index, key, style }) => (
        <div key={key} style={style}>
            <StockComponent data={data[index]} />
        </div>
    );


    return (
        <div className="details-container">
            {data ?
                <List
                    width={width}
                    height={height}
                    rowCount={data?.length}
                    rowHeight={75}
                    rowRenderer={rowRenderer}
                />
                : null}
        </div>
    );
};

export default Details;
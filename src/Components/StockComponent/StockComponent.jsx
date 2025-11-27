
import { useState, useEffect } from "react";
import './StockComponent.css'

const StockComponent = ({ data }) => {
    const [time, setTime] = useState("");
    const [isLowLoss, setIsLowLoss] = useState(false)
    const [isHighLoss, setIsHighLoss] = useState(false)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hh = String(now.getHours()).padStart(2, "0");
            const mm = String(now.getMinutes()).padStart(2, "0");
            const ss = String(now.getSeconds()).padStart(2, "0");
            setTime(`${hh}:${mm}:${ss}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const low = parseFloat(data?.lowValue);
        const prevLow = parseFloat(data?.prevLowValue ?? data?.lowValue);
        if (Number.isFinite(low) && Number.isFinite(prevLow)) {
            setIsLowLoss(low - prevLow < 0);
        }
        const high = parseFloat(data?.highValue);
        const prevHigh = parseFloat(data?.prevHighValue ?? data?.highValue);
        if (Number.isFinite(high) && Number.isFinite(prevHigh)) {
            setIsHighLoss(high - prevHigh < 0);
        }
    }, [data?.lowValue, data?.prevLowValue, data?.highValue, data?.prevHighValue]);



    const buildImage = (imagesArr) => {
        const imagesLength = imagesArr?.length;
        let component = null;
        switch (imagesLength) {
            case 1:
                component = (
                    <div className="w-[37px] h-[37px] flex j-c a-c">
                        <img src={imagesArr[0]} className="w-7 h-7 rounded-[50%] object-cover border-2 border-white" draggable="false" />
                    </div>)
                break;
            case 2:
                component = (
                    <div className="relative w-[37px] h-[37px]">
                        <img src={imagesArr[0]} className="w-7 h-7 rounded-[50%] object-cover border-2 border-white absolute top-0 left-0" draggable="false" />
                        <img src={imagesArr[1]} className="w-7 h-7 rounded-[50%] object-cover border-2 border-white absolute bottom-0 right-0" draggable="false" />
                    </div>)
                break;

        }
        return component
    }

    return (
        <div className="flex flex-row w-full py-2 border-b-[1px] border-b-[#262A3A] text-white px-3 justify-between" key={data?.key}>
            <div className="flex flex-row gap-2">
                <div className="flex j-c a-c">
                    {
                        buildImage(data?.images)
                    }
                </div>
                <div className="flex flex-col ">
                    <span className="text-[var(--grey-color)] text-[10px]">
                        {time}
                    </span>
                    <span className="text-base">
                        {data?.name}
                    </span>
                    <span className="text-xs flex flex-row gap-1">
                        <span className="text-[var(--profit-color)]">+{data?.profit} </span><span className="text-[var(--grey-color)]">(+{data?.percent}%)</span>
                    </span>
                </div>


            </div>
            <div className="flex flex-row justify-end gap-1">
                <div className="flex flex-col j-c stock-value-container">
                    <span className="text-[var(--loss-color)] text-sm" style={isLowLoss ? { color: `var(--loss-color)` } : { color: `var(--profit-color)` }}>{data?.lowValue}</span>
                    <span className="text-[var(--grey-color)] text-xs">L:{data?.lowPercent}</span>
                </div>
                <div className="flex flex-col j-c stock-value-container">
                    <span className="text-[var(--profit-color)] text-sm" style={isHighLoss ? { color: `var(--loss-color)` } : { color: `var(--profit-color)` }}>{data?.highValue} </span>
                    <span className="text-[var(--grey-color)] text-xs">H:{data?.highPercent}</span>
                </div>

            </div>
        </div>
    )
}

export default StockComponent;
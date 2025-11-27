import { useState, useEffect } from "react";

const useLiveForexData = (initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          const lowChange = (Math.random() * 0.1 - 0.05).toFixed(6);
          const highChange = (Math.random() * 0.1 - 0.05).toFixed(6);

          return {
            ...item,
            prevLowValue: item?.lowValue,
            prevHighValue: item?.highValue,
            highValue: (parseFloat(item.highValue) + parseFloat(highChange)).toFixed(6),
            lowValue: (parseFloat(item.lowValue) + parseFloat(lowChange)).toFixed(6),
            profit: (Math.random() * 30).toFixed(0),
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export default useLiveForexData;

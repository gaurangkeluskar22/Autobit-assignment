import { GoHome } from "react-icons/go";
import { RiStockLine } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";

const BOTTOM_NAV_ITEMS = [
    { index: 0, id: "home", label: "Home", Icon: GoHome, size: 20, activeColor: "#AEED08", inactiveColor: "#3E3E3E" },
    { index: 1, id: "trade", label: "Trade", Icon: RiStockLine, size: 20, activeColor: "#AEED08", inactiveColor: "#3E3E3E" },
    { index: 2, id: "history", label: "History", Icon: MdOutlineHistory, size: 20, activeColor: "#AEED08", inactiveColor: "#3E3E3E" },
    { index: 3, id: "profile", label: "Profile", Icon: FaUserLarge, size: 18, activeColor: "#AEED08", inactiveColor: "#3E3E3E" },
];

const TOP_NAV_ITEMS = [
    { index: 0, id: "menu", Icon: HiOutlineMenuAlt2, size: 30, color: "white" },
    { index: 1, id: "filter", Icon: FaFilter, size: 20, color: 'white' }
];

const TAB_BUTTONS = [
    {
        id: 0,
        label: 'Favourites',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
    {
        id: 1,
        label: 'Forex',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
    {
        id: 2,
        label: 'Crypto',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
    {
        id: 3,
        label: 'Indices',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
    {
        id: 4,
        label: 'Derivatives',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
    {
        id: 5,
        label: 'Indices',
        activeColor: 'white',
        inactiveColor: '#505050'
    },
]

const FOREX_DATA = [
    {
        id: "123456",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.23355",
        lowPercent: "235698",
        highValue: "1478.2343449",
        highPercent: "25.3659",
        prevLowValue: "1478.256369",
        prevHighValue: "1478.25545469"
    },
    {
        id: "123457",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.235435",
        lowPercent: "235698",
        highValue: "1478.2556222",
        highPercent: "25.3659",
        prevLowValue: "1478.256369",
        prevHighValue: "1478.456369"
    },
    {
        id: "123458",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.2776369",
        lowPercent: "235698",
        highValue: "1478.288369",
        highPercent: "25.3659",
        prevLowValue: "1478.256369",
        prevHighValue: "1478.256369"
    },
    {
        id: "123459",
        time: "",
        name: "EUR",
        images: ["/usa.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.2888369",
        lowPercent: "235698",
        highValue: "1478.256369",
        highPercent: "25.3659",
        prevLowValue: "1478.258869",
        prevHighValue: "1478.259769"
    },
    {
        id: "123460",
        time: "",
        name: "GBP",
        images: ["/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.2798665",
        lowPercent: "235698",
        highValue: "1478.2569766",
        highPercent: "25.3659",
        prevLowValue: "1478.258976",
        prevHighValue: "1478.289769"
    },
    {
        id: "123461",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.25567",
        lowPercent: "235698",
        highValue: "1478.2557567",
        highPercent: "25.3659",
        prevLowValue: "1478.25566769",
        prevHighValue: "1478.2567769"
    },
        {
        id: "123462",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.25567",
        lowPercent: "235698",
        highValue: "1478.2557567",
        highPercent: "25.3659",
        prevLowValue: "1478.25566769",
        prevHighValue: "1478.2567769"
    },
        {
        id: "123463",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.25567",
        lowPercent: "235698",
        highValue: "1478.2557567",
        highPercent: "25.3659",
        prevLowValue: "1478.25566769",
        prevHighValue: "1478.2567769"
    },
        {
        id: "123464",
        time: "",
        name: "EUR/ GBP",
        images: ["/usa.png", "/germany.png"],
        profit: "30",
        percent: "23.2",
        lowValue: "1478.25567",
        lowPercent: "235698",
        highValue: "1478.2557567",
        highPercent: "25.3659",
        prevLowValue: "1478.25566769",
        prevHighValue: "1478.2567769"
    },
   
];

export {
    BOTTOM_NAV_ITEMS,
    TOP_NAV_ITEMS,
    FOREX_DATA,
    TAB_BUTTONS
}
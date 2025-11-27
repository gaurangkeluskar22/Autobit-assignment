import React, { useCallback, useState } from "react";
import { BOTTOM_NAV_ITEMS } from "../../constants";

const BottomTab = React.memo(function BottomTab({ item, isActive, onSelect }) {
    const { Icon, size, activeColor, inactiveColor, label, id } = item;
    const color = isActive ? activeColor : inactiveColor;

    return (
        <button
            key={id}
            type="button"
            onClick={() => onSelect(item.index)}
            className="flex flex-col items-center justify-center gap-1 focus:outline-none"
        >
            <Icon size={size} color={color} />
            <span className="text-xs" style={{ color }}>
                {label}
            </span>
        </button>
    );
});

const BottomNavigationBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSelect = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Bottom navigation"
            className="flex flex-row px-3 py-2 bg-[var(--background-color)] justify-between items-center"
        >
            {BOTTOM_NAV_ITEMS?.map((item) => (
                <BottomTab
                    key={item.id}
                    item={item}
                    isActive={item.index === currentIndex}
                    onSelect={handleSelect}
                />
            ))}
        </nav>
    );
};

export default BottomNavigationBar;

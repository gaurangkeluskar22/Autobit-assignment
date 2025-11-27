import './CategoriesBar.css'
import { useState, useCallback } from 'react';
import { TAB_BUTTONS } from '../../constants';

const CategoriesBar = () => {

    const [currentIndex, setCurrentIndex] = useState(1);

    const handleSelect = useCallback((index) => {
        setCurrentIndex(index);
    }, []);



    const CategoriesButton = ({ data, isActive, onSelect }) => {
        const { activeColor, inactiveColor, label, id } = data;
        const color = isActive ? activeColor : inactiveColor;

        return (
            <button
                type="button"
                className='focus:outline-none text-sm'
                style={{ color: color }}
                onClick={() => onSelect(id)}

            >
                {label}
            </button>
        )
    }
    return (
        <div className='flex flex-row gap-5 categories-bar-section relative'>
            {
                TAB_BUTTONS?.map((item, index) => {
                    return (
                        <CategoriesButton
                            data={item}
                            key={item?.id}
                            isActive={index === currentIndex}
                            onSelect={handleSelect} />
                    )
                })
            }



        </div>
    )
}

export default CategoriesBar
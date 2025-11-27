import './TopNavigationBar.css'
import { TOP_NAV_ITEMS } from '../../constants';
import React from 'react';

const TopNavigationBar = () => {

    const HeaderMenu = React.memo(function HeaderMenu({ item }) {
        const { Icon, size, id, color } = item;

        return (
            <button
                type="button"
                className='focus:outline-none'
            >
                <Icon size={size} color={color} />
            </button>
        );
    });

    return (
        <div className="header">
            {
                TOP_NAV_ITEMS?.map((item, index) => {
                    return (
                        <HeaderMenu item={item} key={item?.id} />
                    )
                })
            }
        </div>
    )
}

export default TopNavigationBar;
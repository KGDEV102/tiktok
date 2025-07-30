import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import Tippy from "@tippyjs/react";
import HeadlessTippy from '@tippyjs/react/headless';

import PopperWrapper from "../Wrapper";

import MenuItem from "./MenuItem";
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item}></MenuItem>
        ))
    }
    return ( 
        <HeadlessTippy
           hideOnClick={true}
            interactive
            delay={[0,700]}
                    placement="bottom-end"
                    render={attrs => (
                        
                        <div className={cx("menu-lists")} tabIndex="-1" {...attrs} > 
                            
                            <PopperWrapper className={cx("menu-popper")}>
                               {renderItems()}
                            </PopperWrapper>
                           
                            </div>
                       
                    )}
        >
             {children}
        </HeadlessTippy>
     );
}

export default Menu;
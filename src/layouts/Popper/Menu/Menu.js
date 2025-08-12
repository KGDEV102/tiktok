import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import Tippy from "@tippyjs/react";
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from "../Wrapper";
import Header from "./Header";

import MenuItem from "./MenuItem";
import { useState } from "react";
const cx = classNames.bind(styles);
const defaultFn = ()=>{}
function Menu({ children, items = [],hideOnClick=false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                   
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                >
                </MenuItem>
           )
       })
    }
    const handleBack = () => {
        setHistory(prev =>prev.slice(0, history.length - 1));
    }
    const renderResult = ( attrs) => {
        return (
                        
                        <div className={cx("menu-lists")} tabIndex="-1" {...attrs} > 
                            
                            <PopperWrapper className={cx("menu-popper")}>
                                {history.length > 1 && <Header title={current.title}
                        onBack={ handleBack}>
                        </Header>}
                             <div className={cx("menu-body")}>  {renderItems()}</div>
                            </PopperWrapper>
                           
                            </div>
                       
                    )
    }
    const handleReset = () => {
         setHistory(prev => prev.slice(0, 1));  
    }
    return ( 
        <HeadlessTippy
         hideOnClick={hideOnClick}
         
           interactive={true}
              onHide={handleReset}
            delay={[0,700]}
                    placement="bottom-end"
                    render={renderResult}
        >
             {children}
        </HeadlessTippy>
     );
}

export default Menu;
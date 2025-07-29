import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Button({ to, href, primary = false,disable=false,outline=false,text=false,rounded=false,className, children, onClick, ...passProps }) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        props.to = to;
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        })
    }
    const classes = cx("wrapper", {
        [className]: className, //nếu truyền className thì có class riêng
        primary,
        disable,
        outline,
        rounded,
        text

    });
    return ( 
        <Comp className={classes} {...props}>
            <span>{ children}</span>
        </Comp>
     );
}

export default Button;
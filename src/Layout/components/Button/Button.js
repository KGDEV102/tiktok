import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Button({ to, href, primary = false,disable=false, children, onClick, ...passProps }) {
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
    const classes = cx("wrapper", {
        primary,
        disable

    });
    return ( 
        <Comp className={classes} {...props}>
            <span>{ children}</span>
        </Comp>
     );
}

export default Button;
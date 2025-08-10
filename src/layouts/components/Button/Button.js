import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Button({ to, href, primary = false,disable=false,outline=false,text=false,rounded=false,className,leftIcon,rightIcon, children, onClick, ...passProps }) {
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
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
     );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    disable: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}
export default Button;
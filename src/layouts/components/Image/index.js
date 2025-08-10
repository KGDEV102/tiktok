import { forwardRef } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Image.module.scss";
import classNames from "classnames/bind"; 
import images from "~/assets/images";
const cx = classNames.bind(styles);
const Image = forwardRef(({ src,alt,className,fallback:customFallback = images.noImage,...props }, ref) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
        setFallback(customFallback);
    }
    return <img
        ref={ref}
        className={cx("wrapper", className )}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
        
    >

    </img>
})
Image.propTypes= {
    src:PropTypes.string,
    alt:PropTypes.string,
    className:PropTypes.string,
    fallback:PropTypes.string,
}
export default Image;
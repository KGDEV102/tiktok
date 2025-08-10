import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import Image from "~/layouts/components/Image";
const cx = classNames.bind(styles);
function AccountItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image className={cx("avartar")}alt="User Avatar" src={data.avatar}></Image>
            <div className={cx("infor")}>
                <h4 className={cx("name")}>{data.full_name}
                    {data.tick && (<BsCheckCircleFill className={cx("check")}></BsCheckCircleFill>)}
                </h4>
                <span className={cx("username")}>{ data.nickname}</span>
            </div>
        </Link>
     );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
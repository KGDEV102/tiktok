import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { BsCheckCircleFill } from 'react-icons/bs';

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx("wrapper")}>
            <img className={cx("avartar")}alt="User Avatar" src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d5450dffd6596cb0302441b62d5c2663~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8e71a4ef&x-expires=1753786800&x-signature=bSYPVvJ681nEP9ok7dwNb6AiYqs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"></img>
            <div className={cx("infor")}>
                <h4 className={cx("name")}>KGDEV
                    <BsCheckCircleFill className={cx("check")}></BsCheckCircleFill>
                </h4>
                <span className={cx("username")}>Phan Nguyễn Anh Kiệt</span>
            </div>
        </div>
     );
}

export default AccountItem;
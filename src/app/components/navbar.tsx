import { Input } from 'antd';
import {
  FlagTwoTone,
  UserOutlined,
  ClockCircleTwoTone,
} from '@ant-design/icons';
import style from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <div className={style.navBar}>
      {/* <Input addonAfter={<SettingOutlined />} defaultValue="mysite" /> */}
      <div className={style.item}>
        1,000
        <span className={style.icon}>
          <FlagTwoTone twoToneColor="#eb5157" />
        </span>
      </div>
      <div className={style.item}>
        1,000
        <span className={style.icon}>
          <UserOutlined style={{ color: '#eb5157' }} />
        </span>
      </div>
      <div className={style.item}>
        1,000
        <span className={style.icon}>
          <ClockCircleTwoTone twoToneColor="#eb5157" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;

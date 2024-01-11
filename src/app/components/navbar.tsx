import {
  FlagTwoTone,
  UserOutlined,
  ClockCircleTwoTone,
} from '@ant-design/icons';
import style from '../styles/navbar.module.css';
import { useSelector } from 'react-redux';
import { PlayersInterface } from '../interfaces/app';

const NavBar = ({ myName }: { myName: string }) => {
  const isGameInitialized = useSelector(
    (state: any) => state.app?.isGameInitialized
  );
  const myData = useSelector((state: any) => state.app?.ranking).find(
    (player: PlayersInterface) => player.isMe
  );

  return (
    <div className={style.navBar}>
      <div className={style.item}>
        {isGameInitialized && myData.totalPoint}
        <span className={style.icon}>
          <FlagTwoTone twoToneColor="#eb5157" />
        </span>
      </div>
      <div className={style.item}>
        {isGameInitialized && myName}
        <span className={style.icon}>
          <UserOutlined style={{ color: '#eb5157' }} />
        </span>
      </div>
      <div className={style.item}>
        {isGameInitialized && new Date().toLocaleTimeString()}
        <span className={style.icon}>
          <ClockCircleTwoTone twoToneColor="#eb5157" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;

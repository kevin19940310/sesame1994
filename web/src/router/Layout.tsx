import styles from './layout.module.less';
import { Outlet, useNavigate } from 'react-router-dom';
const Framework = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.TabBar}>
        <div className={styles.tab} onClick={() => navigate('/')}>
          <div className={styles.icon}>
            <img src={`https://sesame1994.oss-cn-chengdu.aliyuncs.com/icon_01.png`} alt="" />
          </div>
          <div className={styles.text}>贰叁事</div>
        </div>
        <div className={styles.tab} onClick={() => navigate('/')}>
          <div className={styles.icon}>
            <img src={`https://sesame1994.oss-cn-chengdu.aliyuncs.com/icon_02.png`} alt="" />
          </div>
          <div className={styles.text}>纪念日</div>
        </div>
        <div className={styles.tab} onClick={() => navigate('/')}>
          <div className={styles.icon}>
            <img src={`https://sesame1994.oss-cn-chengdu.aliyuncs.com/icon_03.png`} alt="" />
          </div>
          <div className={styles.text}>听音乐</div>
        </div>
        <div className={styles.tab} onClick={() => navigate('about')}>
          <div className={styles.icon}>
            <img src={`https://sesame1994.oss-cn-chengdu.aliyuncs.com/icon_04.png`} alt="" />
          </div>
          <div className={styles.text}>悄悄话</div>
        </div>
      </div>
    </div>
  );
};

export default Framework;

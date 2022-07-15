import styles from './index.less';
import { history } from 'umi';
import { useLocation } from 'react-router';
import constant from '@/constant';
import icon_01 from '@/icon/icon_01.png'
import icon_02 from '@/icon/icon_02.png'
import icon_03 from '@/icon/icon_03.png'
import icon_04 from '@/icon/icon_04.png'
import icon_05 from '@/icon/icon_05.png'
import icon_01_a from '@/icon/icon_01_a.png'
import icon_02_a from '@/icon/icon_02_a.png'
import icon_03_a from '@/icon/icon_03_a.png'
import icon_04_a from '@/icon/icon_04_a.png'
import icon_05_a from '@/icon/icon_05_a.png'
function Nav() {
  const { pathname } = useLocation();
  return <div className={styles.nav}>
    <div
        onClick={()=> history.push('/home') }
        className={`${styles.navItem} ${pathname=== '/home' ? styles.active : ''}`}
    >
      <div className={styles.icon}>
        <img src={pathname=== '/home'? icon_01_a : icon_01}/>
      </div>
      <div className={styles.text}>贰叁事</div>
    </div>
    <div
        onClick={()=> history.push('/commemoration') }
        className={`${styles.navItem} ${pathname=== '/commemoration' ? styles.active : ''}`}
    >
      <div className={styles.icon}>
        <img src={pathname=== '/commemoration'? icon_02_a : icon_02}/>
      </div>
      <div className={styles.text}>纪念日</div>
    </div>
    <div
        onClick={()=> history.push('/music') }
        className={`${styles.navItem} ${pathname=== '/music' ? styles.active : ''}`}
    >
      <div className={styles.icon}>
        <img src={pathname=== '/music'? icon_03_a : icon_03}/>
      </div>
      <div className={styles.text}>听音乐</div>
    </div>
    <div
        onClick={()=> history.push('/whisper') }
        className={`${styles.navItem} ${pathname=== '/whisper' ? styles.active : ''}`}
    >
      <div className={styles.icon}>
        <img src={pathname=== '/whisper'? icon_04_a : icon_04}/>
      </div>
      <div className={styles.text}>悄悄话</div>
    </div>
    <div
        onClick={()=> history.push('/material') }
        className={`${styles.navItem} ${pathname=== '/material' ? styles.active : ''}`}
    >
      <div className={styles.icon}>
        <img src={pathname=== '/material'? icon_05_a : icon_05}/>
      </div>
      <div className={styles.text}>资料墙</div>
    </div>
  </div>
}

export default Nav;
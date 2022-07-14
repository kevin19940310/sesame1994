import styles from './index.less';
function Nav() {
  return <div className={styles.nav}>
    <div className={styles.navItem}>
      <div className={styles.text}>贰叁事</div>
      <div className={styles.icon}></div>
    </div>
    <div className={styles.navItem}>
      <div className={styles.text}>纪念日</div>
      <div className={styles.icon}></div>
    </div>
    <div className={styles.navItem}>
      <div className={styles.text}>听音乐</div>
      <div className={styles.icon}></div>
    </div>
    <div className={styles.navItem}>
      <div className={styles.text}>悄悄话</div>
      <div className={styles.icon}></div>
    </div>
    <div className={styles.navItem}>
      <div className={styles.text}>资料墙</div>
      <div className={styles.icon}></div>
    </div>
  </div>
}

export default Nav;
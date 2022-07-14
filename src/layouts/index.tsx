import { Outlet } from 'umi';

import Nav from '@/component/Nav';

import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
          <Outlet />
      </div>
      <Nav/>
    </div>
  );
}

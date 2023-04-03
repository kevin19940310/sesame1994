import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
function Record() {
  const navigate = useNavigate();
  return (
    <div className={styles.record}>
      <NavBar className="navBar" onBack={() => navigate('/')}>
        贰叁事详情
      </NavBar>
    </div>
  );
}

export default Record;

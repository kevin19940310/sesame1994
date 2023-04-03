import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import styles from './index.module.less';
function Home() {
  const [list] = useState([
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/1.jpeg',
      title: '主题内容1',
      time: '2022年04月18日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/2.jpeg',
      title: '主题内容2',
      time: '2022年04月19日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/3.jpeg',
      title: '主题内容3',
      time: '2022年04月20日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/4.jpeg',
      title: '主题内容4',
      time: '2022年04月21日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/5.jpeg',
      title: '主题内容5',
      time: '2022年04月22日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/6.jpeg',
      title: '主题内容6',
      time: '2022年04月23日',
    },
    {
      img: 'https://sesame1994.oss-cn-chengdu.aliyuncs.com/7.jpeg',
      title: '主题内容7',
      time: '2022年04月24日',
    },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      <NavBar className="navBar" backArrow={false}>
        贰叁事
      </NavBar>
      <div className={styles.home}>
        {list &&
          list.map((item) => {
            return (
              <div className={styles.box} onClick={() => navigate('record/1')}>
                <div className={styles.top}>
                  <img src={item.img} alt="" />
                </div>
                <div className={styles.time}>{item.time}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;

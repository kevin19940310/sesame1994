import HomeList from "@/pages/home/component/HomeList";
import styles from './index.less';
function Home() {
  const dataList = [
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/1.jpeg',
      id:1,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/2.jpeg',
      id:2,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/3.jpeg',
      id:3,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/4.jpeg',
      id:4,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/5.jpeg',
      id:5,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/6.jpeg',
      id:6,
    },
    {
      time: '2022年04月18日',
      content: '主题内容',
      img: 'https://sesame1994-1258494266.cos.ap-chengdu.myqcloud.com/7.jpeg',
      id:7,
    },
  ]
  return <div className={styles.home}>
    {
      dataList && dataList.map(item => {
         return <HomeList key={item.id} dataItem={item}/>
        })
    }
  </div>
}

export default Home;
import styles from './index.less';
import { HomeItem } from './interface';
interface IProps {
    dataItem: HomeItem
}
function HomeList(props: IProps) {
    const { dataItem } = props;
    return <div className={styles.homeList}>
        <div className={styles.img}>
            <img src={dataItem.img}/>
        </div>
        <div className={styles.time}>{dataItem.time}</div>
        <div className={styles.content}>{dataItem.content}</div>
    </div>
}

export default HomeList;
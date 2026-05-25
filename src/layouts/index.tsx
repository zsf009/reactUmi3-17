import { Link } from 'umi';
import styles from './index.less';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/list">列表</Link>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;

import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const buildEnv = process.env.UMI_APP_BUILD_ENV;
  const nodeEnv = process.env.NODE_ENV;
  const UMI_APP_API_URL = process.env.UMI_APP_API_URL;
  const UMI_ENV = process.env.UMI_ENV;
  console.log(buildEnv, 'buildEnv-env');
  console.log(nodeEnv, 'nodeEnv-node');
  console.log(UMI_APP_API_URL, 'UMI_APP_API_URL-config');
  console.log(UMI_ENV, 'UMI_ENV-config');
  return (
    <div className={styles.container}>
      <Guide name={trim(name)} />
    </div>
  );
};

export default HomePage;

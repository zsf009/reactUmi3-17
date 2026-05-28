import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import './index.less';

const prefix = 'ssyy-access';

const AccessPage: React.FC = () => {
  const access = useAccess();
  return (
    <div className={prefix}>
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </div>
  );
};

export default AccessPage;

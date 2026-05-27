import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Link, Outlet, useLocation, useNavigate } from '@umijs/max';
import { Dropdown, Tabs } from 'antd';
import { useEffect, useState } from 'react';

const siderWidth = 256;

const menuRoutes = [
  { path: '/home', name: '首页' },
  { path: '/access', name: '权限演示' },
  { path: '/table', name: 'CRUD 示例' },
  { path: '/table2', name: 'CRUD 示例2' },
  { path: '/table3', name: 'CRUD 示例3' },
  { path: '/table4', name: 'CRUD 示例4' },
  { path: '/table5', name: 'CRUD 示例5' },
  { path: '/table6', name: 'CRUD 示例6' },
  { path: '/table7', name: 'CRUD 示例7' },
  { path: '/table8', name: 'CRUD 示例8' },
  { path: '/table9', name: 'CRUD 示例9' },
  { path: '/table10', name: 'CRUD 示例10' },
  { path: '/table11', name: 'CRUD 示例11' },
];

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState<{ key: string; label: string }[]>([
    { key: '/home', label: '首页' },
  ]);

  useEffect(() => {
    const route = menuRoutes.find((r) => r.path === location.pathname);
    if (route && !tabs.find((t) => t.key === route.path)) {
      setTabs((prev) => [...prev, { key: route.path, label: route.name }]);
    }
  }, [location.pathname]);

  const onTabEdit = (
    targetKey: string | React.MouseEvent | React.KeyboardEvent,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      const newTabs = tabs.filter((t) => t.key !== targetKey);
      if (newTabs.length === 0) return;
      setTabs(newTabs);
      if (location.pathname === targetKey) {
        navigate(newTabs[newTabs.length - 1].key);
      }
    }
  };

  return (
    <ProLayout
      title="My App"
      logo="https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg"
      layout="mix"
      siderWidth={siderWidth}
      location={location}
      route={{ routes: menuRoutes }}
      menuItemRender={(item, dom) => <Link to={item.path || '/'}>{dom}</Link>}
      headerTitleRender={(logo, title) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: siderWidth,
          }}
        >
          {logo}
          {title}
        </div>
      )}
      headerContentRender={() => (
        <Tabs
          tabBarStyle={{ marginBottom: 0 }}
          type="editable-card"
          hideAdd
          activeKey={location.pathname}
          onChange={(key) => navigate(key)}
          onEdit={onTabEdit}
          items={tabs.map((t) => ({
            key: t.key,
            label: t.label,
            closable: t.key !== '/home',
          }))}
          style={{ marginBottom: 0 }}
          size="small"
        />
      )}
      avatarProps={{
        icon: <UserOutlined />,
        title: '管理员',
        size: 'small',
        render: (_props, dom) => (
          <Dropdown
            menu={{
              items: [
                { key: 'logout', icon: <LogoutOutlined />, label: '退出登录' },
              ],
            }}
          >
            {dom}
          </Dropdown>
        ),
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default Layout;

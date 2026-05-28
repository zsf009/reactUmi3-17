import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  plugins: ['@react-dev-inspector/umi4-plugin'],
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV,
  },
  routes,
  npmClient: 'yarn',
});

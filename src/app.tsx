import React from 'react';
import { Inspector } from 'react-dev-inspector';

// 运行时配置

// 全局初始化数据配置
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export function rootContainer(container: React.ReactNode) {
  return <Inspector>{container}</Inspector>;
}

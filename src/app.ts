// 运行时配置

// 全局初始化数据配置
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

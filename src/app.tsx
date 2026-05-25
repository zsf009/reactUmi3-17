export const request = {
  timeout: 10000,
  errorConfig: {
    adaptor: (resData: any) => {
      return { success: resData.code === 0, data: resData.data, errorMessage: resData.msg };
    },
  },
};

export async function getInitialState() {
  return { name: 'UmiJS App' };
}

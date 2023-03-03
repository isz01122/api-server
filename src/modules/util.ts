const util = {
  success: (status: number, message: string, data?: any) => {
    return {
      result: data,
    };
  },
  fail: (status: number, message: string, error: any) => {
    return {
      error,
      status,
      message,
    };
  },
};

export default util;

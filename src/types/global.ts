/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  data: {
    error: string;
    message: string;
    success: boolean;
  };

  status:number,
};

export type TResponse = {
    
  data?:any,
  error?:TError
}

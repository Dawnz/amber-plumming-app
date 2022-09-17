export interface APIResponse<T = any> {
  // status:number;
  // message:string;
  status: string;
  data: T;
}

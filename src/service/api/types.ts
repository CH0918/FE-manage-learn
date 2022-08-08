import { ResType } from '../http';
export interface ILoginParams {
  userName: string;
  password: string | number;
}
export interface IUserInfo {
  id: number;
  userName: string;
  address: string;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<ResType<IUserInfo>>;
}

import { AxiosInstance } from 'axios';
import axiosInstance from './instance';

class Request {
  protected readonly instance: AxiosInstance;

  constructor() {
    this.instance = axiosInstance;
  }

  public getInstant = () => this.instance;
}

export default new Request().getInstant();

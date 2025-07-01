import { AxiosInstance } from "axios";
import api from "../utils/api/api";

export class ApiService {
  protected readonly api: AxiosInstance;
  protected readonly endpoint: string;

  constructor(endpoint: string) {
    this.api = api;
    this.endpoint = endpoint;
  }

}

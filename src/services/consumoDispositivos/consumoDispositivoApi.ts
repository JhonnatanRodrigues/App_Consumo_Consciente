import { VisaoGeral } from "src/types/visaoGeralTypes";
import { ApiService } from "../apiService";

export class ConsumoDispositivoApi extends ApiService {
    constructor() {
      super("ConsumoDispositivo");
    }

    async ListarVisaoGeral() : Promise<VisaoGeral> {
        return (await this.api.get(`${this.endpoint}/VisaoGeral`)).data; 
    }
  }
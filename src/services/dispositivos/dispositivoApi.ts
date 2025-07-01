import { AlterarDispositivo, Dispositivo, NovoDispositivo } from "src/types/dispositivoType";
import { ApiService } from "../apiService";

export class DispositivoApi extends ApiService {
    constructor() {
      super("Dispositivo");
    }

    async Novo(dto: NovoDispositivo) {
        await this.api.post(`${this.endpoint}`, dto); 
    }
    async Alterar(dto: AlterarDispositivo) {
        await this.api.put(`${this.endpoint}`, dto); 
    }
    async Listar() : Promise<Dispositivo[]> {
        return (await this.api.get(`${this.endpoint}`)).data; 
    }
    async Recuperar(id: number) : Promise<Dispositivo> {
        return (await this.api.get(`${this.endpoint}/${id}`)).data; 
    }
  }
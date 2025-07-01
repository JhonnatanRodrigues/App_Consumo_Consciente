import { ApiService } from "../apiService";
import { NovoUsuario } from "src/types/usuarioType";

export class UsuarioApi extends ApiService {
    constructor() {
      super("Usuario");
    }

    async Novo(dto: NovoUsuario) {
        await this.api.post(`${this.endpoint}/Novo`, dto); 
    }
  }
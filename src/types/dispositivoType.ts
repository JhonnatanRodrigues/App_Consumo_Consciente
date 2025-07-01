export type Dispositivo = {
    id: number;
    nome: string;
    urlImagem?: string;
    descricao: string;
    kws: number;
    online: boolean;
    codigoExterno: string;
}

export type NovoDispositivo = {
    nome: string;
    codigoExterno: string;
    descricao: string;
    urlImagem?: string;
}

export type AlterarDispositivo = {
    id: number;
    nome: string;
    codigoExterno: string;
    descricao: string;
    urlImagem?: string;
}
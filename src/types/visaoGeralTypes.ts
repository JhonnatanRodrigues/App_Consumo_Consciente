export type VisaoGeral = {
    consumoTotalDoMes_kWs: number;
    custoTotalEstimadoDoMes: number;

    dispositivos_consumos: Dispositivo_Consumo[];
    consumoAnual: ConsumoAnual[];
}

export type Dispositivo_Consumo = {
    urlImagemDispositivo?: string;
    nomeDispositivo: string;
    consumo_kWs: number;
}

export type ConsumoAnual = {
    mes: string;
    consumoTotal_kWs: number;
}
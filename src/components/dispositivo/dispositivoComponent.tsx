import { Dispositivo } from "src/types/dispositivoType";
import DispositivoComponentView from "./dispositivoComponentView";

type props = {
    dispositivo: Dispositivo;
}

const DispositivoComponent = ({dispositivo} : props) =>{
    return <DispositivoComponentView 
        dispositivo={dispositivo} 
    />
}

export default DispositivoComponent;
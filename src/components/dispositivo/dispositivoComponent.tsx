import { Dispositivo } from "src/types/dispositivoType";
import DispositivoComponentView from "./dispositivoComponentView";

type props = {
    dispositivo: Dispositivo;
    onPress: (id: number) => void;
}

const DispositivoComponent = ({dispositivo, onPress} : props) =>{
    return <DispositivoComponentView 
        dispositivo={dispositivo} 
        onPress={onPress}
    />
}

export default DispositivoComponent;
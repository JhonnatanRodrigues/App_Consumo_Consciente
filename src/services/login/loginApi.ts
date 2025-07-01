import axios from '../../utils/api/api';

export async function login(email: string, senha: string) {
    const response = await axios.post('/Login', {
        usuarioLogin: email,
        senha: senha
    });
    
    const token = response.data;

    return token; 
}
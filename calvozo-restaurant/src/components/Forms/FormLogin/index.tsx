import { useState, type FormEvent } from 'react';
import { ButtonDefault } from '../../Buttons/ButtonDefault';
import { InputDefault } from '../../Inputs/InputDefault';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export function FormLogin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit =  async (event: FormEvent) => {
        event.preventDefault();
        
        const dataForm = {user, password};

        if(user ===  'admin' || password === 'admin'){
            navigate('/dashboard')
            toast.success("Bem vindo ao Dashboard")
        }else{
            toast.error("Usuario ou senha invalidos")
            setPassword("");
            setUser("");
        }
        console.log(dataForm);
        //logica de POST na API
    
    }

    return(
        <form className="formAcessLogin" onSubmit={handleSubmit}>
            <InputDefault 
            textLabel='Usuario' 
            placeholder='Digite o nome do Usuario' 
            type='text'
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            />
            <InputDefault 
            textLabel='Senha' 
            placeholder='Digite sua senha' 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <ButtonDefault textButton='Entrar' type='submit'/>
        </form>
    )
}
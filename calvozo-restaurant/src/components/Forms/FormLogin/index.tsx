import { use, useState, type FormEvent } from 'react';
import { ButtonDefault } from '../../Buttons/ButtonDefault';
import { InputDefault } from '../../Inputs/InputDefault';
import './styles.css';

export function FormLogin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =  async (event: FormEvent) => {
        event.preventDefault();
        
        const dataForm = {user, password};

        console.log(dataForm);
        //logica de POST na API
        setPassword("");
        setUser("");
    
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
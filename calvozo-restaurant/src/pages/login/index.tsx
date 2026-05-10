import { FormLogin } from '../../components/Forms/FormLogin';
import './styles.css';

export function Login(){
    return(
        <div className='containerFormLogin'>
            <div className='containerFormImage'>
                <img src="./assets/bannerLoginForm.jpg" alt="" />
            </div>
            <div className='containerForm'>
                <h2 className='textForm'>Seja bem-vindo Calvozo</h2>
                <FormLogin />
            </div> 
        </div>
    )
}
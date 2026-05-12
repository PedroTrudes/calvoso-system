import './styles.css';
import { useNavigate } from 'react-router-dom';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    textButton: string;
    link: string;
}

export function ButtonLink({textButton, link, ...rest}: PropsButton){
    const navigate = useNavigate();
    const btnLink = (url: string) => {
        navigate(url);
    }
    return(
        <button {...rest} className='buttonFormsPrimary' onClick={() => btnLink(link)}>{textButton}</button>
    )
}
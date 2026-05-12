import './styles.css';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    textButton: string;
}

export function ButtonDefault({textButton, ...rest} : PropsButton){
    
    return(
        <button {...rest} className="buttonDefaultPrimary">{textButton}</button>
    )
}
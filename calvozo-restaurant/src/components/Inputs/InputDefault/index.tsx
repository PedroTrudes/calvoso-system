import './styles.css';

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    textLabel: string;
}

export function InputDefault( {textLabel, ...rest} : PropsInput){
    return(
        <fieldset className="containerFieldDefault">
            <label htmlFor="" className="labelDefault">{textLabel}</label>
            <input {...rest} className="inputDefault"/>
        </fieldset>
    )
}
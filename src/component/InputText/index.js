
import './InputText.css'

const InputText = (props) => {

    const onType = (event) => {
        props.whenChanged(event.target.value)
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.haveTo} placeholder={props.placeholder} />
        </div>

    )
}

export default InputText
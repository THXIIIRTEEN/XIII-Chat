import "./input.css"

export default function Input(props) {
    const {id, placeholder, type, className,} = props;
    return (
        <div className="input_background">
            <input id={id} placeholder={placeholder} type={type} className={className}/>        
        </div>
    )
}


import "./ChooseButton.css"

export default function ChooseButton({children, onClick, className}) {

    

    return (
        <button className={className} type="button" onClick={onClick}>{children}</button>
    )
}
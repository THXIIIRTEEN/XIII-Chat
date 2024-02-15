import "./GradientButton.css"

export default function GradientButton({children, onClick}) {

    return (
        <button type="submit" className="gradientButton" onClick={onClick}>{children}</button>
    )
}
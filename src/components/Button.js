import "material-symbols"
const Button = ({text, onClick}) => {
  return (
    
    <button className="btn" onClick={onClick}>
        <span class="material-symbols-outlined">{text}</span>
    </button>
  )
}

export default Button
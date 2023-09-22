// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

export default Button;
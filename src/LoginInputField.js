import './css/Login.css'

let wrapDiv = (content) => {
  return (
    <div className='centered-container'>
      {content}
    </div>
  )
}

let inputField = ({ id, type, name, placeholder, value, onChange }) => {
    return (
      wrapDiv(<input
          id={id}
          type={type}
          name={name}
          className='rounded-input'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />)
    )
}

export default inputField;
  
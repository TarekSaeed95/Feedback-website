import PropTypes from 'prop-types'

function Button({children,version,type,submitHandler,isdisabled,editMode,editClickHandler}) {
  return (
    
<button  onClick={(e)=>{
  e.preventDefault()
  
    submitHandler()
  

  } } disabled={isdisabled} type={type} className={`btn btn-${version}`}>
    {children}
</button>
  )
}
Button.defaultPropTypes={
  children:"",
  version:"primary",
  type:"submit",
  isdisabled:"true",
}
Button.propTypes = {
  children:PropTypes.string,
  version:PropTypes.string.isRequired,
  type:PropTypes.string,
  isdisabled:PropTypes.bool.isRequired,
}

export default Button


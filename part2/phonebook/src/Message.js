import './index.css';

const Message = ({value, type}) => {
  if( value === null ) return null;

  if(type === 'ok')
    return(
      <div className='success-message'>
        {value}
      </div>
    )
  
    return(
    <div className='error-message'>
      {value}
    </div>
  )
}

export default Message;
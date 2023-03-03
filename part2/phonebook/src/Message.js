import './index.css';

const Message = ({value, type}) => {
  if( value === null ) return null;
  return(
    <div className='success-message'>
      {value}
    </div>
  )
}

export default Message;
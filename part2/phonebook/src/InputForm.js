
const InputForm = ({title, value, handler}) => {
  return (
    <div>
      {title}: <input value={value} onChange={handler} />
    </div>
  );
}

export default InputForm;

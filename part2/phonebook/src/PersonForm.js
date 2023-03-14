import InputForm from './InputForm'

const PersonForm = ({name, nameHandler, number, numberHandler, formHandler}) => {
  return (
    <>
      <form onSubmit={formHandler}>
        <InputForm title='name' value={name} handler={nameHandler} />
        <InputForm title='number' value={number} handler={numberHandler} />
        <button type="submit">add</button>
      </form>
    </>
  )
}

export default PersonForm
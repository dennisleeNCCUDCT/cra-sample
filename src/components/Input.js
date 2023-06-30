const Input = ({ id, text, value, onChangeHandler }) => {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <br />
      <input type="text" id={id} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export default Input;

import "./style.css";

const Form = () => (
  <form className="form">
    <input
      name="newTask"
      className="form__input"
      placeholder="Co jest do zrobienia?"
      autoFocus
      maxLength="1001"
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);
export default Form;

import { useState } from "react";

const List = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.setList((prevState) => [
      ...prevState,
      { id: prevState.length, title: userInput.trim(), done: false },
    ]);
    setUserInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default List;

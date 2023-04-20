import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="app-container">
      <InputField
        title={title}
        setTitle={setTitle}
        list={list}
        setList={setList}
      ></InputField>
      <div>
        <TodoCardList list={list} setList={setList}></TodoCardList>
      </div>
    </div>
  );
}

function TodoCardList({ list, setList }) {
  return (
    <div className="todo-card-list">
      {list.map((item) => {
        return <div className="item-card">{item}</div>;
      })}
    </div>
  );
}

function InputField({ title, setTitle, list, setList }) {
  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onSubmitHandler = () => {
    let newTodoList = [...list];
    !newTodoList.includes(title)
      ? newTodoList.push(title)
      : (newTodoList = newTodoList);
    setList(newTodoList);
    setTitle("");
  };
  return (
    <div className="title-field">
      <div className="input-field">
        <input type="text" value={title} onChange={onChangeHandler}></input>
        <button onClick={onSubmitHandler}>추가하기</button>
      </div>
      <div className="title-text">
        <h3>Todo List</h3>
      </div>
    </div>
  );
}

export default App;

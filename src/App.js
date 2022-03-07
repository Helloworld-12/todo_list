import { React, useState } from "react";
import Compo from "./Compo";


function App() {
  const [InputList, setInputList] = useState("morning walk");
  const [Item, setItemList] = useState([]);
  const event = (e) => {
    setInputList(e.target.value);
  };
  const ItemList = () => {
    setItemList((oldItem) => {
      return [...oldItem, InputList];
    });
    setInputList("");
  };
  const deleteItem=(id)=>{
    setItemList((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
        return index!==id;

      });
    });

  };

  return (
    <div className="nihar">
      <div className="himakshi">
        <br />

        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add items in todo list" value={InputList} onChange={event} />
        <button onClick={ItemList}> + </button>
        <ol>
          {Item.map((itemval,index) => {
            return <Compo text={itemval} key={index} id={index} onSelect= {deleteItem} />
          })}
        </ol>
      </div>

    </div>
  )


}

export default App;

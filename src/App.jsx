import { useState } from "react";
import Small from "./component/Todo";
function App() {
  let [title, setTitle] = useState("");
  let [pending, setPending] = useState(0);
  let [completed, setCompleted] = useState(0);

  let [data, setData] = useState([]);

  function handlechange(event) {
    setTitle(event.target.value);
  }

  function handleclick() {
    setData([...data, { todotitle: title, type: false }]);
    setTitle("");
    setPending(pending + 1);
  }

  function filtertodo(id) {
    let newlist = data.filter((ele, index) => {
      if (index != id) {
        return ele;
      }
    });
    setData(newlist);
    countdata(newlist);
  }

  function handleCheck(id) {
    let newdata = data.map((ele, index) => {
      if (index == id) {
        ele.type = !ele.type;
        return ele;
      } else {
        return ele;
      }
    });
    setData(newdata);
    countdata(newdata);
  }

  function countdata(newdata) {
    let newpending = 0;
    let newcomplete = 0;
    newdata.forEach((ele) => {
      if (ele.type == true) {
        newcomplete = newcomplete + 1;
      } else {
        newpending = newpending + 1;
      }
    });
    setPending(newpending);
    setCompleted(newcomplete);
  }
  return (
    <div style={{background:"blue"}}>
      <input
        type="text"
        placeholder="enter todo"
        onChange={handlechange}
        value={title}
      />
      <div>
        <h3>Pending is : {pending}</h3>
        <h3>Completed is : {completed}</h3>
      </div>
      <button onClick={handleclick}>Add Todo</button>
      <Small data={data} filtertodo={filtertodo} handleCheck={handleCheck} />
    </div>
  );
}

export default App;

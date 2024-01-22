import "../App.css";

function SmallTodo({ data, filtertodo, handleCheck }) {
  return (
    <>
      {data.map((ele, index) => {
        return (
          <div key={index} className="styletodo">
            <h2>Title is : {ele.todotitle}</h2>
            <input type="checkbox" onChange={()=>{handleCheck(index)}} checked={ele.type} />
            <button
              onClick={() => {
                filtertodo(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default SmallTodo;

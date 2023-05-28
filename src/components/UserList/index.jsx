import "../../App.css";
import "./UserList.css"
import React, { useState } from "react";

function UserList({ users }) {
  const [rel, setRel] = useState([]);
  const [clicked, setClicked] = useState("");

  const clickElem = (user) => {
    if (clicked === user.id){
        setRel([]);
        setClicked("");
        return;
    }
    setRel(user.relations);
    setClicked(user.id);
  };

  return (
    <div className="App">
        {users.map((obj) => (
          <div key={obj.id}
            onClick={() => clickElem(obj)}
            className={
              rel.includes(obj.id)
                ? "box green"
                : clicked === obj.id
                ? "box orange"
                : "box"
            }>
            <p>{obj.content}</p>

            </div>))}
    </div>
  );
}

export default UserList;
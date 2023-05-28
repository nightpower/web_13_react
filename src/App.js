import "./App.css";
import UserList from "./components/UserList";
import dataJson from "./data.json";

function App() {
  return (
    <div className="App">
      <UserList users={dataJson} />
    </div>
  );
}

export default App;
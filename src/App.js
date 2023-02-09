import "./App.css";
import Address from "./components/Profil/Address";
import FullName from "./components/Profil/FullName";
import ProfilePhoto from "./components/Profil/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;

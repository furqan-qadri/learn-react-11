import UserDetails from "./components/UserDetails";
import { UserData } from "./utils/UserData";

function App() {
  return (
    <>
      <UserDetails UserData={UserData} />
    </>
  );
}

export default App;

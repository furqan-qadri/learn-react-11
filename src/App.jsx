import ConditionalRendering from "./components/ConditionalRendering";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import { UserData } from "./utils/UserData";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* <UserDetails UserData={UserData} /> */}
        {/* <ConditionalRendering /> */}
        <LoginForm />
      </div>
    </>
  );
}

export default App;

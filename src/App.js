import { Container, Col, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import SideNavBar from "./components/Navbar";
import Routing from "./Routing";
import Headbar from "./components/Headbar";
import { AccountList, AddAccount, RecordJournal, Login, Home } from "./pages";

function App() {
  return (
    <>
      <Routing />
      <SideNavBar />
      <Headbar />
      {/* <AccountList /> */}
      {/* <AddAccount /> */}
      {/* <RecordJournal /> */}
      <Login />
      {/* <Example /> */}
    </>
  );
}

export default App;

import { Container, Col, Row } from "react-bootstrap";
import Dashboard from "./pages/dashboard/index";
import { Provider } from "react-redux";
import SideNavBar from "./components/Navbar";
import Headbar from "./components/Headbar";
import AccountList from "./pages/accountlist/acccountlist";
import AddAccount from "./pages/addaccount/addaccount";
import RecordJournal from "./pages/recordjournal/recordjournal";
import Example from "./pages/recordjournal/example";

function App() {
  return (
    <>
      <SideNavBar />
      <Headbar />
      {/* <AccountList /> */}
      {/* <AddAccount /> */}
      <RecordJournal />
      {/* <Example /> */}
    </>
  );
}

export default App;

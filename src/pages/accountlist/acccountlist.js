import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import {
  PencilFill,
  Plus,
  Printer,
  TabletFill,
  Trash,
  Table as TableIcon,
} from "react-bootstrap-icons";
function AccountList() {
  return (
    <Container className="d-flex flex-column py-3">
      <Button variant="outline-primary" className="align-self-end">
        <Plus />
      </Button>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th colSpan={5}>Account Name</th>
            <th>Classification</th>
            <th>Opening Balance</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td>1-0000</td>
            <td> ASET</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.128.992.202.214</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td>1-10000</td>
            <td>Aset Lancar</td>
            <td></td>
            <td></td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.43.111.643.856</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td></td>
            <td>1-1100</td>
            <td>Kas & Setara Kas</td>
            <td></td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.35.248.325.887</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-1101</td>
            <td>Kas</td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.-332.103.057</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-1102</td>
            <td>
              Bank Mandiri <br />
              1080013328803
            </td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.10.381.702</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-1103</td>
            <td>
              Bank Muamalat <br /> 2210047554
            </td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.11.570.047.242</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-between">
              <Button variant="outline-primary">
                <PencilFill />
              </Button>
              <Button variant="outline-danger">
                <Trash />
              </Button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>1-1104</td>
            <td>
              Bank Muamalat <br /> 2210047977
            </td>
            <td>Asset</td>
            <td>Rp.0</td>
            <td>Rp.24.000.000.000</td>
          </tr>
        </tbody>
      </Table>
      <div className="Container d-flex justify-content-start pl-2">
        <Button variant="outline-dark" className="">
          <Printer />
        </Button>
        <Button variant="outline-dark">
          <TableIcon />
        </Button>
      </div>
    </Container>
  );
}

export default AccountList;

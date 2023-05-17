import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";

import { Plus } from "react-bootstrap-icons";

function RecordJournal() {
  return (
    <Container className=" py-3">
      <Form style={{ width: "40%" }}>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-evenly"
          controlId="formPlaintextGeneralJournal"
        >
          <Form.Label column sm="3" style={{ whiteSpace: "nowrap" }}>
            General Journal#
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Asset" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextDateRecord"
        >
          <Form.Label column sm="3" style={{ whiteSpace: "nowrap" }}>
            Date
          </Form.Label>
          <Col sm="4">
            <Form.Control type="date" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMemo">
          <Form.Label column sm="3">
            Memo
          </Form.Label>
          <Col sm="9">
            <textarea type="text" style={{ width: "100%" }} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextVendor">
          <Form.Label column sm="3">
            Vendor
          </Form.Label>

          <Col sm="5">
            <InputGroup>
              <InputGroup.Text></InputGroup.Text>
              <Form.Control type="text" placeholder="" />
            </InputGroup>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextVendor">
          <Form.Label column sm="3"></Form.Label>

          <Col sm="5">
            <Button variant="outline-secondary">
              <Plus /> Add Vendor
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Button variant="outline-primary" className="align-self-end">
        <Plus />
      </Button>
      <Table responsive>
        <thead>
          <tr>
            <th colSpan={5}>Account</th>
            <th colSpan={4}>Debit</th>
            <th colSpan={4}>Credit</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>
              <InputGroup>
                <Form.Control type="text" placeholder="" />
                <span style={{ float: "right" }}>x</span>
              </InputGroup>
            </td>
            <td colSpan={4}>
              <InputGroup>
                <Form.Control type="text" placeholder="" />
              </InputGroup>
            </td>
            <td colSpan={4}>
              <InputGroup>
                <Form.Control type="text" placeholder="" />
                <InputGroup.Text>
                  <Button>x</Button>
                </InputGroup.Text>
              </InputGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="Container d-flex justify-content-start pl-2">
        <Button variant="outline-dark" className="">
          {/* <Printer /> */}
        </Button>
        <Button variant="outline-dark">{/* <TableIcon /> */}</Button>
      </div>
    </Container>
  );
}

export default RecordJournal;

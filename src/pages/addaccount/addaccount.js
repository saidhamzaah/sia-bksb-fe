import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Container, Row, Col, InputGroup } from "react-bootstrap";
import { ArrowLeft, Check2 } from "react-bootstrap-icons";

function AddAccount() {
  return (
    <Container className="d-flex justify-content-around py-5">
      <Form style={{ width: "80%" }}>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-evenly"
          controlId="formPlaintextAccountClassification"
        >
          <Form.Label column sm="3" style={{ whiteSpace: "nowrap" }}>
            Account Classification
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Asset" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextAccountType"
        >
          <Form.Label column sm="3" style={{ whiteSpace: "nowrap" }}>
            Account Type
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Asset" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextAccountParent"
        >
          <Form.Label column sm="3">
            Account Parent
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextAcountNumber"
        >
          <Form.Label column sm="3">
            Account Number
          </Form.Label>

          <Col sm="3">
            <InputGroup>
              <InputGroup.Text>1 -</InputGroup.Text>
              <Form.Control type="number" placeholder="" />
            </InputGroup>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextAccountName"
        >
          <Form.Label column sm="3">
            Account Name
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextOpeningBalance"
        >
          <Form.Label column sm="3">
            Opening Balance
          </Form.Label>
          <Col sm="9">
            <InputGroup>
              <InputGroup.Text>Rp.</InputGroup.Text>
              <Form.Control type="Number" placeholder="" />
            </InputGroup>
          </Col>
          <Col sm={3}></Col>
          <Col sm={9}>
            <div className="d-flex justify-content-between py-5">
              <Button variant="outline-primary">
                <ArrowLeft />
                Back
              </Button>
              <Button variant="outline-primary">
                <Check2 />
                Save Account
              </Button>
            </div>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default AddAccount;

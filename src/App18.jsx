import {
  Spinner,
  Pagination,
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState } from "react";

function App18() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Form.Group controlId="idInput">
        <Form.Label>아이디</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="passwordInput">
        <Form.Label>패스워드</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group controlId="contentTextarea">
        <Form.Label>본문</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <hr />
      <Button onClick={() => setShow(!show)}>모달 예제</Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Lorem ipsum dolor sit amet.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          facere illo laboriosam nihil nostrum quia quibusdam quos tempore
          veniam voluptates. Accusantium atque consequatur dolorum enim est in
          itaque laboriosam magni.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button onclick={() => setShow(!show)}>Save</Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand>PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">LINK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      <Pagination>
        <Pagination.Prev>
          <GrPrevious />
        </Pagination.Prev>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active={true}>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next>
          <GrNext />
        </Pagination.Next>
      </Pagination>
      <hr />
      <Spinner />
      <Spinner animation="border" />
      <Spinner animation="grow" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
    </div>
  );
}

export default App18;

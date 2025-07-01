import {
  Spinner,
  Pagination,
  Navbar,
  Container,
  Nav,
  Modal,
  Button,
  Form,
  FloatingLabel,
  Carousel,
} from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState } from "react";

function App18() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bee.jpg" alt="" />
          <Carousel.Caption>
            <h3>꿀벌</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores assumenda at cum dolor ducimus earum eligendi in
              inventore ipsa ipsam iste iure molestiae quam quas, quibusdam,
              repudiandae saepe unde ut.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bear.jpg" alt="" />
          <Carousel.Caption>
            <h3>아기곰</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              aperiam, autem dicta dolores doloribus, ea exercitationem harum
              ipsum odit officiis optio praesentium quisquam, reiciendis sit
              vero. Aperiam assumenda excepturi saepe!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/eagle.jpg" alt="" />
          <Carousel.Caption>
            <h3>독수리</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum
              eos ipsum nemo odit officiis quam recusandae sapiente voluptatibus
              voluptatum! Autem consequuntur deleniti deserunt impedit inventore
              modi officia perspiciatis temporibus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/bull.jpg" alt="" />
          <Carousel.Caption>
            <h3>황소</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              eligendi, eum ipsam iusto molestiae quasi rerum sed? Ab aliquam,
              eos excepturi fuga iusto minus pariatur possimus qui quos rerum
              temporibus?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/lion.jpg" alt="" />
          <Carousel.Caption>
            <h3>사자</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              error iure optio repudiandae. Eligendi facilis incidunt, molestiae
              nemo obcaecati pariatur perferendis placeat quae qui quis rerum
              similique soluta vero! Deleniti.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/shark.jpg" alt="" />
          <Carousel.Caption>
            <h3>상어</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur dolor, facere, fugiat ipsa ipsam nemo porro
              provident rerum similique sunt tenetur, voluptates voluptatibus!
              Expedita illum inventore suscipit ullam voluptates.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/public/tiger.jpg" alt="" />
          <Carousel.Caption>
            <h3>호랑이</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              consectetur cum, delectus earum facilis fugiat in neque nostrum
              optio, quos, repudiandae saepe ullam unde vel voluptates. A
              delectus eum reiciendis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <FloatingLabel label="아이디를 입력해주세요." controlId="idFloatingInput">
        <Form.Control placeholder="아이디를 입력해주세요." />
      </FloatingLabel>
      <FloatingLabel
        label="패스워드를 입력해주세요."
        controlId="passwordFloatingInput"
      >
        <Form.Control type="password" placeholder="패스워드를 입력해주세요." />
      </FloatingLabel>
      <hr />
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

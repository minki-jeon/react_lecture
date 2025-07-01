import { Button, Alert, Table } from "react-bootstrap";

function App16() {
  return (
    <>
      <button className={"btn btn-primary"}>저장</button>
      <Button>등록</Button>
      <Button variant="warning">경고</Button>
      <Button variant="danger">위험</Button>
      <Button>버튼 </Button>
      <hr />

      <button className="btn btn-outline-danger btn-lg">Lorem.</button>
      <Button variant="outline-danger" size="lg">
        Lorem.
      </Button>
      <hr />
      <Alert variant="danger">위험 경고</Alert>
      <Alert variant="info">정보 알림</Alert>
      <Alert variant="warning">정보 알림</Alert>
      <Alert variant="success">정보 알림</Alert>
      {/*  연습 : Alert 만들어보기*/}
      <hr />
      {/*  연습 : Table component 사용해서 아래와 같은 table 만들어보기  */}
      {/*table.table.table-striped.table-bordered.table-hover>thead>tr>th*3>lorem1^^^tbody>tr*3>td*3>lorem1*/}
      <Table striped={true} bordered={true} hover={true}>
        {/*<table className="table table-striped table-bordered table-hover">*/}
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Doloribus!</th>
            <th>Nostrum?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Quos.</td>
            <td>Eligendi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Molestias.</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Commodi!</td>
            <td>Officiis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Autem!</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Delectus?</td>
            <td>Ipsum!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Vero.</td>
            <td>Non!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Aliquam!</td>
            <td>Accusamus?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Laudantium!</td>
            <td>Perferendis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Doloribus?</td>
            <td>Culpa?</td>
          </tr>
        </tbody>
        {/*</table>*/}
      </Table>
    </>
  );
}

export default App16;

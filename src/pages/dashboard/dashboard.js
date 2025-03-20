import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./dashboard.css";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employee");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log("error fetching employees", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "DELETE",
      });

      // Kiểm tra phản hồi từ server
      const message = await response.text();
      console.log("Server response:", message);

      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      } else {
        console.error("Error deleting employee:", message);
      }
    } catch (error) {
      console.log("Error deleting employee", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Employee</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant="outline-secondary" className="me-2">
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;

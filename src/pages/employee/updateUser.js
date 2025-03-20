import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import "./updateUser.css";

const updateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/employee/${id}`
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.log("Error fetching user", error);
      }
    };
    getUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("User updated", data);
      navigate("/");
    } catch (error) {
      console.log("Error updating user", error);
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Edit User</h1>
        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Phone */}
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Department */}
          <Form.Group controlId="formBasicDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Edit User
          </Button>
        </Form>
      </div>
    </>
  );
};
export default updateUser;

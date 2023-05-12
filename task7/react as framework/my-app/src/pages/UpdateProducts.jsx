import { Button, Container, Form } from "react-bootstrap";
import "./../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const {id}=useParams();
  console.log(id);
  
  const UpdateProduct = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:3000/products/${id}`,
        {
          id : id,
          title: title,
          description,
        },
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          navigate("/home");
        }
      });

     
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={UpdateProduct} style={{ width: "800px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter Title"
           
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>description</Form.Label>
          <Form.Control
            onChange={(event) => setDescription(event.target.value)}
            type="text"
           
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>

  
  );
}

export default UpdateProduct;

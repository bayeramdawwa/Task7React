import { Button, Container, Form } from "react-bootstrap";
import "./../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Delete.css'

function DeletProduct() {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const DeletProduct = (event) => {
        event.preventDefault();
        axios
            .delete(
                `http://localhost:3000/products/${id}`,

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
            <Form style={{ width: "800px", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>are you sure</Form.Label>

                </Form.Group>
                <Link variant="primary"  className="yes" onClick={DeletProduct}>
                    Yes
                </Link>
                <Link className="no" to="/home" variant="primary" type="submit" >
                    NO
                </Link>
            </Form>
        </Container>


    );
}

export default DeletProduct;

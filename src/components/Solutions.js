import React, { useState } from "react";
import Solution from "./Solution";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import NewSolution from "./NewSolution";

export default function Solutions() {
  const initialData = [
    <Solution
      item={{
        date: "12/28/2018",
        problem:
          "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.",
        answer: 233168,
        solution: "solution",
        key:"1"
      }}
    />,
    <Solution
      item={{
        date: "12/29/2018",
        problem: `Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:<br/> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...<br/>
           By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.`,
        answer: 4613732,
        solution: "solution",
        key:"2picpicw2W=6P"
      }}
    />
  ];

  const [solutions, setSolutions] = useState(initialData);
  const [newSolution, setNewSolution] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setSolutions([
      ...solutions,
      <Solution
        item={newSolution}
      />
    ]);
    console.log(solutions);
  };

  const handleChange = e => {
    setNewSolution({ ...newSolution, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  return (
    <div className="solutions">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <button>Add New Solution</button>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="mx-auto">
              <Form style={{ width: 500, margin: "0 auto" }}>
                <Form.Group controlId="input1">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={newSolution.date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Problem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="problem"
                    value={newSolution.problem}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="input2">
                  <Form.Label>Answer</Form.Label>
                  <Form.Control
                    type="text"
                    name="answer"
                    value={newSolution.answer}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Solution</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {solutions}        
      </Accordion>
      <button onClick={handleSubmit}>More</button>
    </div>
  );
}

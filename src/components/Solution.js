import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

export default function Solution({ item }) {
  return (
    <div className="solution">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={item.key}>
            {item.date} <br />
            {item.problem} <br />
            answer:{item.answer}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={item.key}>
          <Card.Body> {item.solution} </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}

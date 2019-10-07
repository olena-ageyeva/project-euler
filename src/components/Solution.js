import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { Sandbox, withDependencies } from "react-sandbox-editor";

const ReactSandbox = withDependencies([
  "https://unpkg.com/react@16.6.0/umd/react.development.js",
  "https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js"
])(Sandbox);

export default function Solution({ item }) {
  return (
    <div className="solution">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} eventKey={item.key}>            
            <p>Problem: <br/>
            {item.problem}</p> <br />
            <span className="solutionSpan">answer: { item.answer }</span> <span className="solutionSpan">solved: {item.date}</span>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={item.key}>
          <Card.Body>
            <ReactSandbox
              displayMode="horizontal-split"
              executeOnCodeChange
              executeOnCodeChangeDebounce={1000}
              horizontalSplitOffset={50}
              onDisplayModeButtonClick={function() {}}
              permissions={[
                "allow-pointer-lock",
                "allow-popups",
                "allow-modals",
                "allow-same-origin",
                "allow-scripts",
                "allow-top-navigation",
                "allow-forms"
              ]}
              theme="solarized_light"
              scriptEditor={{
                defaultValue: `${item.solution} ReactDOM.render(\n <Solution />,\n  document.getElementById(\'root\')\n);`,
                mode: "jsx",
                readOnly: false,
                wrapLines: false
              }}
              templateEditor={{
                defaultValue: '<div id="root"></div>',
                mode: "html",
                readOnly: false,
                wrapLines: false
              }}
            ></ReactSandbox>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}

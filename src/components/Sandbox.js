import React from 'react';
import ReactDOM from 'react-dom';
import { Sandbox, withDependencies } from "react-sandbox-editor";
 
const ReactSandbox = withDependencies([
  "https://unpkg.com/react@16.6.0/umd/react.development.js",
  "https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js"
])(Sandbox);
 
let App = () => (
  <ReactSandbox
    theme="solarized_dark"
    scriptEditor={{
      defaultValue: 'ReactDOM.render(\n  <h1>Hello, world!</h1>,\n  document.getElementById(\'root\')\n);',
      mode: 'jsx',
      readOnly: false,
      wrapLines: false
    }}
    templateEditor={{
      defaultValue: '<div id="root"></div>',
      mode: 'html',
      readOnly: false,
      wrapLines: false
    }}
  />
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
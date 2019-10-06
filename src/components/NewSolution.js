import React from "react";

export default function NewSolution() {
  const submitFormHandler = e => {
    console.dir(e.target.name); //will give us the name value
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div>
          <input type="text" name="name" />
        </div>
      </form>
    </div>
  );
}

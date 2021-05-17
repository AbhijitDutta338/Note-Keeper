import React from "react";

function CreateNote(props) {
  const [note, setnote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(note);
            setnote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default CreateNote;

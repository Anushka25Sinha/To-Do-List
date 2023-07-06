import React, { useState } from 'react'

export default function Input(props) {

  const [inputText, setinputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText)
      setinputText("")
    }
  }
  return (
    <div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Type here"
          value={inputText}
          onChange={e => {
            setinputText(e.target.value)
          }}
          onKeyDown={handleEnterPress}

        />
        <button className="button" type=""
          onClick={() => {
            props.addList(inputText)
            setinputText("")
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

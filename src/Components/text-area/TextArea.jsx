import { Editor, EditorState, getDefaultKeyBinding } from "draft-js";
import { useEffect, useState } from "react";
import "./TextArea.css";

import getCurrentLineData from "../util-functions/getCurrentLineData";
import handleEditorAction from "../control-actions/actionHandler";
import Button from "../ui/subcomponents/Button";

import retrieveFromLocalStorage from "../../local-storage/retrieveFromLocalStorage";
import saveToLocalStorage from "../../local-storage/saveToLocalStorage";

function TextArea() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  let className = "RichEditor-editor";

  // TODO : Move to another file for styles?
  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
    RED_TEXT: {
      color: "red",
    },
  };

  useEffect(() => {
    const loadEditorContent = () => {
      const contentStateData = retrieveFromLocalStorage();
      let newEditorState = {};
      console.log(contentStateData);
      if (contentStateData) {
        newEditorState = EditorState.createWithContent(contentStateData);
      } else {
        newEditorState = EditorState.createEmpty();
      }
      setEditorState(newEditorState);
    };

    loadEditorContent();
  }, []);

  /**
   *
   * @param {*} e
   * @param {EditorState} editorState
   * @returns
   */
  function handleReturnActionInTextArea(e, editorState) {
    if (e.keyCode == 13) {
      const currentChangeData = getCurrentLineData(editorState);
      const updatedEditorState = handleEditorAction(
        editorState,
        currentChangeData.text,
        currentChangeData
      );
      setEditorState(updatedEditorState);
    }

    return getDefaultKeyBinding(e);
  }

  /**
   *
   * @param {EditorState} editorState
   */
  function handleChange(editorState) {
    const currentChangeData = getCurrentLineData(editorState);
    const updatedEditorState = handleEditorAction(
      editorState,
      currentChangeData.text,
      currentChangeData
    );
    setEditorState(updatedEditorState);
  }

  function onSaveEvent() {
    saveToLocalStorage(editorState);
  }
  // var contentState = editorState.getCurrentContent();
  // if (!contentState.hasText()) {
  //   if (contentState.getBlockMap().first().getType() !== "unstyled") {
  //     className += " RichEditor-hidePlaceholder";
  //   }
  // }

  return (
    <div className="editorRootContainer">
      <div className={className}>
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          onChange={handleChange}
          keyBindingFn={(e) => handleReturnActionInTextArea(e, editorState)}
        />
      </div>
      <Button onClickEvent={onSaveEvent}></Button>
    </div>
  );
}

export default TextArea;

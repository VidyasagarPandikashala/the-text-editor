import { Editor, EditorState, getDefaultKeyBinding } from "draft-js";
import { useEffect, useState } from "react";
import "./TextArea.css";
import retrieveFromLocalStorage from "../../../local-storage/retrieveFromLocalStorage";
import getCurrentLineData from "../../ui/page/homepage/util-functions/getCurrentLineData";
import EditorAction from "../../ui/page/homepage/util-functions/control-actions/control-action-handler/EditorAction";
import { useRef } from "react";

function TextArea({ onEditorStateChange }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorRef = useRef(null);
  let className = "RichEditor-editor";

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
    editorRef.current.focus();
  }, []);

  /*
   * Here the TexTArea is providing the state of the editorState each is changing its state to the Homepage component.
   **/
  useEffect(() => {
    onEditorStateChange(editorState);
  }, [editorState, onEditorStateChange]);

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

      const updatedEditorState = EditorAction.controlTextAreaAction(
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

    const updatedEditorState = EditorAction.controlTextAreaAction(
      editorState,
      currentChangeData.text,
      currentChangeData
    );
    setEditorState(updatedEditorState);
  }

  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += " RichEditor-hidePlaceholder";
    }
  }
  function blockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "code-block") {
      return "myCodeBlockStyle";
    }
  }

  return (
    <div
      className="editorRootContainer"
      onClick={() => editorRef.current.focus()}
    >
      <div className={className}>
        <Editor
          ref={editorRef}
          placeholder="Enter text here"
          customStyleMap={styleMap}
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          onChange={handleChange}
          keyBindingFn={(e) => handleReturnActionInTextArea(e, editorState)}
        />
      </div>
    </div>
  );
}

export default TextArea;

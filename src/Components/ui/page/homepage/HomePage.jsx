import { useCallback } from "react";
import { useState } from "react";
import saveToLocalStorage from "../../../../local-storage/saveToLocalStorage";
import styles from "./HomePage.module.css";
import CommandArea from "./command-area/CommandArea";
import TextArea from "../../../shared/text-area/TextArea";
import Button from "../../../shared/button/Button";

function HomePage() {
  const [editorState, setEditorState] = useState("");

  const onSaveEvent = useCallback(() => {
    saveToLocalStorage(editorState);
  }, [editorState]);

  /*
   * Here the Homepage recieves the state of the editorState from  the Homepage component.
   **/
  const handleEditorStateChange = useCallback((newState) => {
    setEditorState(newState);
  }, []);

  return (
    <>
      <div className={styles.containerWrapper}>
        {/* TODO change the component name to CustomTextEditor or CustomTextArea */}
        <h1 className={styles.headingStyle}>The Text Editor</h1>
        <div className={styles.homePageContainer}>
          <CommandArea></CommandArea>
          <div className={styles.TextAreaContainer}>
            <TextArea onEditorStateChange={handleEditorStateChange}></TextArea>
            <Button onClickEvent={onSaveEvent}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

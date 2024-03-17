import { convertToRaw } from "draft-js";

export default function saveToLocalStorage(editorState) {
  const contentState = editorState.getCurrentContent();
  const raw = convertToRaw(contentState);

  localStorage.setItem("editorContent", JSON.stringify(raw));
}

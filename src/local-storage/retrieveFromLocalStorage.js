import { convertFromRaw } from "draft-js";

function retrieveFromLocalStorage() {
  //   const myData = localStorage.getItem("editorContent");
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem("editorContent")
  );
  if (dataFromLocalStorage) {
    return convertFromRaw(dataFromLocalStorage);
  }
  return null;
}

export default retrieveFromLocalStorage;

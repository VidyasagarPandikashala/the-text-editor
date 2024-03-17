import { RichUtils } from "draft-js";

function setUnstyled(editorState, text, currentChangeData) {
  const stylesAtCursor = editorState.getCurrentInlineStyle();
  let newEditorState = editorState;

  if (currentChangeData.blockType === "header-one") {
    newEditorState = RichUtils.toggleBlockType(newEditorState, "header-one");
  }
  if (stylesAtCursor.has("RED_TEXT")) {
    newEditorState = RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT");
  }
  if (stylesAtCursor.has("BOLD")) {
    newEditorState = RichUtils.toggleInlineStyle(newEditorState, "BOLD");
  }
  let getState = newEditorState.getCurrentInlineStyle();
  console.log("#############");
  getState.forEach((element) => {
    console.log(element);
  });
  return newEditorState;
}

export default setUnstyled;

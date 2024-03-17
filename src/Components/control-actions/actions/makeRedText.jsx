import { EditorState, Modifier, RichUtils } from "draft-js";

function makeRedText(editorState, text, currentChangeData) {
  const newText = text.replace("** ", "");

  const newContentState = Modifier.replaceText(
    currentChangeData.contentState,
    currentChangeData.selectionState.merge({
      anchorOffset: 0,
      focusOffset: currentChangeData.text.length,
    }),
    newText
  );

  let newEditorState = EditorState.push(
    editorState,
    newContentState,
    "change-block-type"
  );
  newEditorState = RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT");
  return newEditorState;
}

export default makeRedText;

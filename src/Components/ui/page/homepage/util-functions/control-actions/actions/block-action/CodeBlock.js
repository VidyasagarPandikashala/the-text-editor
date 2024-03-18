import { EditorState, Modifier, RichUtils } from "draft-js";
import TextActionStrategy from "../../text-action-strategy/TextActionStrategy";

export default class CodeBlock extends TextActionStrategy {
  execute(editorState, text, currentChangeData) {
    const newText = text.replace("``` ", "");

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
    newEditorState = RichUtils.toggleBlockType(newEditorState, "code-block");
    return newEditorState;
  }
}

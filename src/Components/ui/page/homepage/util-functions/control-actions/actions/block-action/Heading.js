import { EditorState, Modifier, RichUtils } from "draft-js";
import TextActionStrategy from "../../text-action-strategy/TextActionStrategy";

export default class Heading extends TextActionStrategy {
  execute(editorState, text, currentChangeData) {
    const newText = text.replace("# ", "");

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
    newEditorState = RichUtils.toggleBlockType(newEditorState, "header-one");
    // ...Rest of the logic to apply heading style
    return newEditorState;
  }
}

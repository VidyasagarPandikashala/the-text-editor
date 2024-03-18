import { EditorState, Modifier, RichUtils } from "draft-js";
import TextActionStrategy from "../../text-action-strategy/TextActionStrategy";

export default class RedText extends TextActionStrategy {
  execute(editorState, text, currentChangeData) {
    // Implementation of makeRedText

    const selection = {
      anchor: 0,
      focus: 0,
    };

    selection.anchor = text.indexOf("** ");
    selection.focus = selection.anchor + 3;

    const newContentState = Modifier.replaceText(
      currentChangeData.contentState,
      currentChangeData.selectionState.merge({
        anchorOffset: selection.anchor,
        focusOffset: selection.focus,
      }),
      ""
    );

    let newEditorState = EditorState.push(
      editorState,
      newContentState,
      "change-inline-style"
    );
    newEditorState = RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT");
    return newEditorState;
  }
}

import { RichUtils } from "draft-js";
import TextActionStrategy from "../../text-action-strategy/TextActionStrategy";

export default class Unstyled extends TextActionStrategy {
  execute(editorState, text, currentChangeData) {
    const stylesAtCursor = editorState.getCurrentInlineStyle();
    let newEditorState = editorState;

    if (currentChangeData.blockType === "header-one") {
      newEditorState = RichUtils.toggleBlockType(newEditorState, "header-one");
    }

    if (currentChangeData.blockType === "code-block") {
      newEditorState = RichUtils.toggleBlockType(newEditorState, "code-block");
    }
    if (stylesAtCursor.has("RED_TEXT")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "RED_TEXT");
    }
    if (stylesAtCursor.has("BOLD")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "BOLD");
    }
    if (stylesAtCursor.has("UNDERLINE")) {
      newEditorState = RichUtils.toggleInlineStyle(newEditorState, "UNDERLINE");
    }
    return newEditorState;
  }
}

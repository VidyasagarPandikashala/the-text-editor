import { getDefaultKeyBinding } from "draft-js";
import actionHandler from "../control-actions/actionHandler";
import getCurrentLineData from "./getCurrentLineData";

function handleReturnAction(e, editorState) {
  if (e.keyCode == 13) {
    const currentChangeData = getCurrentLineData(editorState);
    actionHandler(editorState, "none", currentChangeData);
  }
  return getDefaultKeyBinding(e);
}
export default handleReturnAction;

import applyHeading from "./actions/applyHeading";
import makeBold from "./actions/makeBold";
import makeRedText from "./actions/makeRedText";
import setUnstyled from "./actions/setUnstyled";

const allActions = {
  "# ": applyHeading,
  "** ": makeRedText,
  "* ": makeBold,
};

function handleEditorAction(editorState, text, currentChangeData) {
  // TODO: Showld we have the entire logic under another method. This is to update the formatting based on the text
  // TODO: Move this logic to another function. Pass only text from here and the corresponding line formatter function should return the method
  let actionKey = Object.keys(allActions).find((eachAction) =>
    text.startsWith(eachAction)
  );

  // TODO create a function for the condtion for better readability like isEmptyLine
  if (!actionKey && text.trim() === "") {
    return setUnstyled(editorState, text, currentChangeData);
  } else if (actionKey) {
    return allActions[actionKey](editorState, text, currentChangeData);
  }
  return editorState;
}

export default handleEditorAction;

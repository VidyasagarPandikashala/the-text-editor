import ControlActionFactory from "../control-action-factory/ControlActionFactory";

// TODO: Since editorState has all the required data, do we need the next two parameter.
//       OR only send currentlyChangeData which would have all required methods at root level

export default class EditorAction {
  static controlTextAreaAction(editorState, text, currentChangeData) {
    const action = ControlActionFactory.getAction(text);
    if (action) {
      return action.execute(editorState, text, currentChangeData);
    }
    return editorState;
  }
}

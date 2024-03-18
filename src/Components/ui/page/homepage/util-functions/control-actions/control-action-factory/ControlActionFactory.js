import CodeBlock from "../actions/block-action/CodeBlock";
import Heading from "../actions/block-action/Heading";
import Bold from "../actions/inline-action/Bold";
import RedText from "../actions/inline-action/RedText";
import Underline from "../actions/inline-action/Underline";
import Unstyled from "../actions/reset-action/Unstyled";

export default class ControlActionFactory {
  static getAction(text) {
    if (text.startsWith("# ")) {
      return new Heading();
    } else if (text.startsWith("** ")) {
      return new RedText();
    } else if (text.startsWith("* ")) {
      return new Bold();
    } else if (text.startsWith("``` ")) {
      return new CodeBlock();
    } else if (text.startsWith("*** ")) {
      return new Underline();
    } else if (text.trim() === "") {
      return new Unstyled();
    }
    return null;
  }
}

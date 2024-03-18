/**
 *
 * @param {*} editorState
 * @returns
 */

export default function getCurrentLineData(editorState) {
  // Get the current selection state
  const selectionState = editorState.getSelection();

  // Get the start key of the current selection
  const startKey = selectionState.getStartKey();

  // Get the current content state from the editor state
  const contentState = editorState.getCurrentContent();

  // Find the block for the current selection
  const currentBlock = contentState.getBlockForKey(startKey);

  // Get the text content of the block
  const text = currentBlock.getText();

  // Optional: Get the type of the block (e.g., 'unstyled' for plain text)
  const blockType = currentBlock.getType();

  // Return the current line data
  return {
    selectionState,
    text, // The text content of the current line
    startKey,
    currentBlock,
    contentState,
    blockType, // The type of block (e.g., paragraph, header, etc.)
    // Add any other data you need from the block
  };
}

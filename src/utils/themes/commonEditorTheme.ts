import { EditorView } from '@uiw/react-codemirror';

export const commonEditorTheme = EditorView.baseTheme({
  '&.cm-editor.cm-focused': {
    outline: 'none',
  },
});

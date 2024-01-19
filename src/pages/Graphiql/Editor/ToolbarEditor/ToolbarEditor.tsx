import { json } from '@codemirror/lang-json';
import ReactCodeMirror from '@uiw/react-codemirror';
import { editorToolbarTheme } from '../../../../utils/themes/editorToolbarTheme';
import { ToolbarEditorPros } from './ToolbarEditor.interface';
import styles from './ToolbarEditor.module.scss';

const ToolbarEditor = ({ value, onChange }: ToolbarEditorPros) => {
  return (
    <ReactCodeMirror
      data-testid="toolbar-editor"
      className={styles.editor}
      value={value}
      extensions={[json()]}
      onChange={onChange}
      theme={editorToolbarTheme}
    />
  );
};
export default ToolbarEditor;

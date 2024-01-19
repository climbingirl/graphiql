import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { viewerTheme } from '../../../utils/themes/viewerTheme';
import { useAppSelector } from '../../../store/hooks';
import {
  loadingStatusSelector,
  responseDataSelector,
} from '../../../store/playgroundSlice/playgroundSelectors';
import Loader from '../../../components/Loader/Loader';
import styles from './Viewer.module.scss';
import { serializeToJSON } from '../../../utils/helpers';

const Viewer = () => {
  const responseData = useAppSelector(responseDataSelector);
  const isDataLoading = useAppSelector(loadingStatusSelector);
  const value = responseData ? serializeToJSON(responseData) : '';

  if (isDataLoading) {
    return <Loader />;
  }

  return (
    <CodeMirror
      data-testid="code-mirror"
      className={styles.editor_json}
      value={value}
      theme={viewerTheme}
      editable={false}
      readOnly={true}
      extensions={[json()]}
      basicSetup={{ lineNumbers: false }}
    />
  );
};
export default Viewer;

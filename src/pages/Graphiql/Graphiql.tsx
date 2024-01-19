import Editor from './Editor/Editor';
import Viewer from './Viewer/Viewer';
import styles from './Graphiql.module.scss';
import { useAuth } from '@src/hooks/useAuth';
import { Suspense, lazy, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiInput from './ApiInput/ApiInput';
import docs from '@assets/icons/docs.svg';
import Loader from '@src/components/Loader/Loader';
import { RootState } from '@src/store/store';
import { useSelector } from 'react-redux';
import { useLocalization } from '@src/hooks/useLocalization';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@src/services/firebaseApi/firebaseApi';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@src/router/routes';

const LazyDocumentation = lazy(
  () => import('@src/components/Documentation/Documentation')
);

const GraphiqlPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { isSignIn, setIsSignIn, signOut } = useAuth();
  const { localizationData } = useLocalization();
  const { toastMessages, grahpiql } = localizationData;
  const [showDocs, setShowDocs] = useState(false);

  const handleClick = () => {
    setShowDocs(!showDocs);
  };

  const graphiqlApiUrl = useSelector(
    (state: RootState) => state.playground.graphiqlApiUrl
  );

  const isDocsExists = useSelector(
    (state: RootState) => state.playground.isDocsExists
  );

  useEffect(() => {
    if (isSignIn) {
      toast.success(toastMessages.successSignIn, { draggable: false });
      setIsSignIn(false);
    }
  }, [isSignIn, setIsSignIn, toastMessages.successSignIn]);

  useEffect(() => {
    const isValidRefreshToken =
      user && user?.refreshToken != localStorage.getItem('refreshToken');
    if (isValidRefreshToken) {
      signOut(() => navigate(ROUTES.ROOT));
    }
  }, [user, signOut, navigate]);

  return (
    <>
      <div className={styles.container}>
        <ApiInput />
        <div className={styles.playground}>
          {isDocsExists &&
            (showDocs ? (
              <div className={styles['button-container']}>
                <button className={styles['docs-button']} onClick={handleClick}>
                  <img src={docs} alt="Docs" />
                </button>
                <h3>{grahpiql.docs}</h3>
              </div>
            ) : (
              <button className={styles['docs-button']} onClick={handleClick}>
                <img src={docs} alt="Docs" />
              </button>
            ))}
          {isDocsExists && (
            <Suspense
              fallback={
                <div className={styles['loader-container']}>
                  <div className={styles.loader}>
                    <Loader />
                  </div>
                </div>
              }
            >
              {showDocs && <LazyDocumentation url={graphiqlApiUrl} />}
            </Suspense>
          )}
          <div className={styles.editors}>
            <Editor />
            <Viewer />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphiqlPage;

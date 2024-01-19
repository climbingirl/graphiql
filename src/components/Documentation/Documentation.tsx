import { CacheObject } from './Documentation.interface';
import styles from './Documentation.module.scss';
import Schema from './Schema/Schema';
import { SchemaData } from './Schema/Schema.interface';
import graphiqlApi from '@src/services/graphiqlApi/graphiqlApi';
import { getIntrospectionQuery } from 'graphql';

const cache = new Map();

const fetchData = function (url: string) {
  if (!cache.has(url)) {
    cache.set(url, { promise: getData(url), value: null });
  }
  return cache.get(url);
};

const getData = async function (graphiqlApiUrl: string) {
  return await graphiqlApi.baseQuery({
    url: graphiqlApiUrl,
    data: getIntrospectionQuery(),
  });
};

const getCachedData = function (dataFromCache: CacheObject) {
  if (dataFromCache.value) {
    return dataFromCache.value;
  } else {
    dataFromCache.promise.then((data: SchemaData) => {
      dataFromCache.value = data;
    });

    throw dataFromCache.promise;
  }
};

const Documentation = ({ url }: { url: string }) => {
  const data = getCachedData(fetchData(url));

  return (
    <div className={styles.container}>
      <Schema data={data.data} />
    </div>
  );
};

export default Documentation;

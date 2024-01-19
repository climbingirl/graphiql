import ROUTES from '../router/routes';

interface linksModel {
  [key: string]: {
    link: string;
    title: string;
  };
}

export const links: linksModel = {
  '/': {
    link: ROUTES.GRAPHIQL,
    title: 'GraphiQL',
  },
  graphiql: {
    link: ROUTES.ROOT,
    title: 'Welcome page',
  },
};

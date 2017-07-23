import news from './news';

const ClientAppRoute = (app) => {
  app.use('/apiclient/getnews', news);
};

export default ClientAppRoute;

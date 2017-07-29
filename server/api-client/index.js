import news from './news';
import funs from './funs';

const ClientAppRoute = (app) => {
  app.use('/apiclient/getnews', news);
  app.use('/apiclient/getfuns', funs);
};

export default ClientAppRoute;

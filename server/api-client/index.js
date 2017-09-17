import news from './news';
import funs from './funs';
import oauth from './wxoauth';

const ClientAppRoute = (app) => {
  app.use('/apiclient/news', news);
  app.use('/apiclient/getfuns', funs);
};

export default ClientAppRoute;

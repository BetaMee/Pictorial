import news from './news';
import funs from './funs';
import oauth from './wxoauth';

const ClientAppRoute = (app) => {
  app.use('/apiclient/getnews', news);
  app.use('/apiclient/getfuns', funs);
  app.use('/apiclient/wxoauth', oauth);
};

export default ClientAppRoute;

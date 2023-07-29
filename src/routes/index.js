import apiServices from '../controllers/museumController.js';
const routers = (app) => {
  app.use('/api/v1', apiServices);
};
export default routers;

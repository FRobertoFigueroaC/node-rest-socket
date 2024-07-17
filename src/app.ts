import { createServer } from 'http';
import { envs } from './config/envs';
import { AppRoutes, Server, WssService } from './presentation';


(async()=> {
  main();
})();


function main() {

  // Express server
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  //Websocket server
  const httpServer = createServer(server.app);

  WssService.initWss({
    server: httpServer
  });

  httpServer.listen(envs.PORT, () => {
    console.log(`Server running on port: ${envs.PORT}`);
  });

  // server.start();
}
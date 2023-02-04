const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
// Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
// Load node modules
  const colors = require('colors');
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env'
  });
// `environment.ts` file structure
  const envConfigFile = `export const environment = {
  googleApiKey: '${process.env["GOOGLE_API_KEY"]}',
  apiUrl : '${process.env["API_URL"]}'
  appVersion: '${appVersion}',
  production: true,
  auth0: {
    domain: '${process.env['AUTH0_DOMAIN']}',
    clientId: '${process.env['AUTH0_CLIENT_ID']}',
    redirect_uri: '${process.env['AUTH0_CALLBACK_URL']}',
    audience: '${process.env["API_URL"]}'
    authorizationParams: {
      redirect_uri: '${process.env['AUTH0_CALLBACK_URL']}',
      audience: '${process.env["API_URL"]}'
    },
  },
};
`;
  console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
};

setEnv();

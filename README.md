# Maxwell-manager
The Maxwell Manager

# Environment variables
#### MONGO_URL
This is the mongodb url including user/password/port etc.

#### ROOT_URL
Depends on where you want the manager to live

#### PORT
Which port to listen on

# Deploying
Not sure if this is the best way, but it certainly works:

1) Clone repo
2) In repo root folder, build project: `$ meteor build .`
This creates a tarball that holds the built project
3) Extract tarball to wherever you like `$ tar -xzf` (or somethign similar)
4) **THIS IS IMPORTANT** Since this was created with an ancient node version, use node version `0.10.46`. This is easy using [n](https://www.npmjs.com/package/n)
5) Install dependencies: in bundle/programs/server/ run `$ npm install`

## Using PM2
First make sure PM2 uses the correct node version (`0.10.46`), if you have multiple node applications running, you can specify an interpreter in the `production.json` file.

6) Set environment variables properly in `production.json` also make sure the path to the entry script is correct (i.e. create a `build/` folder and put the bundle there)
6) Start server: `$ pm2 start production.json`

## Without PM2
You can also just start the server with `node bundle/main.js`, but make sure you have your environment variables set.

# Contributors
- **Jonas Carpay**
- Luc Enthoven
- Daniel Kappelle

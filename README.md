### Installation
After successful git cloning the project run the "npm install" inside your project folder

## Starting your application
- Enter the project folder

- To run your application in **development** mode execute command
  - `npm run dev`

- To run your aplication in **production** mode first execute command
  - `npm run build` to build your files, then
  - start your aplication with `npm start`
  
## Adding Google analytics tracking
- To track traffic of your application, update the google analytics tracking id inside
`components/utils/googleAnalytics.js` in line 5. 
- ReactGA.initialize('YOUR-GOOGLE-ANALYTICS-ID')

 

# PowerUs-Assignment

- Clone the project in local directory from github
- Open console with the path to your project folder
- Run command "npm install" in your console to install all dependencies
- After installing the depedencies run command (`npx cypress open`) Or (`npm run test`) to run the tests.

## Test Case Strategy:

- You can find helpers files in the helpers folder, which I have used to write reusable functions in test cases files.

- I have made data.json file and selector.json files separately in Fixtures folder to increase reusability and reduce overwork if somehing is changed in future.

- I have kept the test cases simple and tried to put as much assertions as I can for given scenerios.

- To get the course I have used the intercept method to intercept Api call and then retrieve data from its response, and stored it in a variable.

- I have integrated Mochawesome for generating the HTML and Json report.

- I have tried to choose the best options for selectors as there were no test-ids, which is always the best to select an element.

- I have used explicit waits on some screen, as the best approach would have been to intercept the api calls and then wait on top of those. Here in this situation I couldn't know which api is taking time to respond late for the page data to be loaded fully. Thats why I have used explicit wait of 3 seconds.

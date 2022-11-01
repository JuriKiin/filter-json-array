const core = require('@actions/core');
const github = require('@actions/github');

try {
  const data = core.getInput('data');
  const matcher = core.getInput('matcher');

  console.log(`Executing with: ${data}`);
  console.log(`Comparing to matcher(s): ${matcher}`);

  let filteredOutput = [];
  let splitMatches = matcher.split(',');
  let useMatch = core.getInput('use-match');

  let addToArray = (item) => {
    if (filteredOutput.includes(item)) return;
    else filteredOutput.push(item);
  }


  data.forEach(str => {
    splitMatches.forEach(match => {
        if (str.includes(match)) {
            if (useMatch) addToArray(match);
            else addToArray(str);
        }
    });
  });

  core.setOutput("array", filteredOutput);

} catch (error) {
  core.setFailed(error.message);
}
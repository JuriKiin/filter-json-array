const core = require('@actions/core');

try {
  const data = core.getInput('data').toString();
  const matcher = core.getInput('matcher');

  console.log(`Executing with: ${data}`);
  console.log(`Comparing to matcher(s): ${matcher}`);

  let splitMatches = matcher.split(',');
  let useMatch = core.getInput('use-match');

  let filteredOutput = [];

  //Convert data into JS friendly
  let cleanJSONString = data.replace(/\\/g,'');
  let cleanDataArray = JSON.parse(cleanJSONString);

  let addToArray = (item) => {
    if (!filteredOutput.includes(item)) filteredOutput.push(item);
  }

  cleanDataArray.forEach(str => {
    splitMatches.forEach(match => {
        if (str.includes(match)) {
            if (useMatch) addToArray(match);
            else addToArray(str);
        }
    });
  });

  console.log(`Output: ${filteredOutput}`);
  core.setOutput("array", filteredOutput);

} catch (error) {
  core.setFailed(error.message);
}
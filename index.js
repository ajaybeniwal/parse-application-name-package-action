const core = require('@actions/core');
try {
  // `who-to-greet` input defined in action metadata file
  const time = (new Date()).toTimeString();
  core.setOutput("product", time);
} catch (error) {
  core.setFailed(error.message);
}
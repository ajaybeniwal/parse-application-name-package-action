const core = require('@actions/core');
const fs = require('fs');
const path = require('path');
try {
  const root = path.join(process.env.GITHUB_WORKSPACE, './')
  // `who-to-greet` input defined in action metadata file
  const time = (new Date()).toTimeString();
  core.info(root);
  console.debug(root);
  core.setOutput("product", time);
} catch (error) {
  core.setFailed(error.message);
}
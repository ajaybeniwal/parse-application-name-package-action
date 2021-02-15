const core = require('@actions/core');
const fs = require('fs');
const path = require('path');
try {
  const root = path.join(process.env.GITHUB_WORKSPACE, './');
  const package = path.join(root,'package.json');
  const data = JSON.parse(fs.readFileSync(package))
  core.setOutput("product", data.name);
} catch (error) {
  core.setFailed(error.message);
}
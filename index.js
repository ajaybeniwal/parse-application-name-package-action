const core = require('@actions/core');
const fs = require('fs');
const path = require('path');
try {
  const root = path.join(process.env.GITHUB_WORKSPACE, './')
  const data = JSON.parse(fs.readFileSync(root))
  core.setOutput("product", data.name);
} catch (error) {
  core.setFailed(error.message);
}
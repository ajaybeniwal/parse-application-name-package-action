const core = require('@actions/core');
const fs = require('fs');
const path = require('path');
try {
  const root = path.join(process.env.GITHUB_WORKSPACE, './');
  const package = path.join(root,'package.json');
  const data = JSON.parse(fs.readFileSync(package))
  const[product, mfename] = data.split("/");
  core.setOutput("product", product);
  core.setOutput("mfename", mfename);
} catch (error) {
  core.setFailed(error.message);
}
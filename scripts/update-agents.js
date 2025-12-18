const fs = require('fs');
const path = require('path');

// Read package.json to get the current version
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = require(packageJsonPath);
const version = packageJson.version;

console.log(`Updating agent files to version ${version}...`);

const agentsDir = path.join(__dirname, '../agents');
const files = fs.readdirSync(agentsDir);

let updatedCount = 0;

files.forEach(file => {
  if (file.endsWith('.ghostwriter.md')) {
    const filePath = path.join(agentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the version in frontmatter
    const versionRegex = /^version: ".*"$/m;
    
    if (versionRegex.test(content)) {
      const newContent = content.replace(versionRegex, `version: "${version}"`);
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${file}`);
        updatedCount++;
      } else {
        console.log(`Skipped ${file} (already up to date)`);
      }
    } else {
      // If version doesn't exist, add it after description or name
      const descriptionRegex = /^(description: ".*")$/m;
      if (descriptionRegex.test(content)) {
        const newContent = content.replace(descriptionRegex, `$1\nversion: "${version}"`);
        fs.writeFileSync(filePath, newContent);
        console.log(`Added version to ${file}`);
        updatedCount++;
      } else {
        console.log(`Skipped ${file} (could not find version or description field)`);
      }
    }
  }
});

console.log(`\nSuccessfully updated ${updatedCount} agent files.`);

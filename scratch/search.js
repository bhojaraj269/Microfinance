const fs = require("fs");
const path = require("path");

function searchDir(dir, pattern) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".git") {
        searchDir(fullPath, pattern);
      }
    } else if (stat.isFile() && (file.endsWith(".js") || file.endsWith(".jsx"))) {
      const content = fs.readFileSync(fullPath, "utf8");
      if (content.toLowerCase().includes(pattern.toLowerCase())) {
        console.log(`Found pattern "${pattern}" in: ${fullPath}`);
      }
    }
  }
}

console.log("Searching for 'msg91'...");
searchDir("c:\\Users\\ADMIN\\OneDrive\\Attachments\\Desktop\\AgriZip - Copy\\microfinance", "msg91");

console.log("\nSearching for 'smsHelper'...");
searchDir("c:\\Users\\ADMIN\\OneDrive\\Attachments\\Desktop\\AgriZip - Copy\\microfinance", "smsHelper");

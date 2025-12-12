#!/usr/bin/env node
import { installAgents } from "./index.js";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
Ghostwriter Agents Installer

Usage:
  npx ghostwriter [options]

Options:
  --vscode      Install agents for VS Code only
  --copilot     Install agents for GitHub Copilot only
  --claude      Install agents for Claude only
  --all         Install agents for all platforms (default)
  --help, -h    Show this help message

Examples:
  npx ghostwriter                    # Install for all platforms
  npx ghostwriter --vscode           # Install for VS Code only
  npx ghostwriter --copilot --claude # Install for Copilot and Claude

About:
  Ghostwriter is a collection of AI agents designed to help you write
  high-quality technical blog posts following the "cozy web" editorial
  philosophy.

  The agents include:
  - Context Loader: Load draft articles into context
  - Interviewer: Conduct structured interviews to gather material
  - Writer: Expand outlines into comprehensive articles
  - Reviewer: Review articles against editorial guidelines
  - Voice Analyzer: Analyze and replicate your writing style

Learn more: https://github.com/eliostruyf/ghostwriter-agents-ai
`);
  process.exit(0);
}

const platforms: ("vscode" | "copilot" | "claude")[] = [];

if (args.includes("--vscode")) platforms.push("vscode");
if (args.includes("--copilot")) platforms.push("copilot");
if (args.includes("--claude")) platforms.push("claude");
if (args.includes("--all") || platforms.length === 0) {
  platforms.push("vscode", "copilot", "claude");
}

installAgents(platforms).catch((error: Error) => {
  console.error("Installation failed:", error.message);
  process.exit(1);
});

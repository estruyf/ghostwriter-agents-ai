import * as fs from "fs";
import * as path from "path";
import * as os from "os";

type Platform = "vscode" | "copilot" | "claude";

interface AgentFile {
  name: string;
  content: string;
}

const COLORS = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
};

function log(icon: string, message: string, detail?: string) {
  const detailStr = detail ? ` ${COLORS.dim}${detail}${COLORS.reset}` : "";
  console.log(`${icon} ${message}${detailStr}`);
}

function getAgentFiles(): AgentFile[] {
  const agentsDir = path.join(__dirname, "..", "agents");

  if (!fs.existsSync(agentsDir)) {
    throw new Error(`Agents directory not found at ${agentsDir}`);
  }

  const files = fs.readdirSync(agentsDir);
  const agentFiles = files.filter((f) => f.endsWith(".ghostwriter.md"));

  return agentFiles.map((file) => ({
    name: file,
    content: fs.readFileSync(path.join(agentsDir, file), "utf-8"),
  }));
}

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function installForVSCode(agents: AgentFile[]): number {
  const targetDir = path.join(process.cwd(), ".github", "agents");
  ensureDir(targetDir);

  let installed = 0;
  for (const agent of agents) {
    const targetPath = path.join(targetDir, agent.name);
    fs.writeFileSync(targetPath, agent.content, "utf-8");
    log(
      "🤖",
      path.relative(process.cwd(), targetPath),
      "VS Code agent installed"
    );
    installed++;
  }

  return installed;
}

function installForCopilot(agents: AgentFile[]): number {
  const targetDir = path.join(os.homedir(), ".copilot", "agents");
  ensureDir(targetDir);

  let installed = 0;
  for (const agent of agents) {
    const targetPath = path.join(targetDir, agent.name);
    fs.writeFileSync(targetPath, agent.content, "utf-8");
    log("🤖", targetPath, "Copilot agent installed");
    installed++;
  }

  return installed;
}

function installForClaude(agents: AgentFile[]): number {
  const claudeDir = path.join(os.homedir(), ".claude", "agents");
  ensureDir(claudeDir);

  let installed = 0;
  for (const agent of agents) {
    const targetPath = path.join(claudeDir, agent.name);
    fs.writeFileSync(targetPath, agent.content, "utf-8");
    log("🤖", targetPath, "Claude agent installed");
    installed++;
  }

  return installed;
}

function uninstallForVSCode(): number {
  const targetDir = path.join(process.cwd(), ".github", "agents");

  if (!fs.existsSync(targetDir)) {
    log("ℹ️", "No VS Code agents found to uninstall");
    return 0;
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith(".ghostwriter.md"));
  let removed = 0;

  for (const file of files) {
    const filePath = path.join(targetDir, file);
    fs.unlinkSync(filePath);
    log("🗑️", path.relative(process.cwd(), filePath), "VS Code agent removed");
    removed++;
  }

  // Remove directory if empty
  if (fs.readdirSync(targetDir).length === 0) {
    fs.rmdirSync(targetDir);
    const githubDir = path.join(process.cwd(), ".github");
    if (fs.existsSync(githubDir) && fs.readdirSync(githubDir).length === 0) {
      fs.rmdirSync(githubDir);
    }
  }

  return removed;
}

function uninstallForCopilot(): number {
  const targetDir = path.join(os.homedir(), ".copilot", "agents");

  if (!fs.existsSync(targetDir)) {
    log("ℹ️", "No Copilot agents found to uninstall");
    return 0;
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith(".ghostwriter.md"));
  let removed = 0;

  for (const file of files) {
    const filePath = path.join(targetDir, file);
    fs.unlinkSync(filePath);
    log("🗑️", filePath, "Copilot agent removed");
    removed++;
  }

  return removed;
}

function uninstallForClaude(): number {
  const targetDir = path.join(os.homedir(), ".claude", "agents");

  if (!fs.existsSync(targetDir)) {
    log("ℹ️", "No Claude agents found to uninstall");
    return 0;
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith(".ghostwriter.md"));
  let removed = 0;

  for (const file of files) {
    const filePath = path.join(targetDir, file);
    fs.unlinkSync(filePath);
    log("🗑️", filePath, "Claude agent removed");
    removed++;
  }

  return removed;
}

export async function installAgents(platforms: Platform[]): Promise<void> {
  console.log("");
  log("✍️", ` ${COLORS.blue}Ghostwriter Agents Installer${COLORS.reset}`);
  console.log("");

  const agents = getAgentFiles();

  if (agents.length === 0) {
    throw new Error("No agent files found");
  }

  log("🤖", `Found ${agents.length} agents to install`);
  console.log("");

  let totalInstalled = 0;

  for (const platform of platforms) {
    switch (platform) {
      case "vscode":
        totalInstalled += installForVSCode(agents);
        break;
      case "copilot":
        totalInstalled += installForCopilot(agents);
        break;
      case "claude":
        totalInstalled += installForClaude(agents);
        break;
    }
  }

  console.log("");
  log(
    "✅",
    `${COLORS.green}Done! Installed ${totalInstalled} agents across ${platforms.length} platform(s)${COLORS.reset}`
  );
  console.log("");
  console.log(`${COLORS.dim}Next steps:${COLORS.reset}`);
  console.log(
    `${COLORS.dim}- Restart your editor to load the new agents${COLORS.reset}`
  );
  console.log("");
}

export async function uninstallAgents(platforms: Platform[]): Promise<void> {
  console.log("");
  log("✍️", ` ${COLORS.blue}Ghostwriter Agents Uninstaller${COLORS.reset}`);
  console.log("");

  let totalRemoved = 0;

  for (const platform of platforms) {
    switch (platform) {
      case "vscode":
        totalRemoved += uninstallForVSCode();
        break;
      case "copilot":
        totalRemoved += uninstallForCopilot();
        break;
      case "claude":
        totalRemoved += uninstallForClaude();
        break;
    }
  }

  console.log("");
  if (totalRemoved > 0) {
    log(
      "✅",
      `${COLORS.green}Done! Removed ${totalRemoved} agents from ${platforms.length} platform(s)${COLORS.reset}`
    );
  } else {
    log("ℹ️", "No agents were found to uninstall");
  }
  console.log("");
}

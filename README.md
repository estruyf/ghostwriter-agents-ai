# Ghostwriter Agents

> AI-powered technical writing agents for VS Code, GitHub Copilot, and Claude

Install a collection of specialized AI agents designed to help you write
technical blog posts following the "cozy web" editorial philosophy.

> The project is inspired by
> [Speedgrapher](https://github.com/danicat/speedgrapher), an MCP server
> designed to assist professional writers.

## Features

The **Ghostwriter Agents** consists of five specialized agents that work
together to help you:

- **Interviewer:** Conduct structured interviews to gather raw material for
  articles.
- **Writer:** Expand outlines and drafts into comprehensive articles.
- **Reviewer:** Provide actionable feedback based on editorial guidelines.
- **Context Loader:** Load your current draft into context for seamless editing.
- **Voice Analyzer:** Analyze your writing style to maintain a consistent voice.

## Quick Start

```bash
# Install agents for all platforms (VS Code, Copilot, Claude)
npx @estruyf/ghostwriter

# Install for specific platforms
npx @estruyf/ghostwriter --vscode
npx @estruyf/ghostwriter --copilot
npx @estruyf/ghostwriter --claude
```

After installation:
1. Restart your editor
2. Start using agents: `@context`, `@interviewer`, `@writer`, `@reviewer`,
   `@voice`

## Agents

### 🔄 Context Loader (`@context`)
Loads your current work-in-progress article into context for further commands.

**Use when:** Starting a new editing session or switching between drafts.

### 🎤 Interviewer (`@interviewer`)
Conducts structured technical interviews to gather material for blog posts. Asks
one question at a time, collects code snippets, error logs, and real-world
examples.

**Use when:** Starting a new article from scratch or gathering material from
recent technical work.

**Workflow:**
1. Start: `@interviewer`
2. Answer questions naturally, sharing code/logs when asked
3. Say "stop" when finished
4. Request transcript: "Can you provide the interview transcript?"
5. Save as `INTERVIEW.md`

### ✍️ Writer (`@writer`)
Expands working outlines or drafts into comprehensive, detailed articles while
maintaining your voice and narrative flow.

**Use when:** You have an outline or thin draft that needs expansion.

**Features:**
- Adds context without fluff
- Links to official documentation (with `TODO` placeholders for uncertain URLs)
- Explains *why* code does what it does
- Maintains narrative thread

### 🔍 Reviewer (`@reviewer`)
Reviews articles against editorial guidelines, providing concrete, actionable
feedback.

**Use when:** You have a complete draft ready for review.

**Checks for:**
- Narrative thread and structure
- Technical accuracy
- Tone (honest about pain and payoff)
- Code quality and citations
- Missing resources section

### 🎨 Voice Analyzer (`@voice`)
Analyzes your existing writing to create a reusable style guide that other
agents can follow.

**Use when:** Setting up agents for the first time or refining your voice
profile.

**Outputs:**
- Voice profile (tone, pacing, formality)
- Style rules (do/don't bullets)
- Lexicon (favorite phrases, words to avoid)
- Structure patterns

## Editorial Philosophy

Ghostwriter agents follow the **"cozy web"** editorial approach:

### Core Principles

1. **Honest (Pain and Payoff)**
   - Don't sanitize the process
   - Share cryptic error messages and failed attempts
   - Show the real debugging journey

2. **Professional Peer**
   - Assume smart readers who lack specific context
   - Avoid "just" and "simply" (patronizing words)
   - Write as an experienced peer sharing knowledge

3. **Narrative Focus**
   - Every article needs a thread (journey, mystery, exploration)
   - Show struggles and breakthroughs
   - Real-world examples and actual output

4. **Technical Excellence**
   - Copy-paste runnable code
   - Link to official documentation
   - Realistic variable names
   - Explain *why*, not just *what*

## Typical Workflow

### From Interview to Published Article

```bash
# 1. Conduct interview
@interviewer
# ... answer questions, share code/logs
# Save transcript to INTERVIEW.md

# 2. Create initial outline from interview
@writer Please create an outline from INTERVIEW.md

# 3. Expand sections
@writer Expand the "Debugging the Issue" section

# 4. Review draft
@context  # Load current draft
@reviewer

# 5. Polish based on feedback
@writer Address reviewer feedback: add more context to the error handling section

# 6. Final voice check (optional)
@voice Analyze my previous articles in ./content/posts
```

### From Existing Outline

```bash
# 1. Load outline
@context

# 2. Expand
@writer Expand this outline into a full article

# 3. Review and iterate
@reviewer
@writer Fix the issues noted by the reviewer
```

## Platform-Specific Setup

### VS Code

Agents are installed to `.github/agents/` in your project.

Access via the agent selector in the chat view of GitHub Copilot.

### GitHub Copilot CLI

Agents are installed to `~/.copilot/agents/`.

Access them by invoking Copilot CLI in your terminal, and using the `/agent`
command to select the desired agent you want to interact with.

### Claude

Agents are installed to `~/.claude/agents/`.

Access via: `@context`, `@interviewer`, etc. in Claude Desktop or CLI.

## Command Reference

```bash
npx ghostwriter [options]

Options:
  --vscode      Install agents for VS Code only
  --copilot     Install agents for GitHub Copilot only
  --claude      Install agents for Claude only
  --all         Install agents for all platforms (default)
  --help, -h    Show this help message
```

## Troubleshooting

### Agents not appearing

**Solution:** Restart your editor after installation.

### "Cannot find agent" error

- **VS Code:** Verify files exist in `.github/agents/`
- **Copilot:** Verify files exist in `~/.copilot/agents/`
- **Claude:** Verify files exist in `~/.claude/agents/`

### Agent behavior seems off

**Solution:** Check that you're using the latest version:
```bash
npx @estruyf/ghostwriter@latest
```

### Links are marked as TODO

This is expected! The writer agent only adds links when confident they're
correct. Replace `TODO` placeholders with the actual URLs.

## Contributing

Found a bug or have a suggestion?
[Open an issue](https://github.com/eliostruyf/ghostwriter-agents-ai/issues).

## License

MIT © Elio Struyf

## Learn More

- [GitHub Repository](https://github.com/eliostruyf/ghostwriter-agents-ai)
- [Report Issues](https://github.com/eliostruyf/ghostwriter-agents-ai/issues)

<div align="center">
<a
href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fghostwriter-agents-ai"><img
src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fghostwriter-agents-ai&countColor=%23263759"
/></a>
</div>
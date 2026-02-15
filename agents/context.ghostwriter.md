---
name: "Ghostwriter Context"
description: "Loads the current work-in-progress content to context for further commands"
version: "2.2.0"
---

Please identify and reload the current work-in-progress content into your
context. If there are multiple potential files, ask me to clarify which one is
the active draft. I need to ensure you have the full, most up-to-date version
before we proceed.

Your job is to ensure you (and any downstream agents) are working from the
correct, most up-to-date draft. This could be an article, blog post, review,
documentation, or any other written content.

## What to Load

- Prefer the most recently edited draft-like file (e.g., `DRAFT.md`,
  `ARTICLE.md`, `INTERVIEW.md`, or similarly named markdown files).
- If multiple candidates exist, ask me to choose the active draft.
- If no obvious draft exists, ask me where the draft lives (path or glob).

## Rules

- Load the _entire_ draft (not just an excerpt) into context.
- Do not invent missing content. If a section is referenced but absent, call it
  out as missing.
- If the draft is very large, summarize the structure first, then ask whether I
  want the full text loaded or a specific section.

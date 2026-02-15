---
name: "Ghostwriter Voice"
description: "Analyzes the voice and tone of the user's writing to replicate it in generated text"
version: "2.0.0"
---

Please analyze the voice and tone of my writing by discovering my content within
the current project. Look for my blog articles, book chapters, or other written
materials. I want you to replicate my style in future generated text. Analyze a
representative sample of my writing that you can find.

${input:hint:Optional hint to locate the reference content (file, path, glob, or URL)}

If a hint is provided, interpret it to find the relevant materials (it could be
a file path, a glob pattern, a URL, or just a description). Analyze a
representative sample of my writing based on this hint so you can replicate my
style in future generated text.

## If You Can’t Find Writing Samples

- If the repo does not contain suitable long-form writing, ask me for a path or
  paste of 2–3 representative samples.

## Output Format

1. Voice profile (tone, pacing, level of formality, typical sentence length).
2. Reusable “style rules” (do/don’t bullets).
3. Lexicon (favorite phrases, transitions, words to avoid).
4. Structure patterns (how intros/endings look, heading style).
5. One short paragraph that imitates the style (clearly labeled as a sample).

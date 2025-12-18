# Changelog

All notable changes to this project will be documented in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-18

### Added
- `--uninstall` option to remove agents from specified platforms
- Uninstall functionality for VS Code, GitHub Copilot, and Claude platforms
- Examples for uninstall commands in CLI help and documentation
- CHANGELOG.md file to track version history
- Content type selection in interviewer agent (Technical/Tutorial,
  General/Narrative, Educational/Explainer, Review/Analysis)
- Added versioning to agents metadata

### Changed
- **BREAKING:** Interviewer agent now asks for content type as first question
- Interviewer agent adapts tone, questions, and focus based on selected content
  type
- All agents updated to support multiple content types (technical, narrative,
  educational, review/analysis) beyond just technical blogs:
  - Writer agent adapts expansion approach based on content type
  - Reviewer agent adapts review criteria and guidelines based on content type
  - Context agent recognizes various content types
- Agent descriptions updated to reflect broader content support
- Updated README with uninstall command reference and examples
- Added CHANGELOG.md to published npm package files

## [1.0.4] - 2024-12-15

### Changed
- Enhanced guidelines for visual artifacts in interview transcripts
- Interviewer agent now explicitly requests screenshots, graphs, and UI
  snapshots when relevant

## [1.0.3] - 2024-12-12

### Changed
- Updated repository URLs in package.json to reflect correct ownership
- Removed redundant git type from repository URL

## [1.0.2] - 2024-12-12

### Changed
- Renamed `ghostwriter-expander` to `ghostwriter-writer` for better clarity
- Updated agent description to better reflect its purpose

### Added
- Additional bin entry `@estruyf/ghostwriter` in package.json for easier access

## [1.0.1] - 2024-12-12

### Changed
- Enhanced npm publish workflow and build script for improved functionality
- Updated npm publish command to include public access flag

## [1.0.0] - 2024-12-12

### Added
- Initial release of Ghostwriter Agents
- Five specialized AI agents:
  - **Context Loader**: Load draft articles into context
  - **Interviewer**: Conduct structured interviews to gather material
  - **Writer**: Expand outlines into comprehensive articles
  - **Reviewer**: Review articles against editorial guidelines
  - **Voice Analyzer**: Analyze and replicate writing style
- Multi-platform support for VS Code, GitHub Copilot CLI, and Claude
- Installation CLI with platform-specific options
- Comprehensive documentation and usage examples
- Editorial philosophy based on "cozy web" principles
- GitHub Actions workflow for automated npm publishing

[Unreleased]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v1.0.4...v2.0.0
[1.0.4]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/estruyf/ghostwriter-agents-ai/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/estruyf/ghostwriter-agents-ai/releases/tag/v1.0.0

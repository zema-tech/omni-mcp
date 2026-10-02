# Contributing to OmniMCP

Thank you for your interest in contributing!

## Ways to help

### 1. Build a new MCP server
Pick an app that still doesn't have a good MCP server and implement it under `servers/<app>/`.

Good first candidates:
- Slack
- Gmail
- Notion
- Discord
- Linear
- Stripe
- Telegram
- Shopify

Follow the official MCP specification: https://modelcontextprotocol.io

### 2. Improve the core
- Session management
- Tool routing & discovery
- Auth flows
- Meta-tools

### 3. Provider adapters
Help us support more agent frameworks under `packages/providers/`.

### 4. Documentation & examples
Clear docs and working examples are extremely valuable.

## Development

```bash
pnpm install
pnpm build
```

## Pull Requests

1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description

## Code of Conduct

Be respectful. We're building this together for the open AI ecosystem.

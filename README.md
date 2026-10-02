# OmniMCP

> **The open-source alternative to Composio**  
> Give your AI agents access to hundreds of apps through a unified **MCP-native** layer.  
> We also build high-quality MCP servers for apps that still don't have one.

<p align="center">
  <a href="https://github.com/zema-tech/omni-mcp"><img alt="GitHub stars" src="https://img.shields.io/github/stars/zema-tech/omni-mcp?style=social" /></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>
  <a href="https://modelcontextprotocol.io"><img alt="MCP" src="https://img.shields.io/badge/MCP-Native-blue" /></a>
  <a href="#"><img alt="Status" src="https://img.shields.io/badge/Status-Early%20Development-orange" /></a>
</p>

---

## Why OmniMCP?

Composio is excellent. OmniMCP takes the same idea and makes it:

- **Fully open source** and self-hostable
- **100% MCP-native** (no proprietary protocol lock-in)
- **Community-driven**: anyone can add new MCP servers
- Focused on building MCP servers for apps that **don't have them yet**

| Feature                    | Composio              | OmniMCP                                      |
|----------------------------|-----------------------|----------------------------------------------|
| App integrations           | 1000+                 | Growing + all public MCPs                    |
| Apps without official MCP  | Proprietary wrappers  | **We build open MCP servers**                |
| Protocol                   | Proprietary + MCP     | **Native MCP first**                         |
| Sessions per user          | Yes                   | Yes                                          |
| Meta-tools (discover/auth) | Yes                   | Yes (planned)                                |
| Provider adapters          | Many frameworks       | OpenAI, Anthropic, LangChain, Vercel…        |
| Self-hostable              | Limited               | **Fully**                                    |
| License                    | Proprietary core      | **MIT**                                      |

---

## Quickstart (vision)

```bash
npm install @omnimcp/core @omnimcp/openai-agents
# or
pip install omnimcp omnimcp-openai-agents
```

### TypeScript

```typescript
import { OmniMCP } from "@omnimcp/core";
import { OpenAIAgentsProvider } from "@omnimcp/openai-agents";

const omni = new OmniMCP({
  provider: new OpenAIAgentsProvider(),
});

// One session per user (like Composio)
const session = await omni.create("user_123", {
  apps: ["gmail", "slack", "notion", "stripe"],
});

const tools = await session.tools(); // smart loading, no context bloat

// Hand tools to your agent and let it act
```

### Prefer pure MCP?

Every session can expose a hosted MCP endpoint:

```typescript
const session = await omni.create("user_123", { mcp: true });
// Point Claude Desktop / Cursor / any MCP client to session.mcp.url
```

---

## Core Concepts (inspired by Composio)

### 1. Sessions
Each user gets an isolated session. Sessions manage:
- Connected accounts / auth
- Which apps/tools are available
- Tool execution context

### 2. Apps & Toolkits
- **Official MCPs** — we connect to them
- **Custom OmniMCP servers** — we build them for apps that lack an MCP (Gmail, Slack, Notion, Stripe, Linear…)
- **Community MCPs** — discoverable via registry

### 3. Meta Tools
Instead of dumping hundreds of tools into the context window, sessions expose meta-tools:
- `search_tools` — find the right tool
- `authenticate` — connect an account
- `execute_tool` — run it

### 4. Providers
Adapters that turn OmniMCP tools into the native format of your agent framework:
- OpenAI Agents
- Anthropic / Claude Agent SDK
- Vercel AI SDK
- LangChain / LangGraph
- LlamaIndex
- etc.

### 5. CLI (planned)
```bash
omnimcp search "send email"
omnimcp link gmail
omnimcp execute gmail_send_email --to=...
omnimcp run script.ts
```

---

## Repository Layout

```text
omni-mcp/
├── packages/
│   ├── core/                 # @omnimcp/core — sessions, gateway, router
│   ├── providers/            # Framework adapters
│   │   ├── openai-agents/
│   │   ├── anthropic/
│   │   ├── vercel/
│   │   └── langchain/
│   └── cli/                  # omnimcp CLI
├── servers/                  # Custom MCP servers we build
│   ├── gmail/
│   ├── slack/
│   ├── notion/
│   ├── stripe/
│   ├── linear/
│   └── ...
├── registry/                 # Catalog of apps & known MCPs
├── python/                   # Python SDK (planned)
├── docs/
├── examples/
└── scripts/
```

---

## Roadmap

### Phase 1 — Foundation
- [x] Vision & monorepo structure
- [ ] `@omnimcp/core` with sessions
- [ ] First custom MCP servers (Gmail, Slack, Notion)
- [ ] Basic tool routing + discovery

### Phase 2 — Real power
- [ ] Meta-tools (search / auth / execute)
- [ ] OAuth & API-key auth flows
- [ ] Provider adapters (OpenAI Agents, Anthropic, Vercel AI SDK)
- [ ] Progressive tool loading (no context explosion)

### Phase 3 — Ecosystem
- [ ] Python SDK
- [ ] CLI
- [ ] Public registry + marketplace
- [ ] MCP endpoint per session
- [ ] Self-hosted control plane

### Phase 4 — Scale
- [ ] Community-contributed servers
- [ ] Auto-generate MCP from OpenAPI
- [ ] Triggers & webhooks
- [ ] Sandboxed execution

---

## Contributing

We especially need help with:

1. **Building new MCP servers** for popular apps
2. **Core gateway & session logic**
3. **Provider adapters**

See the `servers/` folder and open an issue if you want to claim an app.

---

## License

MIT © 2026 zema-tech

---

**OmniMCP = Composio, but open, MCP-native, and community-owned.**  
Every app deserves an MCP. Let's build them together.

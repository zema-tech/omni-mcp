# OmniMCP 🚀

> **The Universal Hub for Model Context Protocol servers & AI tool integrations**
>
> An innovative, open-source alternative to Composio that unifies **all MCPs**, custom tools, and AI-connected services into one intelligent platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io)
[![Status](https://img.shields.io/badge/Status-Early%20Development-orange)]()

---

## 🌟 Why OmniMCP?

Composio is great — but the AI ecosystem is exploding with **Model Context Protocol (MCP)** servers.  
OmniMCP takes it further:

| Feature | Composio | **OmniMCP** |
|---------|----------|-------------|
| Pre-built integrations | 1000+ apps | All public + private MCP servers |
| Protocol | Proprietary + MCP | **Native MCP-first** + multi-protocol |
| Discovery | Curated catalog | **AI-powered semantic search** of the entire MCP ecosystem |
| Extensibility | Limited | Fully open & community-driven |
| Local + Cloud | Mostly cloud | **Hybrid**: local MCP servers + remote |
| Tool Router | Yes | **Intelligent multi-MCP router** with context optimization |
| Auth | Managed | Pluggable auth providers |
| Self-hostable | Partial | **Fully self-hostable** |

### Core Vision

- **Aggregate every MCP** — public registries, private servers, community packages
- **One unified interface** for any AI agent (Claude, GPT, Grok, local models…)
- **Smart routing** that chooses the best tool across all connected MCPs
- **Zero context bloat** — dynamic tool discovery & progressive loading
- **Beyond MCP** — also support OpenAPI, LangChain tools, custom functions, webhooks, etc.

---

## 📚 Architecture (Planned)

```
┌─────────────────────────────────────────────────────────────┐
│                     OmniMCP Core                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ MCP Registry │  │ Tool Router  │  │ Auth Hub     │   │
│  │ & Discovery  │  │ (AI-powered)│  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│         │                 │                 │          │
│  ┌────────────────────────────────────────────────┐     │
│  │              Unified MCP Gateway                     │     │
│  └────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
          │
    ┌────────────────────────────────────────────────┐
    │  Local MCPs  │  Remote MCPs  │  Custom Tools  │  APIs  │
    └────────────────────────────────────────────────┘
```

---

## 🚀 Roadmap

### Phase 1 — Foundation (Current)
- [x] Repository & vision
- [ ] Core MCP client/server gateway
- [ ] Registry of known MCP servers
- [ ] Basic discovery & connection management

### Phase 2 — Intelligence
- [ ] Semantic tool search across all connected MCPs
- [ ] Context-aware tool routing
- [ ] Progressive disclosure of tools (avoid context window explosion)
- [ ] Multi-agent orchestration support

### Phase 3 — Ecosystem
- [ ] Community MCP registry & marketplace
- [ ] One-click auth for popular services
- [ ] SDKs (TypeScript, Python, Go)
- [ ] Official integrations with major AI frameworks

### Phase 4 — Beyond MCP
- [ ] OpenAPI / REST auto-adapters
- [ ] LangChain / LlamaIndex tool bridges
- [ ] Webhook & event triggers
- [ ] Sandboxed execution environments

---

## 📝 Getting Started (Coming Soon)

```bash
# Install (planned)
npm install @omnimcp/core
# or
pip install omnimcp
```

```typescript
import { OmniMCP } from "@omnimcp/core";

const omni = new OmniMCP({
  // Connect to local + remote MCP servers
  servers: [
    { name: "filesystem", command: "npx", args: ["-y", "@modelcontextprotocol/server-filesystem"] },
    { name: "github", url: "https://mcp.example.com/github" },
  ],
});

// Your AI agent now has access to ALL tools from ALL servers
const tools = await omni.getTools();
```

---

## 🤝 Contributing

This project is in very early stages. Ideas, issues, and PRs are extremely welcome!

1. Fork the repo
2. Create a feature branch
3. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) (coming soon).

---

## 📜 License

MIT © 2026 zema-tech

---

**Built with ❤️ for the open AI ecosystem.**  
Let’s make every tool accessible to every agent.

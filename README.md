# OmniMCP 🚀

> **The open-source Composio alternative**  
> Connect any AI agent to **hundreds of apps** through a unified MCP layer — including apps that still don't have an official MCP server (we build them).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io)
[![Status](https://img.shields.io/badge/Status-Early%20Development-orange)]()

---

## 🎯 Mission

**OmniMCP is a drop-in substitute for Composio**, but built fully on the open **Model Context Protocol** standard and designed to be community-owned.

We do two things better:

1. **Aggregate every existing MCP** (official + community)
2. **Create high-quality MCP servers** for popular apps that still don't have one

So your AI agent can talk to Gmail, Slack, Notion, Stripe, Shopify, Linear, Discord, Telegram, banking APIs, CRMs… even if those services never published an MCP.

---

## 📊 OmniMCP vs Composio

| Feature                        | Composio              | **OmniMCP**                              |
|--------------------------------|-----------------------|------------------------------------------|
| Number of apps                 | 1000+                 | Growing catalog + all public MCPs        |
| Apps without official MCP      | Proprietary wrappers  | **We build open MCP servers for them**   |
| Protocol                       | Proprietary + MCP     | **100% native MCP**                      |
| Open source                    | Partial               | **Fully open source**                    |
| Self-hostable                  | Limited               | **Yes, completely**                      |
| Tool discovery                 | Catalog               | Semantic search + progressive loading    |
| Auth                           | Managed               | Pluggable (OAuth, API keys, custom)      |
| Community contributions        | Restricted            | Anyone can add new MCP servers           |
| Cost                           | Paid tiers            | Free & open                              |

---

## 🛠 How it works

```
AI Agent (Claude / GPT / Grok / local model)
          │
          ▼
   ┌──────────────────────────────────────────────┐
   │              OmniMCP Gateway                              │
   │  • Unified tool list                                      │
   │  • Smart routing                                          │
   │  • Auth management                                        │
   │  • Context optimization                                   │
   └──────────────────────────────────────────────┘
          │
    ┌────────────────────────────────────────────────┐
    │  Official MCPs   │  Community MCPs  │  OmniMCP Custom  │
    │  (filesystem,    │  (from the web)  │  MCP Servers     │
    │   github, ...)   │                  │  (we build them) │
    └────────────────────────────────────────────────┘
```

### The key differentiator: **Custom MCP Servers**

Many popular apps still don't expose an official MCP.  
We (and the community) create clean, well-documented MCP servers for them:

- Slack, Discord, Telegram
- Gmail / Google Workspace
- Notion, Airtable, Coda
- Stripe, PayPal, Shopify
- Linear, Jira, Asana, Trello
- HubSpot, Salesforce
- Twitter/X, LinkedIn
- Banking & finance APIs
- And many more…

These custom MCPs live in this monorepo under `/servers` and can be used standalone or through the OmniMCP gateway.

---

## 🗂️ Project Structure (planned)

```
omni-mcp/
├── packages/
│   ├── core/              # OmniMCP gateway & router
│   ├── sdk-ts/            # TypeScript SDK
│   └── sdk-python/        # Python SDK
├── servers/              # Custom MCP servers we build
│   ├── slack/
│   ├── gmail/
│   ├── notion/
│   ├── stripe/
│   ├── linear/
│   └── ...
├── registry/             # Catalog of all known MCPs
├── docs/
└── examples/
```

---

## 🚀 Roadmap

### Phase 1 — Foundation (Now)
- [x] Vision & repository
- [ ] Core gateway that can connect to multiple MCP servers
- [ ] First custom MCP servers (start with high-demand apps)
- [ ] Simple registry of available tools

### Phase 2 — Real value
- [ ] 20+ high-quality custom MCP servers
- [ ] One-click OAuth / API-key auth flows
- [ ] Semantic tool search (“find tools that can send emails”)
- [ ] Progressive tool loading (no context explosion)

### Phase 3 — Ecosystem
- [ ] Public registry + marketplace
- [ ] SDKs for TypeScript, Python, Go
- [ ] Official adapters for Claude, OpenAI Agents, LangChain, Vercel AI SDK
- [ ] Self-hosted control plane

### Phase 4 — Scale
- [ ] Community-contributed MCP servers
- [ ] Auto-generated MCP from OpenAPI specs
- [ ] Sandboxed execution & triggers
- [ ] Enterprise features (audit, RBAC, etc.)

---

## 📝 Getting Started (Coming Soon)

```bash
npm install @omnimcp/core
# or
pip install omnimcp
```

```typescript
import { OmniMCP } from "@omnimcp/core";

const omni = new OmniMCP({
  // Mix official MCPs + our custom ones
  apps: ["gmail", "slack", "notion", "stripe", "linear"],
  // or connect any external MCP
  servers: [
    { name: "filesystem", command: "npx", args: ["-y", "@modelcontextprotocol/server-filesystem"] },
  ],
});

await omni.connect();

// Your agent now has tools from all these apps
const tools = await omni.getTools();
```

---

## 🤝 Contributing

We need help on two fronts:

1. **Building new MCP servers** for apps that don't have one yet
2. **Improving the gateway** (routing, auth, discovery)

Ideas, issues and PRs are very welcome!

---

## 📜 License

MIT © 2026 zema-tech

---

**OmniMCP = Composio, but open, MCP-native, and community-powered.**  
Every app deserves an MCP. Let's build them together.

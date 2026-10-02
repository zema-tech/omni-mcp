# OmniMCP Custom Servers

This folder contains **high-quality MCP servers** that we build for popular apps which still don't have an official Model Context Protocol implementation.

These servers can be used:
- Standalone (any MCP client)
- Through the OmniMCP gateway (recommended)

## Planned / In Progress

| App              | Status       | Priority | Notes                          |
|------------------|--------------|----------|--------------------------------|
| Slack            | Planned      | High     | Messages, channels, users      |
| Gmail            | Planned      | High     | Read, send, search, labels     |
| Notion           | Planned      | High     | Pages, databases, blocks       |
| Discord          | Planned      | High     | Messages, servers, channels    |
| Linear           | Planned      | Medium   | Issues, projects, comments     |
| Stripe           | Planned      | Medium   | Customers, payments, invoices  |
| Telegram         | Planned      | Medium   | Bots, messages                 |
| Shopify          | Planned      | Medium   | Products, orders               |
| HubSpot          | Planned      | Low      | Contacts, deals                |
| X / Twitter      | Planned      | Medium   | Posts, DMs (API limits)        |

## How to add a new server

1. Create a folder: `servers/<app-name>/`
2. Implement a proper MCP server (prefer TypeScript or Python)
3. Add clear documentation and auth instructions
4. Update this table

We follow the official MCP specification: https://modelcontextprotocol.io

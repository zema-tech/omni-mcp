/**
 * OmniMCP - The open-source Composio alternative
 *
 * Connect any AI agent to hundreds of apps through a unified MCP layer.
 * We also build MCP servers for apps that still don't have one.
 */

export interface MCPServerConfig {
  name: string;
  /** Local command-based server */
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  /** Remote server URL */
  url?: string;
  /** Transport type */
  transport?: "stdio" | "sse" | "websocket";
}

export interface OmniMCPOptions {
  /**
   * List of app IDs from the OmniMCP catalog (e.g. "gmail", "slack", "notion")
   * These will use our custom MCP servers when available.
   */
  apps?: string[];

  /** Additional / custom MCP servers */
  servers?: MCPServerConfig[];

  /** Enable AI-powered tool routing */
  smartRouting?: boolean;

  /** Max tools to expose at once (prevents context window explosion) */
  maxToolsInContext?: number;
}

/**
 * Main OmniMCP class
 * Aggregates official MCPs + our custom MCP servers into one unified interface.
 */
export class OmniMCP {
  private options: OmniMCPOptions;
  private connectedServers: Map<string, any> = new Map();

  constructor(options: OmniMCPOptions = {}) {
    this.options = {
      smartRouting: true,
      maxToolsInContext: 50,
      ...options,
    };
  }

  /**
   * Connect to all configured apps and MCP servers
   */
  async connect(): Promise<void> {
    console.log("\uD83D\uDE80 OmniMCP: Starting...");

    // 1. Connect catalog apps (our custom MCP servers)
    for (const appId of this.options.apps || []) {
      console.log(`  → Loading app: ${appId}`);
      // TODO: Resolve appId → actual MCP server config from registry
      this.connectedServers.set(appId, {
        type: "omni-custom",
        status: "connected",
      });
    }

    // 2. Connect extra MCP servers
    for (const server of this.options.servers || []) {
      console.log(`  → Connecting MCP server: ${server.name}`);
      this.connectedServers.set(server.name, {
        type: "external",
        config: server,
        status: "connected",
      });
    }

    console.log(`\u2705 OmniMCP ready — ${this.connectedServers.size} sources connected`);
  }

  /**
   * Get all available tools (with optional semantic filtering)
   */
  async getTools(query?: string): Promise<any[]> {
    console.log("\uD83D\uDD0D Discovering tools across all connected apps & MCPs...");
    // TODO: Aggregate + optionally filter with semantic search
    return [];
  }

  /**
   * Execute a tool (automatically routes to the correct MCP server)
   */
  async callTool(name: string, args: Record<string, unknown>): Promise<any> {
    console.log(`\u26A1 Calling tool: ${name}`);
    // TODO: Route to the correct server
    throw new Error("Tool execution not implemented yet — foundation stage");
  }

  /**
   * List all connected sources
   */
  listServers(): Array<{ name: string; type: string; status: string }> {
    return Array.from(this.connectedServers.entries()).map(([name, data]) => ({
      name,
      type: data.type,
      status: data.status,
    }));
  }
}

export default OmniMCP;

// Quick demo when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const omni = new OmniMCP({
    apps: ["gmail", "slack", "notion"],
    servers: [
      {
        name: "filesystem",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-filesystem", "./"],
      },
    ],
  });

  omni.connect().then(() => {
    console.log("\nConnected sources:", omni.listServers());
    console.log("\nOmniMCP is the open alternative to Composio.");
    console.log("We build MCP servers for apps that still don't have them.");
  });
}

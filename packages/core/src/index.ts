/**
 * @omnimcp/core
 *
 * Open-source alternative to Composio.
 * Sessions + unified MCP gateway + custom MCP servers.
 */

export interface SessionOptions {
  /** App IDs from the OmniMCP catalog (e.g. "gmail", "slack") */
  apps?: string[];
  /** Extra external MCP servers */
  servers?: MCPServerConfig[];
  /** Expose a hosted MCP endpoint for this session */
  mcp?: boolean;
  /** Restrict which tools are available */
  allowedTools?: string[];
}

export interface MCPServerConfig {
  name: string;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  url?: string;
  transport?: "stdio" | "sse" | "websocket";
}

export interface OmniMCPOptions {
  /** API key / base URL for self-hosted control plane (future) */
  apiKey?: string;
  baseUrl?: string;
  /** Provider adapter (OpenAI Agents, Anthropic, etc.) */
  provider?: any;
}

export interface Session {
  sessionId: string;
  userId: string;
  /** Get tools in the format expected by the current provider */
  tools(): Promise<any[]>;
  /** Execute a tool by name */
  execute(toolName: string, args: Record<string, unknown>): Promise<any>;
  /** MCP endpoint (when mcp: true) */
  mcp?: { url: string };
}

/**
 * Main entry point — mirrors Composio's DX
 */
export class OmniMCP {
  private options: OmniMCPOptions;

  constructor(options: OmniMCPOptions = {}) {
    this.options = options;
  }

  /**
   * Create a new session for a user (same idea as composio.create)
   */
  async create(userId: string, options: SessionOptions = {}): Promise<Session> {
    const sessionId = `sess_${userId}_${Date.now()}`;

    console.log(`[OmniMCP] Creating session ${sessionId} for user ${userId}`);
    if (options.apps?.length) {
      console.log(`  Apps: ${options.apps.join(", ")}`);
    }

    // TODO: real connection to MCP servers + auth resolution

    const session: Session = {
      sessionId,
      userId,
      async tools() {
        // Meta-tools + progressive loading will live here
        console.log("[OmniMCP] Loading tools for session...");
        return [];
      },
      async execute(toolName: string, args: Record<string, unknown>) {
        console.log(`[OmniMCP] Executing ${toolName}`, args);
        throw new Error("Tool execution not implemented yet");
      },
    };

    if (options.mcp) {
      session.mcp = {
        url: `https://mcp.omnimcp.dev/session/${sessionId}`, // placeholder
      };
    }

    return session;
  }

  /**
   * Re-use an existing session
   */
  async use(sessionId: string): Promise<Session> {
    console.log(`[OmniMCP] Reusing session ${sessionId}`);
    // TODO: load from store
    return this.create("unknown", {});
  }
}

export default OmniMCP;

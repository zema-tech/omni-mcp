/**
 * OpenAI Agents provider for OmniMCP
 * Converts OmniMCP tools into the format expected by @openai/agents
 */

export class OpenAIAgentsProvider {
  name = "openai-agents";

  // TODO: implement tool format conversion
  adaptTools(tools: any[]): any[] {
    return tools;
  }
}

export default OpenAIAgentsProvider;

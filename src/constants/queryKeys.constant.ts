export const characterKeys = {
  character: ["character"] as const,
  all: () => [...characterKeys.character] as const,
};

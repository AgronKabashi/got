export * from "./character";
export * from "./character-bio";
export * from "./characters";
export * from "./episode-cover";
export * from "./home";
export * from "./navigation";
export * from "./no-content";

export const ALL_COMPONENTS = Object.keys(module.exports)
  .map(componentId => module.exports[componentId]);
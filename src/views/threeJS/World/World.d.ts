export declare class World {
  constructor(container: any);

  asyncRender(): Promise<void>;

  render(): void;

  start(): void;

  stop(): void;

  openHelp(): void;

  eventHandler(): void;
}

export {};

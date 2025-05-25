/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: (pattern: string) => Record<string, () => Promise<unknown>>;
  readonly globEager: (pattern: string) => Record<string, unknown>;

}

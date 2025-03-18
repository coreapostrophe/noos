import { Linter } from 'eslint';
import { CompilerOptions } from 'typescript';

interface TsConfig {
  extends?: string;
  compilerOptions?: CompilerOptions;
  include?: string[];
  exclude?: string[];
  files?: string[];
}

declare const _default: {
  eslint: {
    react: Linter.Config[];
  };
  typescript: {
    react: TsConfig;
  };
};

export default _default;

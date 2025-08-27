import { GitRefsDatasource } from '../../datasource/git-refs';

export { extractPackageFile } from './extract';
export { getRangeStrategy } from './range';
export { updateArtifacts } from './artifacts';

export const supportsLockFileMaintenance = true;

// TODO: Remove this.
export const url = 'https://nix.dev';

// TODO: Check this.
export const defaultConfig = {
  managerFilePatterns: ['/(^|/)flake\\.nix$/'],
  enabled: false,
};

export const supportedDatasources = [GitRefsDatasource.id];

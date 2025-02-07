import noAncestorBuild from './noAncestorBuild';

export default {
  title: 'CLI/Messages/Warnings',
  args: {
    build: { number: 123 },
  },
};

export const NoAncestorBuild = (args: any) => noAncestorBuild(args);

export const NoAncestorBuildTurboSnap = (args: any) => noAncestorBuild({ ...args, turboSnap: {} });

import chalk from 'chalk';
import pluralize from 'pluralize';
import dedent from 'ts-dedent';

import { error, info } from '../../components/icons';
import link from '../../components/link';

export default ({ build, inherit, exitCode }) => {
  const changes = pluralize('visual changes', build.changeCount, true);
  return inherit
    ? dedent(chalk`
      ${error} {bold Inherited ${changes}}
      No new snapshots were taken, but the baseline has unaccepted changes.
      ${info} Review the changes at ${link(build.webUrl)}
    `)
    : dedent(chalk`
      ${error} {bold Found ${changes}}: failing with exit code ${exitCode}
      Pass {bold --exit-zero-on-changes} to succeed this command regardless of changes.
      Pass {bold --auto-accept-changes} to succeed and automatically accept any changes.
      ${info} Review the changes at ${link(build.webUrl)}
    `);
};

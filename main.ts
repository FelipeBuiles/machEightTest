import { Command } from 'commander';

import findPairs from './findPairs';

const program = new Command();

program
  .version('0.0.1')
  .name('Find Pairs')
  .description('Find pairs of numbers in an array that add up to a given sum');

program
  .argument('<target>', 'Target sum')
  .argument('<list>', 'Comma-separated list of numbers to check')
  .action((_target, _list) => {
    const target = Number(_target)
    const list = _list.split(',').map(Number);

    if (isNaN(target)) console.error('Target must be a number');
    if (list.some(isNaN)) console.error('List must be a comma-separated list of numbers');

    const result = findPairs(target, list);
    console.log(result);
  });

program.parse(process.argv);

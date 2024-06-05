#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();
import genDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
	genDiff(filepath1, filepath2)
  })

  .parse();

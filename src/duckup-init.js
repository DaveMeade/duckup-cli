#!/usr/bin/env node

import readline from 'node:readline';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
  const token = await ask('Enter your DuckDNS token: ');
  const domains = await ask('Enter your DuckDNS domains (comma-separated): ');

  rl.close();

  const shell = process.env.SHELL || '';
  let profile;
  if (shell.includes('zsh')) {
    profile = path.join(os.homedir(), '.zshrc');
  } else if (shell.includes('bash')) {
    profile = path.join(os.homedir(), '.bashrc');
  } else {
    profile = path.join(os.homedir(), '.profile');
  }

  const exportLines = [
    `export DUCK_TOKEN="${token.trim()}"`,
    `export DUCK_DOMAINS="${domains.trim()}"`
  ].join('\n');

  fs.appendFileSync(profile, `\n# DuckDNS CLI config\n${exportLines}\n`);
  console.log(`DuckDNS environment variables added to ${profile}`);
  console.log('Please restart your terminal or run:');
  console.log(`source ${profile}`);
})();
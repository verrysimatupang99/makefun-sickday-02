const LINE = 'Cannot come in today — I woke up feeling deprecated.';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function hasUnknownFlag(): boolean {
  return process.argv.slice(2).some((arg) => arg.startsWith('--') && !['--shout', '--help'].includes(arg));
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();

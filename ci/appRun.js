import { think, SQUIRREL } from 'cowsay';

console.log('Starting run script');

console.log(think({
  text: 'grazing in the browser',
  cow: SQUIRREL,
  eyes: '0o',
  tongue: ';;',
}));
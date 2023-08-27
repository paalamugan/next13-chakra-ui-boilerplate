module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{json,yaml}': ['prettier --write'],
};

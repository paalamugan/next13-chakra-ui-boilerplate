module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'yarn type-check',
  '*.{json,yaml}': ['prettier --write'],
};

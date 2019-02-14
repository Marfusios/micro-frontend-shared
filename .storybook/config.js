import { configure } from '@storybook/angular';

function loadStories() {
  require('../src/docs/index.ts');
}

configure(loadStories, module);

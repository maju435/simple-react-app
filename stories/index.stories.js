import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Main from '../src/components/Main.js';
import Recipe from '../src/components/Recipe.js';
import Modal from '../src/components/Modal.js';
import Button from '../src/components/Button.js';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Main', module)
  .add('Main component', () => <Main />)
  .add('One recipe', () => <Recipe />);

storiesOf('modal', module).add('Modal window', () => <Modal />);

storiesOf('buttons', module).add('Buttons', () => <Button color="green" onClick={action('clicked')}>Some Button</Button>)


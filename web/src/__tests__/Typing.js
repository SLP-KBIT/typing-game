import React from 'react';
import { render } from '@testing-library/react';
import '../setupTests';
import { Typing } from '../components/Typing';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);
const mockData = [{ name: 'applepay' }];
const url = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/word`;

beforeAll(() => mock.onGet(url).reply(200, mockData));

test('it works', () => {
  render(<Typing />);
});

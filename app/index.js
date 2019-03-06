import _ from 'lodash';
import './index.global.scss';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = 'OstChallenge';

  return element;
}

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

document.body.appendChild(component());

export {
  sum,
  mul,
  sub,
  div
}

import { createRenderer } from 'fela';
import monolithic from 'fela-monolithic';

const configureFela = () => {
  const enhancers = [
    monolithic()
  ];

  const renderer = createRenderer({
    enhancers,
    devMode: true
  });

  return renderer
};

export default configureFela;
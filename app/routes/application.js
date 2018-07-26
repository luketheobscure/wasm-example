import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  constructor() {
    super(...arguments);

    (async () => {
      // Importing a wasm module!
      const { add } = await import('@kylejlin/wasm-add')

      alert(`The answer is ${add(40, 2)}`);
    })()
  }
}

import { html, fixture, expect } from '@open-wc/testing';

import { BetterSetupMic } from '../src/BetterSetupMic.js';
import '../src/better-setup-mic.js';

describe('BetterSetupMic', () => {
  let element: BetterSetupMic;
  beforeEach(async () => {
    element = await fixture(html`<better-setup-mic></better-setup-mic>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

import * as chai from 'chai';

const { expect } = chai;

describe('Some tests', ()=> {
    before(async ()=> {
        await browser.url('https://webdriver.io');
    });
    it('can successfully open a page', async () => {
        const subtitle = await $('.hero__subtitle');
        expect(await subtitle.getText()).to.be.equal('Next-gen browser and mobile automation test framework for Node.js');
    });
    it('fails with timeout', async () => {
        await new Promise((resolve) => setTimeout(resolve, 300000));
    });
})
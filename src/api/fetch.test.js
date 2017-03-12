import 'whatwg-fetch';
import { Fetch } from './';
import { expect } from 'chai';

describe('Fetch', () => {
    it('mock', (done) => {
        const fetch = (url) => {
            expect(url).to.equal('test-url');
            done();
        }
        Fetch(fetch)('test-url');
    });
});

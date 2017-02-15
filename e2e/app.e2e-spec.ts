import { PsitePage } from './app.po';

describe('psite App', function() {
  let page: PsitePage;

  beforeEach(() => {
    page = new PsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

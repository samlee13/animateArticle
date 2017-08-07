import { AnimateArticlePage } from './app.po';

describe('animate-article App', () => {
  let page: AnimateArticlePage;

  beforeEach(() => {
    page = new AnimateArticlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

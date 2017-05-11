import { WebDevPage } from './app.po';

describe('web-dev App', () => {
  let page: WebDevPage;

  beforeEach(() => {
    page = new WebDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AppCliPage } from './app.po';

describe('app-cli App', () => {
  let page: AppCliPage;

  beforeEach(() => {
    page = new AppCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ThirdLibSeedPage } from './app.po';

describe('third-lib-seed App', function() {
  let page: ThirdLibSeedPage;

  beforeEach(() => {
    page = new ThirdLibSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

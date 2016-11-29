import { QacAngularPage } from './app.po';

describe('qac-angular App', function() {
  let page: QacAngularPage;

  beforeEach(() => {
    page = new QacAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AngularJenkinsDemoPage } from './app.po';

describe('angular-jenkins-demo App', function() {
  let page: AngularJenkinsDemoPage;

  beforeEach(() => {
    page = new AngularJenkinsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

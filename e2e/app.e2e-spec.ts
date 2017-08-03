import { TestApp1Page } from './app.po';

describe('test-app1 App', () => {
  let page: TestApp1Page;

  beforeEach(() => {
    page = new TestApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { FplTrackerPage } from './app.po';

describe('fpl-tracker App', () => {
  let page: FplTrackerPage;

  beforeEach(() => {
    page = new FplTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

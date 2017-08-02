import { HotelManagementPage } from './app.po';

describe('hotel-management App', () => {
  let page: HotelManagementPage;

  beforeEach(() => {
    page = new HotelManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

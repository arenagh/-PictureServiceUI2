import { PicViewModule } from './pic-view.module';

describe('PicViewModule', () => {
  let picViewModule: PicViewModule;

  beforeEach(() => {
    picViewModule = new PicViewModule();
  });

  it('should create an instance', () => {
    expect(picViewModule).toBeTruthy();
  });
});

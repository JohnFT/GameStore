import { AddGameModule } from './add-game.module';

describe('AddGameModule', () => {
  let addGameModule: AddGameModule;

  beforeEach(() => {
    addGameModule = new AddGameModule();
  });

  it('should create an instance', () => {
    expect(addGameModule).toBeTruthy();
  });
});

import { MiGamesModule } from './mi-games.module';

describe('MiGamesModule', () => {
  let miGamesModule: MiGamesModule;

  beforeEach(() => {
    miGamesModule = new MiGamesModule();
  });

  it('should create an instance', () => {
    expect(miGamesModule).toBeTruthy();
  });
});

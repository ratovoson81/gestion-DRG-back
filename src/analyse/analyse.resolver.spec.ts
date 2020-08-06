import { Test, TestingModule } from '@nestjs/testing';
import { AnalyseResolver } from './analyse.resolver';

describe('AnalyseResolver', () => {
  let resolver: AnalyseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyseResolver],
    }).compile();

    resolver = module.get<AnalyseResolver>(AnalyseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

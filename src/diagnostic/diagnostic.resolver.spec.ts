import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticResolver } from './diagnostic.resolver';

describe('DiagnosticResolver', () => {
  let resolver: DiagnosticResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosticResolver],
    }).compile();

    resolver = module.get<DiagnosticResolver>(DiagnosticResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

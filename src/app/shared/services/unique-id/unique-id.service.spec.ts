import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it('should generate id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it('should not generate duplicated ids when called multiple times', () => {
    const service = new UniqueIdService();
    const ids = new Set();
    for(let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});

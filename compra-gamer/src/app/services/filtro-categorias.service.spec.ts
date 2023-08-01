import { TestBed } from '@angular/core/testing';

import { FiltroCategoriasService } from './filtro-categorias.service';

describe('FiltroCategoriasService', () => {
  let service: FiltroCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { WeatherLoggerService } from './weather-logger.service';

describe('WeatherLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherLoggerService]
    });
  });

  it('should be created', inject([WeatherLoggerService], (service: WeatherLoggerService) => {
    expect(service).toBeTruthy();
  }));
});

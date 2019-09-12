import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'To pole jest wymagane',
      minlength: `Minimalna długość: ${validatorValue.requiredLength} znaków`,
      email: 'Podaj poprawny adres email',
      hasNumber: 'Musi zawierać co najmniej 1 liczbę',
      hasUpper: 'Musi zawierać co najmniej 1 wielką literę',
      hasLower: 'Musi zawierać co najmniej 1 małą literę',
      hasSpecial: 'Musi zawierać co najmniej 1 znak specjalny',
      pattern: 'Wymagany jest poprawny format'
    };

    return config[validatorName];
  }
}


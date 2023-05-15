import { Component } from '@angular/core';
import { Edad } from '../edad';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  edad: Edad = { dias: '--', meses: '--', anios: '--' };

  constructor() {}

  calculate() {
    // Validar primero si lo ingresado es correcto
    if (!this.validate()) {
      alert('Error en la fecha');
      return;
    }

    if (this.day !== null && this.month !== null && this.year !== null) {
      let birthDate = new Date(`${this.year}-${this.month}-${this.day}`);
      let actualAge = Date.now() - birthDate.getTime();
      let ageDate = new Date(actualAge); // convertir a fecha
      let ageYears = ageDate.getUTCFullYear() - 1970;
      let ageMonths = ageDate.getUTCMonth();
      let ageDays = ageDate.getUTCDate() - 1; // restar 1 día para corregir el desfase de la conversión a milisegundos

      this.showDate(ageDays, ageMonths, ageYears);
    }
  }

  showDate(ageDays: number, ageMonths: number, ageYears: number) {
    this.edad = {
      dias: ageDays,
      meses: ageMonths,
      anios: ageYears,
    };
  }

  validate(): boolean {
    if (this.day !== null && this.month !== null && this.year !== null) {
      if (this.day > 31) {
        return false;
      }
      if (this.month > 12) {
        return false;
      }
      if (this.year > new Date().getFullYear()) {
        return false;
      }
      return true;
    }
    return false;
  }

  validateDay() {
    // Validar el dia en tiempo real si se ingresa dia valido
    if (this.day !== null && this.day > 31) {
      return true;
    }
    return false;
  }

  validateMonth() {
    // Validar el dia en tiempo real si se ingresa mes valido
    if (this.month !== null && this.month > 12) {
      return true;
    }
    return false;
  }
  validateYear() {
    // Validar el dia en tiempo real si se ingresa año valido
    if (this.year !== null && this.year > new Date().getFullYear()) {
      return true;
    }
    return false;
  }
}

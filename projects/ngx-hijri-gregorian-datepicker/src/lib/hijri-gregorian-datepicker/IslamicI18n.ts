import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha’ban', 'Ramadan', 'Shawwal',
  'Dhul–Qidah', 'Dhul–Hijjah'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {

  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }

  getWeekdayLabel(weekday: number): string{
    return WEEKDAYS[weekday - 1];
  }
  
}

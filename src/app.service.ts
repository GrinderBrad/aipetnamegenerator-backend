import { BadRequestException, Injectable } from '@nestjs/common';
import * as names from './names.json';

@Injectable()
export class AppService {
  getName(category: string, gender: string, language: string): string {
    if (!names[language.toLowerCase()]) {
      throw new BadRequestException('locale not found')
    }
    let resultCategory = names[language.toLowerCase()]?.[category.toUpperCase()];

    if (!resultCategory) {
      resultCategory = names[language.toLowerCase()]?.['default'];
    }
    const namesList = resultCategory[gender.toLowerCase()];

    return namesList[Math.floor(Math.random() * namesList.length )]
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';

const maleDogNames = [
  'Charlie',
  'Max',
  'Bailey',
  'Buddy',  
  'Tucker',
  'Bear',
  'Duke',
  'Harley',
  'Jax',
  'Bentley',
  'Milo',
  'Oliver',
  'Rocky',
  'Jack',
  'Zeus',
  'Winston',
  'Toby',
  'Loki',
  'Murphy',
  'Teddy',
  'Leo',
  'Finn',
  'Scout',
  'Dexter',
  'Ollie',
  'Koda',
  'Diesel',
  'Moose',
  'Gus',
  'Hank',
  'Louie',
  'Thor',
  'Jake',
  'Gunner',
  'Abby',
  'Apollo',
  'Bandit',
  'Shadow',
  'Beau',
  'Buster',
  'Jackson',
  'Oakley',
  'Henry',
  'Ace',
  'Maverick',
  'Bruno',
  'Baxter',
  'Tank',
  'Lexi',
  'Remi',
  'Jasper',
  'Hazel',
  'Gizmo',
  'Frankie',
  'Oscar',
  'Lucky',
  'Brody',
]

const femaleDogNames = [
  'Winnie',
  'Layla',
  'Athena',
  'Ginger',
  'Olive',
  'Izzy',
  'Dakota',
  'Belle',
  'Zoe',
  'Dixie',
  'Nova',
  'Bella',
  'Luna',
  'Cooper',
  'Lucy',
  'Max',
  'Daisy',
  'Sadie',
  'Lola',
  'Molly',
  'Stella',
  'Zoey',
  'Maggie',
  'Bentley',
  'Riley',
  'Penny',
  'Sophie',
  'Chloe',
  'Lily',
  'Nala',
  'Piper',
  'Ellie',
  'Roxy',
  'Coco',
  'Rosie',
  'Ruby',
  'Gracie',
  'Mia',
  'Marley',
  'Pepper',
  'Kona',
  'Lilly',
  'Shadow',
  'Millie',
]

const names = {
  ENGLISH: {
    DOG: {
      MALE: maleDogNames,
      FEMALE: femaleDogNames
    }
  },
}

@Injectable()
export class AppService {
  getName(category: string, gender: string, country: string): string {
    const resultNames = names[country.toUpperCase()]?.[category.toUpperCase()]?.[gender.toUpperCase()];
    if (!resultNames) {
      throw new BadRequestException('wrong category')
    }
    return resultNames[Math.floor(Math.random() * resultNames.length )]
  }
}

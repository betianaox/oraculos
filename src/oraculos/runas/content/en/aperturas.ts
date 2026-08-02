import type { Tema, Tono } from '../types';

// English opening line, before the combined three-rune sentence. Deliberately
// neutral, no metaphors — it should work as a bridge into the reading, not as
// a memorable line, so it doesn't feel like a template by the second or third
// consultation. Same register and structure as the Spanish pack.
//
// "Open" names the area (love/work/money) because the question was reflective;
// "closed" doesn't need to, so that pool is topic-agnostic. Each pool is split
// by TONE (worry/drive/neutral); 'neutro' is the fallback.

export const aperturasAbiertas: Partial<Record<Tema, Record<Tono, string[]>>> = {
  amor: {
    neutro: [
      'This spread reflects an aspect of what your love life is going through right now.',
      'The runes point to a tendency around love at this moment.',
      'This combination offers a look at the emotional side of things.',
      'The spread reflects factors that may be shaping your love life.',
      'These three runes describe the energy surrounding love right now.',
      'This reading focuses on the current state of your emotional life.',
      'The runes offer a reading of the emotional moment you are living.',
      'The reading centers on what carries the most weight in love today.',
    ],
    preocupacion: [
      'This spread looks calmly at what is unsettling you in love right now.',
      'The runes answer with a steady hand what you have been carrying in your heart.',
      'This reading pauses on what worries you about the emotional side today.',
      'These runes take a careful look at what has you in doubt about love.',
    ],
    impulso: [
      'This spread meets the eagerness you are bringing to love right now.',
      'The runes read the momentum you feel on the emotional side.',
      'This reading takes in the enthusiasm you carry in love today.',
      'These runes gather the energy you bring to the emotional side.',
    ],
  },
  trabajo: {
    neutro: [
      'This spread reflects an aspect of what your working life is going through.',
      'The runes point to a tendency around work at this moment.',
      'This combination offers a look at the professional side of things.',
      'The spread reflects factors that may be shaping your work situation.',
      'These three runes describe the energy surrounding your work right now.',
      'This reading focuses on the current state of your professional life.',
      'The runes offer a reading of the work moment you are living.',
      'The reading centers on what carries the most weight at work today.',
    ],
    preocupacion: [
      'This spread looks calmly at what is unsettling you at work right now.',
      'The runes answer with a steady hand what you have been carrying about work.',
    ],
    impulso: [
      'This spread meets the drive with which you are taking on work.',
      'The runes read the momentum you bring to the professional side.',
    ],
  },
  dinero: {
    neutro: [
      'This spread reflects an aspect of what your finances are going through.',
      'The runes point to a tendency around money at this moment.',
      'This combination offers a look at the financial side of things.',
      'The spread reflects factors that may be shaping your finances.',
      'These three runes describe the energy surrounding money right now.',
      'This reading focuses on the current state of your finances.',
      'The runes offer a reading of the financial moment you are living.',
      'The reading centers on what carries the most weight in money today.',
    ],
    preocupacion: [
      'This spread looks calmly at what is unsettling you about money right now.',
      'The runes answer with a steady hand what you have been carrying financially.',
    ],
    impulso: [
      'This spread meets the drive with which you are looking at your finances.',
      'The runes read the momentum you bring to your money plans.',
    ],
  },
  general: {
    neutro: [
      'This spread reflects an aspect of what you are going through.',
      'The runes point to a tendency around what you are living right now.',
      'This combination offers a look at your current situation.',
      'The spread reflects factors that may be shaping this moment.',
      'These three runes describe the energy surrounding this moment.',
      'This reading focuses on the current state of things.',
      'The runes offer a reading of what you are living through.',
      'The reading centers on what carries the most weight today.',
    ],
    preocupacion: [
      'This spread looks calmly at what is unsettling you right now.',
      'The runes answer with a steady hand what you have been carrying.',
    ],
    impulso: [
      'This spread meets the drive with which you are facing this moment.',
      'The runes read the momentum you bring with you.',
    ],
  },
};

export const aperturasCerradas: Record<Tono, string[]> = {
  neutro: [
    "This was the runes' answer to your question.",
    'The spread reflects the message tied to your question.',
    'These runes show the reading that matches your question.',
    'The combination you drew answers the matter you raised.',
    'This is what the runes indicate for the question you asked.',
    'The reading is built from this combination of runes.',
    'This spread sums up the message related to your question.',
    'The runes answered as follows.',
    'The outcome of your question took shape in this combination.',
    'This is the reading that arises from the spread you drew.',
  ],
  preocupacion: [
    'This is what the runes answer, and they say it without drama.',
    'The runes answer your question calmly.',
    'The spread answers what you asked without overstating it.',
    'This is what the runes show, read with a steady eye.',
  ],
  impulso: [
    'The runes answered your question, and there is reason to feel encouraged.',
    'This is what the runes bring for what you asked.',
    'The spread answers your question with good energy.',
    'This is what the runes return to your question.',
  ],
};

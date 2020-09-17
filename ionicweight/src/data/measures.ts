export interface Measure {
  weight: string;
  date: string;
  id: number;
}

const measures: Measure[] = [
  {
    weight: '70',
    date: 'Aug 10',
    id: 0,
  },
  {
    weight: '71',
    date: 'Aug 16',
    id: 1,
  },
];

export const getMeasures = () => measures;

export const getMeasure = (id: number) => measures.find(m => m.id === id);

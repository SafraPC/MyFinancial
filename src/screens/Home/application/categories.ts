import { CategoryType } from './categoriesTypes';

export const earningCategories = [
   'Salário',
   'Investimento',
   'Plano de saúde',
   'Vale alimentação',
   'Vale transporte',
   'Outros',
];

export const categories: CategoryType[] = [
   'Alimentação',
   'Transporte',
   'Saúde',
   'Educação',
   'Lazer',
   'Moradia',
   'Outros',
];

export const subcategories = {
   Alimentação: ['Supermercado', 'Restaurante', 'Lanche', 'Delivery', 'Outros'],
   Transporte: [
      'Uber',
      'Ônibus',
      'Metrô',
      'Táxi',
      'Estacionamento',
      'Combustível',
      'Outros',
   ],
   Saúde: ['Farmácia', 'Plano de saúde', 'Outros'],
   Educação: ['Cursos', 'Livros', 'Material escolar', 'Outros'],
   Lazer: ['Viagem', 'Bar', 'Cinema', 'Outros'],
   Moradia: [
      'Aluguel',
      'Condomínio',
      'Água',
      'Luz',
      'Internet',
      'Telefone',
      'Outros',
   ],
   Outros: ['Outros'],
};

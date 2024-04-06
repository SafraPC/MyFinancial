import { CategoryType } from './categoriesTypes';

export const earningCategories = [
   'Salário',
   'Investimento',
   'Plano de saúde',
   'Vale alimentação',
   'Vale transporte',
];

export const categories: CategoryType[] = [
   'Alimentação',
   'Transporte',
   'Saúde',
   'Educação',
   'Lazer',
   'Moradia',
];

export const subcategories = {
   Alimentação: ['Supermercado', 'Restaurante', 'Lanche', 'Delivery'],
   Transporte: [
      'Uber',
      'Ônibus',
      'Metrô',
      'Táxi',
      'Estacionamento',
      'Combustível',
   ],
   Saúde: ['Farmácia', 'Plano de saúde'],
   Educação: ['Cursos', 'Livros', 'Material escolar'],
   Lazer: ['Viagem', 'Bar', 'Cinema'],
   Moradia: ['Aluguel', 'Condomínio', 'Água', 'Luz', 'Internet', 'Telefone'],
};

export type CategoryType =
   | 'Alimentação'
   | 'Transporte'
   | 'Saúde'
   | 'Educação'
   | 'Lazer'
   | 'Moradia';

type FoodCategory = 'Supermercado' | 'Restaurante' | 'Lanche' | 'Delivery';

type TransportCategory =
   | 'Uber'
   | 'Ônibus'
   | 'Metrô'
   | 'Táxi'
   | 'Estacionamento'
   | 'Combustível';

type HealthCategory = 'Farmácia' | 'Plano de saúde';

type EducationCategory = 'Cursos' | 'Livros' | 'Material escolar';

type LeisureCategory = 'Viagem' | 'Bar' | 'Cinema';

type HousingCategory =
   | 'Aluguel'
   | 'Condomínio'
   | 'Água'
   | 'Luz'
   | 'Internet'
   | 'Telefone';

export type SubcategoryType<T> = T extends 'Alimentação'
   ? FoodCategory
   : T extends 'Transporte'
   ? TransportCategory
   : T extends 'Saúde'
   ? HealthCategory
   : T extends 'Educação'
   ? EducationCategory
   : T extends 'Lazer'
   ? LeisureCategory
   : T extends 'Moradia'
   ? HousingCategory
   : never;

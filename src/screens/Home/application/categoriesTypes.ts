export type CategoryType =
   | 'Alimentação'
   | 'Transporte'
   | 'Saúde'
   | 'Educação'
   | 'Lazer'
   | 'Moradia'
   | 'Outros';

type FoodCategory =
   | 'Supermercado'
   | 'Restaurante'
   | 'Lanche'
   | 'Delivery'
   | 'Outros';

type TransportCategory =
   | 'Uber'
   | 'Ônibus'
   | 'Metrô'
   | 'Táxi'
   | 'Estacionamento'
   | 'Combustível'
   | 'Outros';

type HealthCategory = 'Farmácia' | 'Plano de saúde' | 'Outros';

type EducationCategory = 'Cursos' | 'Livros' | 'Material escolar' | 'Outros';

type LeisureCategory = 'Viagem' | 'Bar' | 'Cinema' | 'Outros';

type HousingCategory =
   | 'Aluguel'
   | 'Condomínio'
   | 'Água'
   | 'Luz'
   | 'Internet'
   | 'Telefone'
   | 'Outros';

type OtherCategory = 'Outros';

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
   : T extends 'Outros'
   ? OtherCategory
   : never;

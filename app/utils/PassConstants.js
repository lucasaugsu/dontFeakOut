export const GENDER_LABELS = Object.freeze({
  1: 'Masculino',
  2: 'Feminino',
  3: 'Não declarado',
});

export const CREDIT_CARD_MAP = Object.freeze({
  visa: 'Visa',
  mastercard: 'Master',
  discover: 'Discover',
  amex: 'Amex',
  jcb: 'JCB',
  dinersclub: 'Diners',
  maestro: 'Master',
  laser: 'Laser',
  unionpay: 'Unionpay',
  elo: 'Elo',
  hipercard: 'Hipercard',
});

export const STORE_URL = {
  APPLE: 'https://apps.apple.com/br/app/appfest/id1475185058',
  GOOGLE: 'https://play.google.com/store/apps/details?id=br.app.fest.app',
};

export const GENDER_NOT_DECLARED_ID = 3;

export const ASYNC_STORAGE_KEYS = {
  LOCATION_SELECTED: 'locationSelected',
};

export const TICKET_STATUS_CODES = {
  CANCELADO: -1,
  EXCLUIDO: 0,
  ATIVO: 1,
  PENDENTE_PAGAMENTO: 2,
};

export const getViaCEPURL = (cep) => `https://viacep.com.br/ws/${cep}/json`;
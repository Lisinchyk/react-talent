export enum Currency {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  BTC = "BTC"
}

export enum CurrencySymbols {
  USD = "$",
  EUR = "€",
  GBP = "£",
  BTC = "BTC"
}

export enum Status {
  Processing = "Processing",
  Active = "Active",
  Performed = "Performed",
}

export enum TransactionType {
  Withdraw = "Withdraw"
}

export const MAX_PROMO_CODE_LENGTH = 9;
export const MAX_TRANSACTIONS_PER_PAGE = 3;

export enum FilterSortValues {
  Performed = "PERFORMED",
  Active = "ACTIVE",
  Processing = "PROCESSING",
  All = "ALL"
}

export const FILTER_OPTIONS = [
  {
    label: "All",
    value: FilterSortValues.All
  },
  {
    label: "Active",
    value: FilterSortValues.Active
  },
  {
    label: "Performed",
    value: FilterSortValues.Performed
  },
  {
    label: "Processing",
    value: FilterSortValues.Processing
  }
];

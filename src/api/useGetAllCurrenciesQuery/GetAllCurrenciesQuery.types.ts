export interface Currency {
  name: string;
  symbol: string;
  network: string;
  has_extra_id: true;
  extra_id: string;
  image: string;
  validation_address: string;
  validation_extra: string;
  address_explorer: string;
  tx_explorer: string;
  confirmations_from: string;
  contract_address: string;
}

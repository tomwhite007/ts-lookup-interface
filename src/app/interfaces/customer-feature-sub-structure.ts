import {
  CustomerFeatureSalesStatus,
  CustomerFeaturePurchaseStatus,
  CustomerFeatureProductionStatus,
} from './customer-status-types';
import {
  CustomerFeatureSalesData,
  CustomerFeaturePurchaseData,
} from './customer-data-types';

export type NullableStringPropsOnly<T> = { [P in keyof T]: string | null };

interface StatusTypeLookup {
  sales: CustomerFeatureSalesStatus;
  'purchase-ledger': CustomerFeaturePurchaseStatus;
  production: CustomerFeatureProductionStatus;
}

interface DataTypeLookup {
  sales: CustomerFeatureSalesData;
  'purchase-ledger': CustomerFeaturePurchaseData;
  production: {};
}

interface StatusLookup<S, T extends keyof S = keyof S> {
  type: T; // for StatusTypeLookup as T produce the set: 'sales' | 'purchase-ledger' | 'production'
  status: S[T]; // for StatusTypeLookup as T produce the set: CustomerFeatureSalesStatus | CustomerFeaturePurchaseStatus | CustomerFeatureProductionStatus
}

interface DataLookup<D, T extends keyof D = keyof D> {
  type: T; // for StatusTypeLookup as T produce the set: 'sales' | 'purchase-ledger' | 'production'
  data: NullableStringPropsOnly<D[T]>; // for StatusTypeLookup as T produce the set: CustomerFeatureSalesData | CustomerFeaturePurchaseData | {}
}

export type CustFeatLockedStat<
  S = StatusTypeLookup,
  T extends keyof S = keyof S
> = T extends keyof S ? StatusLookup<S, T> : never;

export type CustFeatLockedDat<
  D = DataTypeLookup,
  T extends keyof D = keyof D
> = T extends keyof D ? DataLookup<D, T> : never;

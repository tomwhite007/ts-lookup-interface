import {
  CustFeatLockedStat,
  CustFeatLockedDat,
} from './customer-feature-sub-structure';

// ref: Infer type from a Sibling Prop https://github.com/microsoft/TypeScript/issues/32673

export type CustomerFeature = CustFeatLockedStat &
  CustFeatLockedDat & {
    provider: string;
    notes: string[];
  };

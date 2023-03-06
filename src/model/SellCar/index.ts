export interface ISellCarFilter {
  "price range": string | null;
  brand: string | null;
  model: string | null;
  "built year": string | null;
}

export enum ADPACKAGE {
  premium,
  advanced,
  standard,
}

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  liked: Array<string>;
  savedFilter: Record<string, string>;
}

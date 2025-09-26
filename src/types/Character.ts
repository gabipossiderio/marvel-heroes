export interface Character {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: Array<{ name: string; resourceURI?: string }>;
  };
  comics?: {
    items: Array<{ name: string; resourceURI?: string }>;
  };
  events: {
    items: Array<{ name: string; resourceURI?: string }>;
  };
}
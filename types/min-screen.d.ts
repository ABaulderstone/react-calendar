type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Screens = {
  [key in Size]?: String;
};
export type Matches = {
  [key in Size]?: boolean;
};

export type MediaDataItem = [Size, string];

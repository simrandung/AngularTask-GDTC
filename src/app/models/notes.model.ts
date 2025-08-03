export interface Note {
  id: number;
  title: string;
  content: string;
  status: 'completed' | 'pending';
}

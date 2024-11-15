interface GameState {
  cells: Cell[];
  player: String;
  end: boolean;
  winner: String;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }
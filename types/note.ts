export interface Note {
  id: number;
  title: string;
  content: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteValues {
  title: string;
  content?: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

export interface FetchNotesValues {
  notes: Note[];
  totalPages: number;
}

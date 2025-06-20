"use client";

import fetchNoteId from "@/lib/api";
import Loader from "@/app/loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ErrorMessage from "../error";
import css from "./NoteDetails.module.css";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const noteId = +id;
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteId(noteId),
    refetchOnMount: false,
  });

  const initialNote = note ?? { title: "", content: "", createdAt: "" };

  return (
    <>
      {isLoading && <Loader />}
      {isError && !note && <ErrorMessage error={error} />}
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{initialNote.title}</h2>
            <button className={css.editBtn}>Edit note</button>
          </div>
          <p className={css.content}>{initialNote.content}</p>
          <p className={css.date}>Created date: {initialNote.createdAt}</p>
        </div>
      </div>
    </>
  );
}

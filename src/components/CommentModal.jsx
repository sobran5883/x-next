"use client";

import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
        <div>Comment Modal</div>
        {open && <h1>The modal is open</h1>}
    </div> 
  )
}

import { useCallback, useState } from "react";

export default function useDetails(initialState) {
  const [open, setOpen] = useState(initialState);

  const toggle = useCallback(() => {
    setOpen((state) => !state);
  }, [setOpen]);

  return { open, toggle };
}
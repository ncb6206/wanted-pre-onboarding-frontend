import { useCallback, useState } from "react";

export default function useOpen(initialValue: boolean) {
  const [isOpened, setIsOpened] = useState(initialValue);

  const onChangeOpened = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  return { isOpened, onChangeOpened };
}

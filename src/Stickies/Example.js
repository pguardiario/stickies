import { useCallback, useState } from "react";
import { Container } from "./Container.js";
import { CustomDragLayer } from "./CustomDragLayer.js";
export const Example = () => {
  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
  const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
  return (
    <div>
      <Container snapToGrid={snapToGridAfterDrop} />
      <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
    </div>
  );
};

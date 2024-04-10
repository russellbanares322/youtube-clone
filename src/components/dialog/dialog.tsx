import { DialogProps } from "./types";

const Dialog = ({ children, open, handleClose }: DialogProps) => {
  return (
    <dialog open={open} onClose={handleClose}>
      {children}
    </dialog>
  );
};

export default Dialog;

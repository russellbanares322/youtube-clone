import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

type VirtualKeyboardProps = {
  onVirtualKeyboardChange: (input: string) => void;
};

const VirtualKeyboard = ({ onVirtualKeyboardChange }: VirtualKeyboardProps) => {
  return (
    <div className="absolute bottom-0 right-0">
      <Keyboard onChange={onVirtualKeyboardChange} />
    </div>
  );
};

export default VirtualKeyboard;

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

type VirtualKeyboardProps = {
  onVirtualKeyboardChange: (input: string) => void;
};

const VirtualKeyboard = ({ onVirtualKeyboardChange }: VirtualKeyboardProps) => {
  return <Keyboard onChange={onVirtualKeyboardChange} />;
};

export default VirtualKeyboard;

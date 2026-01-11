import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Create context
const ToggleContext = createContext({
  isOn: false,
  toggle: () => {},
});

function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) throw new Error('Must be used within Toggle');
  return context;
}

// 2. Build the pieces
function ToggleProvider({ children }) {
  const [isOn, setIsOn] = useState(false);
  function toggle() {
    setIsOn(prev => !prev);
  }
  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleButton() {
  const { isOn, toggle } = useToggle();
  return (
    <button
      onClick={toggle}
      className={`px-4 py-2 rounded ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

function ToggleStatus() {
  const { isOn } = useToggle();
  return <span>The toggle is {isOn ? 'on' : 'off'}</span>;
}

function ToggleLabel({ children }) {
  return <label htmlFor="toggle">{children}</label>;
}

function ToggleIcon() {
	const { isOn } = useToggle();
	return <span className={`w-4 h-4 rounded-full ${isOn ? 'bg-green-500' : 'bg-gray-300'}`} />;
}

// 3. Bundle with dot notation
export const Toggle = Object.assign(ToggleProvider, {
  Button: ToggleButton,
  Status: ToggleStatus,
  Label: ToggleLabel,
  Icon: ToggleIcon,
});

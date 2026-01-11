import { Toggle } from './toggle-context';

function App() {
  return (
    <Toggle>
      <div className="flex items-center gap-4">
        <Toggle.Button />
        <Toggle.Status />
        <Toggle.Label>Toggle</Toggle.Label>
        <Toggle.Icon />
      </div>
    </Toggle>
  );
}

export default App;

import { useEffect, useState } from "react";
import Main from "./components/main";
import SettingsContext, { defaultSettings } from "./settings";
import { Settings } from "./schema";
import { SettingsFile } from "./utils/settings-helper";

function App() {
  const [settingsVal, setSettingsVal] = useState(defaultSettings);

  async function fetchSettings() {
    const settingsFile = new SettingsFile<Settings>("settings.json");
    const loadedSettings = await settingsFile.load(defaultSettings);
    setSettingsVal(loadedSettings);
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        ...settingsVal,
        updateSettingsFunc: (val) => {
          setSettingsVal(val);
        },
      }}
    >
      <Main />
    </SettingsContext.Provider>
  );
}

export default App;

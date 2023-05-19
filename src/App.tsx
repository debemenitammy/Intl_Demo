import { IntlProvider } from 'react-intl';
import translatedMsg from "./translations/fr.json";
import LandingPage from './components/LandingPage';

function App() {
  const locale = 'fr-FR';

  return (
    <>
      <IntlProvider locale={locale} messages={translatedMsg}>
        <LandingPage />
      </IntlProvider>
    </>
  );
}

export default App;
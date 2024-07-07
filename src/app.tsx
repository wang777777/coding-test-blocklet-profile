import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        cssVar: true,
        algorithm: theme.darkAlgorithm,
        components: {
          Form: {
            labelColor: 'rgb(107 114 128)',
          },
        },
      }}>
      <Router basename={basename}>
        <App />
      </Router>
    </ConfigProvider>
  );
}

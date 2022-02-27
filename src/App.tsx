import Content from './Content';
import { RepoProvider } from './RepoProvider';

const App = () => {
  return (
    <RepoProvider>
      <Content />
    </RepoProvider>
  );
};

export default App;

import styles from "./app.module.scss";
import { MainLayout } from "./components/layout/main-layout/main-layout";

function App() {
  return (
    <div className={styles.root}>
      <MainLayout />
    </div>
  );
}

export default App;

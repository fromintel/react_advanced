import React, { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsMounted, userActions } from 'entities/User';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isMounted = useSelector(getUserIsMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="content-page">
          <Sidebar />
          {isMounted && <AppRouter />}
        </main>
      </Suspense>
    </div>
  );
}

export default App;

'use client';

import { Button, makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: tokens.spacingVerticalL,
  },
  title: {
    fontSize: tokens.fontSizeBase600,
  },
  description: {
    fontSize: tokens.fontSizeBase300,
  },
});

export default function WelcomePage() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Welcome to the Headless Admin App</h1>
      <p className={styles.description}>
        This is a headless admin app built with Next.js, Fluent UI.
      </p>

      <div style={{ marginTop: tokens.spacingVerticalXXL }}>
        <Button
          onClick={() =>
            window.open('https://headless-adminapp.github.io/', '_blank')
          }
        >
          Documentation
        </Button>
      </div>
    </div>
  );
}

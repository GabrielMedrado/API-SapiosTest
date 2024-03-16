import { app } from './app';

const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log('🔥 Server started !');
    });
  } catch (err) {
    process.exit(1);
  }
};

start();

export function Aa() {
  const a = async () => {
    await Promise.resolve('test');
  };

  void a();

  (async () => {
    await Promise.resolve('test');
  })();
}

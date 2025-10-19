export const createEventEmitter = (value) => {
  let handlers = [];
  // 구독자를 추가하는 함수
  const on = (handler) => handlers.push(handler);
  // 구독자를 제거하는 함수
  const off = (handler) => {
    handlers = handlers.filter((h) => h !== handler);
  };

  const get = () => value;
  const set = (newValue) => {
    value = newValue;
    handlers.forEach((handler) => handler(value));
  };

  return {
    on,
    off,
    get,
    set,
  };
};

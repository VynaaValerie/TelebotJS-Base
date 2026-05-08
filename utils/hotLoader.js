class DynamicRouter {
  constructor() {
    this._handlers = new Map();
    this._fileMap = new Map();
    this._cbHandlers = [];
    this._cbFileMap = new Map();
  }

  register(filePath, cmd, handler, withLimit = false) {
    const c = cmd.toString().toLowerCase();
    this._handlers.set(c, { handler, withLimit });
    if (!this._fileMap.has(filePath)) this._fileMap.set(filePath, []);
    if (!this._fileMap.get(filePath).includes(c)) {
      this._fileMap.get(filePath).push(c);
    }
  }

  registerCallback(filePath, pattern, handler) {
    this._cbHandlers.push({ filePath, pattern, handler });
    if (!this._cbFileMap.has(filePath)) this._cbFileMap.set(filePath, 0);
    this._cbFileMap.set(filePath, (this._cbFileMap.get(filePath) || 0) + 1);
  }

  unregister(filePath) {
    const cmds = this._fileMap.get(filePath) || [];
    for (const c of cmds) this._handlers.delete(c);
    this._fileMap.delete(filePath);

    this._cbHandlers = this._cbHandlers.filter((e) => e.filePath !== filePath);
    this._cbFileMap.delete(filePath);
  }

  get(cmd) {
    return this._handlers.get(cmd.toLowerCase());
  }

  async dispatchCallback(ctx) {
    const data = ctx.callbackQuery?.data;
    if (!data) return false;
    for (const { pattern, handler } of this._cbHandlers) {
      let match = null;
      if (pattern instanceof RegExp) {
        match = data.match(pattern);
      } else if (typeof pattern === "string") {
        match = data === pattern ? [data] : null;
      }
      if (match) {
        ctx.match = match;
        await handler(ctx);
        return true;
      }
    }
    return false;
  }

  count() { return this._handlers.size; }
}

function makeBotProxy(router, filePath, withLimit, realBot) {
  return new Proxy(realBot, {
    get(target, prop) {
      if (prop === "command") {
        return (cmds, handler) => {
          const list = Array.isArray(cmds) ? cmds : [cmds];
          for (const c of list) {
            router.register(filePath, c.toString(), handler, withLimit);
          }
        };
      }
      if (prop === "callbackQuery") {
        return (pattern, handler) => {
          router.registerCallback(filePath, pattern, handler);
        };
      }
      const val = target[prop];
      return typeof val === "function" ? val.bind(target) : val;
    },
  });
}

module.exports = { DynamicRouter, makeBotProxy };

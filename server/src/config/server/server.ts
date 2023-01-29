module.exports = {
    server: null,
    port: 4000,

    init: function (server: () => void, port: number) {
        this.server = server;
        this.port = port || this.port;
    },

    connect: function () {
        this.server.listen(this.port, () => {
            console.log(`[Server] listening on port ${this.port}`);
        });
    },

    setMiddleWare: function (middleWare: () => void) {
        this.server.use(middleWare);
    },

    api: function (method: string, url: string, callback: () => void) {
        this.server[method](url, callback);
    },
};

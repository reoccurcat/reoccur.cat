self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/assets/uv/uv.handler.js',
    bundle: '/assets/uv/uv.bundle.js',
    config: '/assets/uv/uv.config.js',
    sw: '/assets/uv/uv.sw.js',
};
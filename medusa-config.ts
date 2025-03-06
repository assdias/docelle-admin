import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseDriverOptions: process.env.NODE_ENV !== "development" ?
    { connection: { ssl: { rejectUnauthorized: false } } } : {},
    redisUrl: process.env.REDIS_URL,
    redisPrefix: "medusa",
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",      
    },
  },
  admin: {
    vite(config) {
      config.server.allowedHosts = [
        ...(config.server.allowedHosts || []),
        process.env.MEDUSA_BACKEND_URL,

        config.server.host = '0.0.0.0', // Permite conexões externas
        config.server.strictPort = true, // Mantém a porta fixa
        config.server.cors = true, // Habilita CORS        
      ];  
    }   
  }
})

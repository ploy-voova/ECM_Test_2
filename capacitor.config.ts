import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ECM',
  webDir: 'www',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  server:{
    androidScheme: "https",
    url: 'http://192.168.3.128:8100',
    cleartext: true
  }
};

export default config;

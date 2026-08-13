# BioSacha Mobile — Semana 9

## Proyecto
Aplicación móvil multiplataforma del proyecto integrador BioSacha, desarrollada con React Native y Expo.

## Entorno utilizado
- Framework: React Native + Expo
- Expo SDK: 54
- Node.js: 24.18.0
- npm: 11.16.0
- Git: 2.52.0
- Dispositivo de prueba: iPhone físico
- Backend: Node.js + Express
- ORM: Prisma
- Base de datos: PostgreSQL 16

## Verificación del entorno
Se ejecutó:

npx expo-doctor

Resultado:

18/18 checks passed. No issues detected!

## Instalación
Desde la carpeta del proyecto:

npm install

## Ejecución
Para iniciar el entorno:

npx expo start --clear

La aplicación puede ejecutarse con Expo Go mediante el código QR generado por Metro Bundler.

## Backend BioSacha
La aplicación consume el backend propio del proyecto mediante:

EXPO_PUBLIC_API_URL=http://IP_LOCAL_DEL_BACKEND:3000

Endpoint utilizado:

GET /api/registros

## Conectividad
Durante las pruebas locales se utilizó la IP del equipo de desarrollo y el puerto 3000.

La aplicación móvil consulta el endpoint del backend y recibe registros almacenados de forma persistente en PostgreSQL.

## Base de datos real
PostgreSQL contiene las tablas:

- usuarios
- plantas
- comunidades
- registros_botanicos
- lotes_sincronizacion
- _prisma_migrations

La aplicación mostró correctamente un registro real de Guayusa obtenido mediante:

iPhone -> Expo/React Native -> API BioSacha -> Prisma -> PostgreSQL

## Recarga en caliente
Se modificó el texto de la pantalla durante la ejecución y el cambio apareció automáticamente en el dispositivo físico sin reinstalar la aplicación.

## Destino de ejecución
Se utilizó un iPhone físico porque permite verificar el comportamiento de la aplicación en un dispositivo real y demostrar la conectividad con el backend dentro de la red local.

## Consideraciones de desarrollo
La dirección IP utilizada corresponde exclusivamente al entorno local de desarrollo y debe sustituirse según la red del equipo donde se ejecute el backend.

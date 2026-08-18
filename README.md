# BioSacha Mobile — Semana 10

## Proyecto
Aplicación móvil multiplataforma del proyecto integrador BioSacha, desarrollada con React Native, Expo y TypeScript.

En la Semana 10 se implementó un sistema de diseño basado en tokens, un catálogo de componentes reutilizables, tratamiento explícito de estados, accesibilidad y comportamiento adaptativo sobre una pantalla real conectada a la API BioSacha.

## Sistema de diseño
El tema centralizado se encuentra en:

- `theme/tokens.ts`
- `theme/index.ts`

Incluye colores, tipografía, espaciado, radios, tamaños, estados visuales, breakpoints y tokens de componentes.

## Componentes reutilizables
Se implementaron:

- `BotonPrimario`
- `CampoTexto`
- `VistaEstado`
- `TarjetaRegistroBotanico`

Los componentes reciben información mediante props y comunican acciones mediante callbacks, sin consultar directamente el backend ni depender de rutas de navegación.

## Estados de interfaz
`VistaEstado` implementa:

- cargando
- vacío
- error
- reintento

## Pantalla real
La pantalla principal consume:

`GET /api/registros`

Flujo comprobado:

iPhone / Expo → API BioSacha → Prisma → PostgreSQL

Registro demostrado:

- Nombre común: Guayusa
- Nombre científico: Ilex guayusa
- Comunidad: Comunidad Amazónica BioSacha
- Estado: aprobado

## Accesibilidad
Se verificaron:

- contraste WCAG AA
- área táctil mínima de 48 px
- etiquetas y roles semánticos
- estados accesibles
- fuente del sistema ampliada

## Comportamiento adaptativo
La aplicación utiliza `useWindowDimensions` y un breakpoint centralizado:

- ancho reducido: una columna
- ancho amplio: dos columnas

## Verificación
Se ejecutó:

`npx tsc --noEmit`

Resultado: sin errores.

## Ejecución
Instalar dependencias:

`npm install`

Ejecutar:

`npx expo start --clear`

## Seguridad
No se publican:

- `.env`
- `backups/`

La configuración de ejemplo se proporciona mediante `.env.example`.

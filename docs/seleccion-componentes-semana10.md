# BioSacha - Selección de componentes reutilizables - Semana 10

## Criterios aplicados

La selección se realiza considerando:
- Repetición: el patrón aparece en varios contextos de la aplicación.
- Cohesión: sus elementos forman una unidad con sentido propio.
- Estabilidad de interfaz: puede definirse claramente qué recibe y qué comunica.
- Independencia de contexto: funciona sin conocer la pantalla, el backend ni la navegación.

## 1. BotonPrimario

Usos previstos:
- Inicio de sesión.
- Registro de usuario.
- Creación de registro botánico.
- Edición de registro botánico.
- Reintento de operaciones.

Justificación:
Es un patrón altamente repetido. Debe mantener de forma consistente el diseño, el área táctil, los estados normal, presionado, cargando y deshabilitado. Recibirá sus datos y comportamiento mediante props y callbacks, sin conocer la pantalla que lo utiliza.

## 2. CampoTexto

Usos previstos:
- Inicio de sesión.
- Registro de usuario.
- Nuevo registro botánico.
- Edición de registro botánico.

Justificación:
Los formularios requieren campos con comportamiento visual y funcional uniforme. El componente encapsulará etiqueta, valor, obligatoriedad, error y estado deshabilitado. No realizará validaciones de negocio ni solicitudes al backend por sí mismo.

## 3. VistaEstado

Usos previstos:
- Listado de registros botánicos.
- Estado de sincronización.
- Administración de usuarios.
- Cualquier pantalla que consuma datos remotos.

Justificación:
Centraliza los estados de cargando, vacío y error para evitar implementar soluciones distintas en cada pantalla. Recibirá el tipo de estado, el mensaje y un callback opcional de reintento. No consultará directamente la API.

## 4. TarjetaRegistroBotanico

Usos previstos:
- Listado de registros botánicos.
- Resultados de búsqueda o filtrado.
- Selecciones y vistas relacionadas con registros botánicos.

Justificación:
Representa una unidad coherente del dominio BioSacha. Recibirá los datos que necesita mediante props y comunicará la intención de selección mediante un callback. No consultará el backend, no conocerá rutas de navegación y podrá mostrarse con datos reales o de prueba.

## Regla de independencia

Ninguno de los componentes:
- consulta directamente el backend;
- conoce una ruta de navegación;
- lee el estado global para funcionar.

Todos reciben datos mediante props y comunican acciones mediante callbacks.

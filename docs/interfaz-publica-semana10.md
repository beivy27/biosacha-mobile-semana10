# BioSacha - Interfaz pública de componentes - Semana 10

## 1. BotonPrimario

| Elemento | Parámetro | Tipo conceptual | Obligatorio | Función |
|---|---|---|---|---|
| Dato de entrada | texto | string | Sí | Texto visible de la acción |
| Configuración | cargando | boolean | No | Muestra progreso y bloquea pulsaciones repetidas |
| Configuración | habilitado | boolean | No | Permite activar o desactivar la acción |
| Configuración | anchoCompleto | boolean | No | Define si ocupa todo el ancho disponible |
| Callback | onPress | función | Sí | Comunica que el usuario pulsó el botón |
| Contenido delegado | iconoInicio | ReactNode | No | Permite insertar un icono sin acoplar el componente |

Valores por defecto:
- cargando = false
- habilitado = true
- anchoCompleto = true

Estados previstos:
- Normal
- Presionado
- Cargando
- Deshabilitado

Independencia:
BotonPrimario no conoce qué operación ejecutará, no consulta la API y no realiza navegación. La pantalla consumidora decide qué hacer mediante onPress.

---

## 2. CampoTexto

| Elemento | Parámetro | Tipo conceptual | Obligatorio | Función |
|---|---|---|---|---|
| Dato de entrada | etiqueta | string | Sí | Identifica el dato solicitado |
| Dato de entrada | valor | string | Sí | Contenido actual del campo |
| Dato de entrada | placeholder | string | No | Ayuda contextual breve |
| Dato de entrada | mensajeError | string | No | Explica cómo corregir un dato inválido |
| Configuración | esObligatorio | boolean | No | Indica que el campo es requerido |
| Configuración | seguro | boolean | No | Oculta el contenido, por ejemplo contraseña |
| Configuración | habilitado | boolean | No | Activa o desactiva la edición |
| Callback | onCambiar | función | Sí | Comunica el nuevo valor a la pantalla |
| Contenido delegado | iconoFinal | ReactNode | No | Permite insertar una acción o icono auxiliar |

Valores por defecto:
- esObligatorio = false
- seguro = false
- habilitado = true

Estados previstos:
- Normal
- Enfocado
- Error
- Deshabilitado

Independencia:
CampoTexto no decide reglas de negocio ni envía información al backend. Recibe el valor y comunica cambios mediante onCambiar.

---

## 3. VistaEstado

| Elemento | Parámetro | Tipo conceptual | Obligatorio | Función |
|---|---|---|---|---|
| Dato de entrada | tipo | cargando / vacio / error | Sí | Determina el estado que debe representarse |
| Dato de entrada | mensaje | string | No | Explicación comprensible para el usuario |
| Configuración | compacta | boolean | No | Permite una presentación reducida |
| Callback | onReintentar | función | No | Comunica la intención de volver a intentar |
| Contenido delegado | accionAdicional | ReactNode | No | Permite añadir una acción contextual |

Valores por defecto:
- compacta = false
- mensaje según el tipo de estado

Estados previstos:
- Cargando
- Vacío
- Error

Independencia:
VistaEstado no ejecuta solicitudes de red. Solo representa el estado que recibe y comunica la intención de reintento mediante onReintentar.

---

## 4. TarjetaRegistroBotanico

| Elemento | Parámetro | Tipo conceptual | Obligatorio | Función |
|---|---|---|---|---|
| Dato de entrada | nombreComun | string | Sí | Nombre común de la planta registrada |
| Dato de entrada | nombreCientifico | string | Sí | Nombre científico de la planta |
| Dato de entrada | comunidad | string | No | Comunidad asociada al registro |
| Dato de entrada | estadoValidacion | string | No | Estado de validación del registro |
| Configuración | compacta | boolean | No | Alterna entre presentación resumida y extendida |
| Configuración | mostrarComunidad | boolean | No | Controla la visualización de la comunidad |
| Callback | onPress | función | No | Comunica la selección del registro |
| Contenido delegado | accionFinal | ReactNode | No | Permite insertar una acción adicional |

Valores por defecto:
- compacta = false
- mostrarComunidad = true

Estados previstos:
- Normal
- Presionado
- Deshabilitado cuando la interacción no esté disponible

Independencia:
TarjetaRegistroBotanico recibe toda la información mediante props. No consulta GET /api/registros, no conoce rutas de navegación y puede renderizar datos reales o datos de prueba.

---

## Regla general del catálogo

Los componentes de BioSacha:
1. reciben sus datos mediante props;
2. exponen únicamente las variaciones legítimas de presentación;
3. comunican intenciones mediante callbacks;
4. permiten contenido delegado cuando corresponde;
5. no consultan directamente el backend;
6. no conocen rutas de navegación;
7. no dependen del estado global de la aplicación para funcionar.

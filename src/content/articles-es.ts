import type { Article } from './types';

/**
 * Guías en español — hand-written Spanish guides for Latin American readers,
 * published as an additional desk alongside the English library (owner, 4 Oct
 * 2026: "tetep tampilkan, jgn di buang, sebagai tambahan artikel"). Every page
 * is marked lang="es". Paragraph strings may carry light block markdown
 * (### subheads, lists, tables, > quotes, **bold**), rendered by ArticleBody.
 */
export const ARTICLES_ES: Article[] = [
  {
    "slug": "ahorrar-con-ingresos-irregulares",
    "category": "espanol",
    "lang": "es",
    "title": "Cómo ahorrar y presupuestar cuando tus ingresos cambian cada mes",
    "excerpt": "Método paso a paso para organizar el dinero con ingresos variables (independientes, comisionistas, temporada): ingreso base, cuenta colchón, prioridades y ahorro proporcional.",
    "date": "2026-08-11",
    "minutes": 7,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Los métodos clásicos de presupuesto suelen suponer que cobras la misma cantidad cada quincena. Pero en Latinoamérica millones de personas viven con ingresos que suben y bajan: trabajadores independientes, comerciantes, choferes de plataformas, vendedores por comisión, profesionales que facturan por proyecto, trabajadores de temporada en el campo o el turismo.",
          "Con ingresos irregulares el riesgo no es solo ganar poco, sino la incertidumbre: en los meses buenos se gasta como si siempre fuera así, y en los malos se recurre a la tarjeta o a préstamos. Esta guía propone un sistema sencillo para romper ese ciclo."
        ]
      },
      {
        "h": "El principio central: vivir del ingreso bajo, no del promedio",
        "p": [
          "El error más común es presupuestar con el ingreso de un buen mes o con el promedio. Si tu ingreso varía entre 800 y 2.000, y planeas tu vida con 1.400, cada mes de 800 será una crisis.",
          "La alternativa es diseñar tu gasto básico alrededor de un **ingreso base conservador**, cercano a tus meses flojos, y tratar todo lo que entre por encima como dinero para reforzar el colchón, ahorrar o adelantar metas."
        ]
      },
      {
        "h": "Paso 1: revisa tu historial de 12 meses",
        "p": [
          "Reúne lo que ingresó realmente en tu cuenta (después de impuestos y gastos del negocio, si los tienes) durante el último año. Si no tienes un año de historial, usa lo que tengas y sé más prudente.",
          "Con esas cifras identifica:",
          "- **El mes más bajo.**\n- **El promedio de los tres meses más bajos.** Esta cifra suele ser un buen punto de partida para tu ingreso base.\n- **La estacionalidad**: meses que siempre son flojos (por ejemplo, enero y febrero en muchos servicios) y meses fuertes (temporada alta, fin de año)."
        ]
      },
      {
        "h": "Paso 2: separa el dinero del negocio del personal",
        "p": [
          "Si trabajas por tu cuenta, mezclar las finanzas del trabajo con las personales hace imposible saber cuánto ganas de verdad. Lo ideal es:",
          "- Una cuenta para recibir los pagos de clientes y pagar los gastos del trabajo (materiales, herramientas, plataformas, contabilidad).\n- Una reserva para **impuestos y contribuciones** dentro de esa cuenta o en otra aparte. Calcula el porcentaje aproximado según el régimen de tu país y apártalo en cada cobro; así no te sorprende la declaración.\n- Una transferencia periódica a tu cuenta personal: tu \"sueldo\"."
        ]
      },
      {
        "h": "Paso 3: créate un sueldo fijo",
        "p": [
          "Este es el corazón del sistema. Necesitas tres \"lugares\" para el dinero:",
          "1. **Cuenta de entrada**: donde llegan todos los ingresos.\n2. **Cuenta colchón (o de nivelación)**: donde se acumula el excedente de los meses buenos.\n3. **Cuenta de gastos**: desde donde pagas tu vida, y que recibe un monto fijo cada mes.",
          "Funciona así:",
          "- Cada mes transfieres a la cuenta de gastos tu **ingreso base** (por ejemplo, 900).\n- Si ese mes ganaste más, el excedente va a la cuenta colchón.\n- Si ganaste menos, completas el sueldo con dinero de la cuenta colchón.",
          "El resultado es que tu vida diaria funciona con un ingreso estable, aunque el dinero que entra no lo sea. La cuenta colchón actúa como amortiguador entre lo que ganas y lo que gastas.",
          "### ¿Cuánto debe tener la cuenta colchón?",
          "Antes de empezar a pagarte el sueldo fijo con regularidad, intenta acumular al menos **un mes de ingreso base** en el colchón. Lo ideal, con el tiempo, es tener dos o tres meses. Es diferente del fondo de emergencia: el colchón nivela altibajos normales; el fondo de emergencia cubre imprevistos graves como una enfermedad o perder un cliente grande."
        ]
      },
      {
        "h": "Paso 4: un presupuesto por prioridades",
        "p": [
          "Con un ingreso base definido, organiza los gastos en capas de prioridad. Cuando el dinero no alcanza, las capas de abajo se recortan primero.",
          "1. **Supervivencia**: vivienda, comida, servicios básicos, transporte para trabajar, salud.\n2. **Obligaciones**: pagos mínimos de deudas, seguros, colegiaturas.\n3. **Metas**: fondo de emergencia, ahorro para retiro, pago extra de deudas.\n4. **Estilo de vida**: salidas, ropa no esencial, suscripciones, viajes.",
          "En un mes bueno, se cubren las cuatro capas y sobra para el colchón. En un mes flojo, el colchón asegura las dos primeras y, si hace falta, se pausan temporalmente las otras."
        ]
      },
      {
        "h": "Paso 5: ahorra en porcentaje, no en monto fijo",
        "p": [
          "Con ingresos variables, comprometerte a ahorrar una cantidad fija puede ser frustrante. Funciona mejor un **porcentaje de cada cobro**: por ejemplo, el 10 % de todo lo que entra va directamente al ahorro, sea poco o mucho.",
          "Algunas personas usan una regla escalonada:",
          "- Del ingreso hasta el nivel base: se ahorra un porcentaje pequeño (5 %).\n- De lo que exceda el ingreso base: se ahorra un porcentaje mayor (30 % o más).",
          "Así se aprovechan los meses buenos sin asfixiarse en los malos."
        ]
      },
      {
        "h": "Paso 6: planea los gastos anuales e irregulares",
        "p": [
          "Los ingresos irregulares a menudo coinciden con gastos que también son irregulares: impuestos anuales, renovación de licencias, mantenimiento del equipo de trabajo, regreso a clases, seguros anuales. Haz una lista de esos gastos, divide cada uno entre doce y aparta esa cantidad cada mes en una subcuenta.",
          "Ejemplo:",
          "| Gasto anual | Monto | Mensual a apartar |\n|---|---|---|\n| Seguro del vehículo | 600 | 50 |\n| Mantenimiento de herramientas | 240 | 20 |\n| Útiles escolares | 360 | 30 |\n| Impuesto o derecho anual | 180 | 15 |\n| **Total** | **1.380** | **115** |"
        ]
      },
      {
        "h": "Qué hacer en un mes muy malo",
        "p": [
          "Aun con el sistema, habrá meses que superen al colchón. Antes de recurrir a crédito caro:",
          "1. Corta temporalmente la capa de estilo de vida.\n2. Pausa el ahorro de metas por uno o dos meses, sin tocar lo ya ahorrado salvo necesidad.\n3. Habla con acreedores antes de atrasarte: muchas entidades ofrecen reestructuras si las contactas a tiempo.\n4. Usa el fondo de emergencia si la caída es seria y prolongada.\n5. Revisa si puedes adelantar cobros pendientes o diversificar clientes."
        ]
      },
      {
        "h": "Cómo hacer que los ingresos sean menos irregulares",
        "p": [
          "Además de administrar bien la variación, conviene trabajar para reducirla:",
          "- **Diversifica clientes.** Depender de uno solo multiplica el riesgo.\n- **Busca ingresos recurrentes**: igualas mensuales, contratos de mantenimiento, suscripciones.\n- **Factura y cobra a tiempo.** Pide anticipos cuando sea razonable y define plazos de pago claros.\n- **Planea la temporada baja.** Usa los meses lentos para capacitarte, prospectar clientes o preparar productos."
        ]
      },
      {
        "h": "Un ejemplo completo de un año",
        "p": [
          "Imagina a Carla, diseñadora independiente. Revisando su último año descubre que ganó, después de gastos del trabajo e impuestos, entre 700 y 2.100 por mes. Sus tres meses más bajos promediaron 850, y sus gastos esenciales suman 780. Decide fijar su sueldo personal en 850.",
          "- **Enero (ingreso 700):** transfiere 850 a su cuenta de gastos; los 150 que faltan salen de la cuenta colchón, donde había acumulado 1.000 durante diciembre.\n- **Marzo (ingreso 1.600):** se paga 850, aparta el 10 % del total para su retiro (160) y los 590 restantes van al colchón.\n- **Junio (ingreso 900):** se paga 850 y envía 50 al colchón.\n- **Noviembre (ingreso 2.100):** temporada alta. Se paga 850, ahorra 210 para el retiro y destina el resto a dos cosas: reforzar el colchón hasta tener tres meses de sueldo y adelantar un pago de su tarjeta.",
          "Al cerrar el año, Carla no vivió ningún mes de angustia por falta de dinero, aunque sus ingresos variaron casi tres veces entre el peor y el mejor mes. Lo que cambió no fue cuánto ganó, sino cuándo y cómo lo gastó.",
          "### Cuándo subir tu sueldo personal",
          "Revisa tu ingreso base una o dos veces al año. Si el colchón se mantiene lleno durante varios meses seguidos y tus ingresos más bajos han subido, puedes aumentar tu sueldo personal de forma moderada, por ejemplo un 5 % o 10 %. Si, en cambio, el colchón se vacía con frecuencia, tu sueldo está demasiado alto para tu realidad y conviene bajarlo antes de recurrir a deudas."
        ]
      },
      {
        "h": "Herramientas que facilitan el sistema",
        "p": [
          "- **Subcuentas o \"apartados\"**: muchos bancos y billeteras digitales permiten crear espacios separados dentro de la misma cuenta, ideales para el colchón, los impuestos y los gastos anuales.\n- **Transferencias programadas**: programa tu sueldo fijo para el mismo día de cada mes, aunque el dinero llegue en fechas distintas.\n- **Una hoja de cálculo sencilla**: una fila por mes con ingreso real, sueldo pagado, monto enviado o retirado del colchón y saldo final. Ver la columna del colchón te dice de un vistazo si el sistema es sostenible."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Diseña tu vida con un ingreso base conservador, no con tu mejor mes.\n- Separa dinero del trabajo y personal, y aparta impuestos en cada cobro.\n- Usa una cuenta colchón para pagarte un sueldo fijo: los excedentes entran, los faltantes salen.\n- Prioriza gastos en capas y ahorra un porcentaje de cada ingreso.\n- Aparta mensualmente para gastos anuales y trabaja para hacer tus ingresos más estables.",
          "Las cifras son ilustrativas. Las reglas fiscales para trabajadores independientes varían en cada país; consulta la autoridad tributaria local o a un contador."
        ]
      }
    ]
  },
  {
    "slug": "fondo-de-emergencia",
    "category": "espanol",
    "lang": "es",
    "title": "Fondo de emergencia: cuánto necesitas, dónde guardarlo y cómo armarlo poco a poco",
    "excerpt": "Guía práctica para crear un fondo de emergencia en Latinoamérica: cuántos meses de gastos reunir, dónde guardarlo para que no pierda valor y cómo empezar aunque ganes poco.",
    "date": "2026-08-04",
    "minutes": 8,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Un fondo de emergencia es dinero apartado exclusivamente para imprevistos: una pérdida de empleo, una cirugía, una reparación urgente del auto o de la casa, un viaje inesperado por una enfermedad familiar. No es un ahorro para vacaciones ni para invertir; su única tarea es evitar que una mala semana se convierta en una deuda de varios años.",
          "En la región, donde muchas personas trabajan con ingresos variables o sin prestaciones completas, este colchón es la pieza que sostiene a todas las demás. Sin él, cualquier presupuesto se rompe en cuanto llega el primer imprevisto, y la tarjeta de crédito termina cubriendo lo que debía cubrir el ahorro."
        ]
      },
      {
        "h": "Por qué el fondo de emergencia va antes que invertir",
        "p": [
          "Es tentador saltar directamente a invertir, sobre todo cuando se oye hablar de rendimientos atractivos. Pero invertir sin colchón tiene un problema serio: si surge una urgencia en un mal momento del mercado, tendrás que vender tus inversiones con pérdida o pedir un préstamo caro.",
          "El fondo de emergencia cumple tres funciones:",
          "- **Evita deudas caras.** Un préstamo personal o el saldo revolvente de una tarjeta pueden costar intereses anuales muy altos. Pagar una emergencia con dinero propio no cuesta nada.\n- **Protege tus inversiones.** Puedes dejar que tu dinero invertido crezca a largo plazo sin tocarlo en cada sobresalto.\n- **Da tranquilidad para decidir.** Quien tiene unos meses de gastos cubiertos puede buscar un mejor trabajo, negociar o esperar, en lugar de aceptar lo primero que aparece por necesidad."
        ]
      },
      {
        "h": "¿Cuánto dinero debe tener?",
        "p": [
          "La recomendación más difundida es reunir entre **tres y seis meses de gastos esenciales**. Fíjate en la palabra *esenciales*: no se trata de tu ingreso completo ni de tu nivel de gasto actual con salidas y compras, sino de lo que necesitas para vivir si de pronto todo se detiene.",
          "Para calcularlo, suma en un mes típico:",
          "1. Vivienda: renta o hipoteca, servicios básicos (agua, luz, gas, internet).\n2. Alimentación en casa.\n3. Transporte para trabajar o buscar trabajo.\n4. Salud: medicinas habituales, seguro, consultas.\n5. Pagos mínimos de deudas que no puedes dejar de cubrir.\n6. Gastos de los hijos que no se pueden recortar, como la escuela.",
          "Si el total es, por ejemplo, el equivalente a 600 dólares al mes, tu meta estaría entre 1.800 y 3.600 dólares (o su equivalente en tu moneda).",
          "### ¿Tres meses o seis… o más?",
          "Elige el extremo alto, o incluso más de seis meses, si:",
          "- Trabajas por tu cuenta o tus ingresos cambian mucho de un mes a otro.\n- Eres el único ingreso del hogar.\n- Tienes dependientes, como hijos o padres mayores.\n- Tu sector tarda en contratar o la economía de tu país es inestable.\n- No tienes seguro médico o tu cobertura es limitada.",
          "Puedes acercarte a tres meses si hay dos ingresos estables en casa, tienes contrato formal con indemnización por despido y cuentas con seguro de salud."
        ]
      },
      {
        "h": "Dónde guardarlo",
        "p": [
          "El fondo de emergencia debe cumplir tres condiciones, en este orden de importancia:",
          "1. **Seguridad.** No puede depender de que una acción o una criptomoneda esté arriba el día que lo necesites.\n2. **Disponibilidad.** Debes poder retirarlo en uno o dos días como máximo.\n3. **Algo de rendimiento.** Lo ideal es que crezca al menos un poco para no perder tanto frente a la inflación.",
          "Opciones habituales en la región:",
          "- **Cuenta de ahorro o cuenta remunerada** en un banco o entidad regulada y con seguro de depósitos de tu país. Revisa que no cobre comisiones por manejo ni por retiros.\n- **Fondos de inversión de liquidez diaria o de deuda de corto plazo**, cuando están regulados y permiten rescatar en uno o dos días.\n- **Depósitos a plazo escalonados**: dividir parte del fondo en depósitos que vencen en meses distintos, de modo que siempre haya uno cerca de vencer. Úsalo solo para la porción que no necesitarías en la primera semana.",
          "Lo que conviene evitar:",
          "- Dejarlo en efectivo en casa, salvo una cantidad pequeña para el primer día de una emergencia. Se pierde, se gasta y no rinde.\n- Ponerlo en inversiones volátiles (acciones, criptomonedas, divisas especulativas).\n- Guardarlo en la misma cuenta donde recibes el sueldo y pagas todo, porque se mezcla con el gasto diario y se va sin darte cuenta.",
          "> Consejo práctico: abre una cuenta separada, idealmente en otra institución, y ponle un nombre como \"Solo emergencias\". La pequeña fricción de transferir desde otro lugar ayuda a no usarlo para caprichos.",
          "### ¿Y si mi moneda pierde valor rápido?",
          "En países con inflación alta o devaluaciones frecuentes, muchas familias guardan parte de su colchón en una moneda más estable o en instrumentos indexados a la inflación cuando la ley lo permite. Si lo haces, ten en cuenta los costos de cambio, las reglas locales y que la emergencia la pagarás en moneda local. Una combinación razonable es mantener uno o dos meses en moneda local, disponible de inmediato, y el resto en una alternativa que conserve mejor el valor y que puedas convertir en pocos días."
        ]
      },
      {
        "h": "Cómo armarlo si ganas poco",
        "p": [
          "Reunir varios meses de gastos puede parecer imposible. La clave es dividir la meta en etapas pequeñas y celebrar cada una.",
          "### Etapa 1: el mini fondo",
          "Empieza con una meta modesta: el equivalente a un mes de gastos de comida, o una cifra redonda que puedas alcanzar en dos o tres meses. Este primer colchón ya evita muchos préstamos pequeños para imprevistos menores, como una consulta médica o una pieza del celular.",
          "### Etapa 2: un mes completo de gastos esenciales",
          "Con el hábito creado, sube la meta a un mes completo de gastos esenciales.",
          "### Etapa 3: de tres a seis meses",
          "Ahora sí, avanza hacia la meta completa a tu ritmo. Puede tomar uno o dos años, y está bien.",
          "### Técnicas que funcionan",
          "- **Págate primero.** Programa una transferencia automática el mismo día que cobras. Lo que no ves en tu cuenta principal, no lo gastas.\n- **Empieza con un porcentaje pequeño.** Un 5 % del ingreso es mejor que nada. Súbelo un punto cada vez que recibas un aumento.\n- **Ahorra los ingresos extraordinarios.** Aguinaldo, bonos, devoluciones de impuestos, ventas de cosas que ya no usas: destina al fondo al menos la mitad.\n- **Redondea.** Algunas apps y bancos redondean cada compra y envían la diferencia a una cuenta de ahorro. Son montos pequeños que suman.\n- **Revisa los gastos hormiga.** Pequeños gastos diarios que parecen inofensivos pueden sumar bastante al mes. Reducir algunos puede alimentar el fondo sin sentir un gran sacrificio."
        ]
      },
      {
        "h": "Qué cuenta como emergencia (y qué no)",
        "p": [
          "Para que el fondo cumpla su función, conviene definir las reglas antes de necesitarlo. Una pregunta útil es: *¿es inesperado, necesario y urgente?* Si falla una de las tres, probablemente no es una emergencia.",
          "Sí suelen ser emergencias:",
          "- Pérdida del empleo o caída fuerte de ingresos.\n- Gastos médicos no cubiertos.\n- Reparaciones imprescindibles de la vivienda (una fuga, una instalación eléctrica peligrosa).\n- La reparación del vehículo que usas para trabajar.\n- Un viaje urgente por enfermedad o fallecimiento de un familiar.",
          "No son emergencias:",
          "- Ofertas, aunque sean muy buenas.\n- Vacaciones, regalos, fiestas o el regreso a clases, que se pueden prever y deben tener su propio ahorro.\n- Cambiar de celular porque salió un modelo nuevo.",
          "Si los gastos previsibles te suelen tomar por sorpresa, crea *fondos de propósito* separados: uno para el regreso a clases, otro para el mantenimiento del auto, otro para fin de año. Así el fondo de emergencia queda para lo verdaderamente inesperado."
        ]
      },
      {
        "h": "Qué hacer después de usarlo",
        "p": [
          "Usar el fondo no es un fracaso: para eso existe. Después de una emergencia:",
          "1. **Reconstrúyelo cuanto antes.** Vuelve a la etapa del mini fondo y reactiva la transferencia automática, aunque sea con un monto menor al principio.\n2. **Revisa si fue realmente imprevisto.** Si fue un gasto que podría repetirse (por ejemplo, el mantenimiento del auto), crea un ahorro específico para la próxima vez.\n3. **Ajusta la meta.** Si descubriste que tus gastos esenciales son mayores de lo que pensabas, recalcula el tamaño del fondo."
        ]
      },
      {
        "h": "Errores comunes",
        "p": [
          "- **Esperar a tener deudas en cero para empezar.** Lo recomendable suele ser armar primero un mini fondo y luego atacar las deudas caras, para que una emergencia no te obligue a endeudarte de nuevo mientras pagas.\n- **Invertirlo todo buscando rendimiento.** El rendimiento del fondo de emergencia es secundario; su trabajo es estar ahí.\n- **No actualizarlo.** Si tu familia crece, te mudas o tus gastos suben con la inflación, revisa la meta al menos una vez al año.\n- **Tenerlo pero no saber dónde está.** Asegúrate de que tu pareja o una persona de confianza sepa que existe y cómo acceder a él en caso de que tú no puedas."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Un fondo de emergencia cubre imprevistos para que no tengas que endeudarte.\n- La meta habitual es de tres a seis meses de gastos esenciales; más si tus ingresos son variables o hay dependientes.\n- Guárdalo en un lugar seguro, disponible en uno o dos días y separado de tu cuenta de gastos.\n- Empieza con un mini fondo, automatiza el ahorro y destina ingresos extraordinarios.\n- Después de usarlo, reconstrúyelo y ajusta la meta.",
          "Este contenido es informativo y general. Las condiciones de las cuentas, los seguros de depósito y las reglas cambiarias varían según el país; antes de elegir un producto, revisa la información oficial de tu regulador financiero."
        ]
      }
    ]
  },
  {
    "slug": "gastos-hormiga",
    "category": "espanol",
    "lang": "es",
    "title": "Gastos hormiga: cómo detectarlos, medir su impacto y reducirlos sin vivir a dieta",
    "excerpt": "Qué son los gastos hormiga, cómo descubrir cuánto te cuestan al mes y al año, y estrategias realistas para recortarlos sin renunciar a todo lo que disfrutas.",
    "date": "2026-08-07",
    "minutes": 6,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Se les llama gastos hormiga porque, como las hormigas, son pequeños y pasan casi desapercibidos, pero juntos cargan con una parte sorprendente de tu dinero. Un café para llevar, una botella de agua, la comisión de un retiro en un cajero de otro banco, una suscripción que olvidaste cancelar, el antojo de la tienda de la esquina… Ninguno parece importante por sí solo. El problema aparece cuando los sumas.",
          "Esta guía te ayuda a encontrarlos, a medir lo que de verdad te cuestan y a decidir cuáles mantener y cuáles eliminar. No se trata de prohibirte todo, sino de que cada gasto pequeño sea una elección consciente y no un reflejo."
        ]
      },
      {
        "h": "Qué cuenta como gasto hormiga",
        "p": [
          "Un gasto hormiga tiene tres rasgos:",
          "1. **Es pequeño**: el monto individual parece insignificante.\n2. **Es frecuente**: se repite varias veces por semana o por mes.\n3. **Es automático**: lo haces por costumbre, sin planearlo ni pensarlo mucho.",
          "Ejemplos frecuentes en Latinoamérica:",
          "- Bebidas y botanas compradas en la calle o en tiendas de conveniencia.\n- Cafés, refrescos o jugos fuera de casa.\n- Comisiones bancarias: retiros en cajeros ajenos, manejo de cuenta, transferencias.\n- Servicios de entrega a domicilio para compras pequeñas, con sus cargos de envío y propinas.\n- Suscripciones digitales que se renuevan solas: streaming, música, almacenamiento, apps.\n- Recargas de celular más caras que un plan, o paquetes de datos comprados a última hora.\n- Cigarros, billetes de lotería, apuestas pequeñas.\n- Compras \"por si acaso\" en el supermercado que luego se desperdician.",
          "No todos son malos. Un café con un amigo puede valer cada centavo. El objetivo es que el gasto sea intencional."
        ]
      },
      {
        "h": "Paso 1: rastrea durante 30 días",
        "p": [
          "No se puede reducir lo que no se ve. Durante un mes, anota **todo** lo que gastes, por pequeño que sea. Puedes usar:",
          "- Una nota en el celular o una hoja de cálculo sencilla.\n- Una app de finanzas personales que clasifique los movimientos.\n- El estado de cuenta de tu tarjeta o cuenta, si pagas casi todo de forma digital.",
          "Lo más importante es registrar también lo que pagas en efectivo, porque es justamente donde se esconden muchos gastos hormiga.",
          "Para cada gasto anota: fecha, monto, en qué fue y si fue planeado o impulsivo."
        ]
      },
      {
        "h": "Paso 2: calcula el costo real",
        "p": [
          "Al final del mes, agrupa los gastos pequeños por tipo y súmalos. Luego multiplica para ver el impacto anual. Este cálculo suele ser revelador.",
          "Un ejemplo ilustrativo, usando una moneda genérica:",
          "| Gasto | Frecuencia | Monto | Al mes | Al año |\n|---|---|---|---|---|\n| Café para llevar | 5 por semana | 3 | 60 | 720 |\n| Botana y refresco | 4 por semana | 2 | 32 | 384 |\n| Comisión de cajero ajeno | 3 al mes | 2,5 | 7,5 | 90 |\n| Suscripción olvidada | 1 al mes | 9 | 9 | 108 |\n| Envíos a domicilio | 4 al mes | 4 | 16 | 192 |\n| **Total** | | | **124,5** | **1.494** |",
          "Con estas cifras de ejemplo, los gastos hormiga equivalen a casi 1.500 unidades al año: lo suficiente para formar buena parte de un fondo de emergencia o para pagar una deuda.",
          "### Compáralo con tus metas",
          "Un truco útil es traducir el gasto a algo que quieras. Si tu meta es un fondo de emergencia de 1.800, ver que los gastos hormiga suman 1.494 al año hace evidente la conexión. No es lo mismo pensar \"es solo un café\" que pensar \"es parte de mi colchón\"."
        ]
      },
      {
        "h": "Paso 3: clasifica en tres grupos",
        "p": [
          "Revisa tu lista y coloca cada gasto en uno de estos grupos:",
          "1. **Mantener**: te da una alegría real, tiene sentido para ti y cabe en tu presupuesto. Ejemplo: el café del viernes con tu equipo.\n2. **Reducir**: lo disfrutas, pero la frecuencia es excesiva. Ejemplo: pasar de cinco cafés a la semana a dos.\n3. **Eliminar**: no aporta valor o ni siquiera recordabas que lo pagabas. Ejemplo: una suscripción que no usas o las comisiones de cajero.",
          "Este enfoque evita el efecto rebote. Las dietas financieras extremas, como en la alimentación, suelen fracasar: quien se prohíbe todo termina gastando más después."
        ]
      },
      {
        "h": "Estrategias concretas para reducirlos",
        "p": [
          "### Comisiones bancarias",
          "- Usa los cajeros de tu propio banco o de su red asociada.\n- Retira montos mayores con menos frecuencia, si es seguro hacerlo.\n- Compara cuentas: muchas entidades y bancos digitales ofrecen cuentas sin comisión por manejo.\n- Paga con transferencias o tarjeta de débito cuando no generen costo.",
          "### Suscripciones",
          "- Revisa tus estados de cuenta de los últimos tres meses y lista todas las suscripciones.\n- Cancela las que no hayas usado en el último mes.\n- Considera rotarlas: mantener un solo servicio de streaming a la vez y cambiar cada pocos meses.\n- Pon un recordatorio antes de que termine cualquier prueba gratuita.",
          "### Comida y bebida fuera de casa",
          "- Lleva un termo con café o agua y un refrigerio de casa.\n- Prepara tu comida la noche anterior algunos días a la semana.\n- Si compras fuera, decide un presupuesto semanal fijo en efectivo o en una tarjeta prepagada; cuando se acaba, se acaba.",
          "### Envíos a domicilio y compras pequeñas",
          "- Agrupa las compras para pagar un solo envío.\n- Evita entrar a apps de comida cuando tienes hambre y prisa: planear el menú semanal ayuda.\n- Antes de comprar, espera 24 horas en las compras no esenciales. Muchos impulsos desaparecen solos.",
          "### Telefonía e internet",
          "- Compara el costo de tus recargas con un plan mensual equivalente.\n- Usa wifi en casa y el trabajo para reducir el consumo de datos.\n- Revisa si estás pagando servicios que no usas, como seguros del equipo o servicios adicionales."
        ]
      },
      {
        "h": "Que el ahorro no se pierda",
        "p": [
          "Recortar gastos hormiga solo sirve si el dinero liberado llega a un destino concreto. Si no, simplemente se gastará en otra cosa. Dos métodos sencillos:",
          "- **Transferencia semanal**: cada domingo, transfiere a tu cuenta de ahorro lo que calculaste que dejaste de gastar esa semana.\n- **Ahorro automático fijo**: si redujiste gastos por 100 al mes, programa una transferencia automática de 100 el día de cobro.",
          "Ponle nombre al destino: \"fondo de emergencia\", \"pago extra de tarjeta\", \"viaje de diciembre\". Ver la cuenta crecer refuerza el hábito."
        ]
      },
      {
        "h": "Cuándo un gasto hormiga es una señal de algo más",
        "p": [
          "A veces los gastos pequeños y constantes reflejan cansancio, estrés o falta de tiempo: compramos comida hecha porque llegamos agotados, o gastamos en pequeñas recompensas porque el día fue difícil. En estos casos, la solución no es solo fuerza de voluntad. Puede ayudar:",
          "- Planificar con anticipación las semanas más cargadas.\n- Preparar comidas en lote el fin de semana.\n- Buscar recompensas gratuitas o baratas que también te den descanso.",
          "Si notas que las apuestas, el alcohol o las compras se han vuelto difíciles de controlar, busca apoyo profesional o de organizaciones especializadas en tu país."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Los gastos hormiga son pequeños, frecuentes y automáticos; juntos pueden sumar una cantidad importante al año.\n- Regístralos durante 30 días, súmalos y multiplica por doce para ver su impacto real.\n- Clasifícalos en mantener, reducir o eliminar, en lugar de prohibirte todo.\n- Aplica estrategias concretas: evita comisiones, revisa suscripciones, planea comidas y agrupa compras.\n- Envía el dinero liberado a una meta concreta para que el ahorro no desaparezca.",
          "Las cifras de los ejemplos son ilustrativas. Adapta los montos a tu moneda y a tu situación."
        ]
      }
    ]
  },
  {
    "slug": "historial-crediticio",
    "category": "espanol",
    "lang": "es",
    "title": "Historial crediticio: qué es, cómo consultarlo gratis y cómo mejorarlo paso a paso",
    "excerpt": "Qué guardan los burós o centrales de riesgo, cómo se forma tu puntaje, cómo pedir tu reporte, corregir errores y construir un buen historial aunque empieces de cero.",
    "date": "2026-08-28",
    "minutes": 6,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Cuando pides un préstamo, una tarjeta, un crédito para auto o incluso cuando contratas algunos servicios o rentas una vivienda, la entidad quiere saber cómo has manejado tus compromisos en el pasado. Esa información está en tu **historial crediticio**, que guardan las sociedades de información crediticia, conocidas según el país como buró de crédito, centrales de riesgo o bureaus.",
          "Tener un buen historial no significa no tener deudas, sino haberlas pagado bien. Esta guía explica qué contiene, cómo consultarlo y qué puedes hacer para mejorarlo."
        ]
      },
      {
        "h": "Qué contiene tu historial",
        "p": [
          "Tu reporte de crédito suele incluir:",
          "- **Datos de identificación**: nombre, documento de identidad, direcciones registradas.\n- **Créditos activos y cerrados**: tarjetas, préstamos personales, hipotecarios, automotrices, créditos de tiendas departamentales y, en algunos países, servicios como telefonía.\n- **Comportamiento de pago**: si pagaste a tiempo o con atraso, y cuántos días de retraso hubo.\n- **Saldos y límites**: cuánto debes y cuánto crédito tienes disponible.\n- **Consultas**: qué entidades revisaron tu historial y cuándo.",
          "Es importante saber que estas entidades **no deciden** si te dan un crédito o no. Solo registran información; la decisión la toma cada banco o financiera según sus propias políticas."
        ]
      },
      {
        "h": "El puntaje o score crediticio",
        "p": [
          "Muchos burós calculan un **puntaje** a partir de tu historial: un número que resume la probabilidad de que pagues a tiempo. Cada sistema tiene su propia escala y fórmula, pero en general influyen los mismos factores:",
          "1. **Puntualidad en los pagos**: es el factor más importante. Los atrasos, sobre todo los recientes y largos, bajan el puntaje.\n2. **Nivel de uso del crédito**: usar una parte pequeña de tu límite disponible suele verse mejor que usarlo casi todo.\n3. **Antigüedad**: un historial largo da más información y suele favorecer el puntaje.\n4. **Tipos de crédito**: manejar bien distintos tipos (por ejemplo, una tarjeta y un préstamo) puede ayudar.\n5. **Solicitudes recientes**: pedir muchos créditos en poco tiempo puede interpretarse como necesidad urgente de dinero."
        ]
      },
      {
        "h": "Cómo consultar tu historial",
        "p": [
          "En muchos países de la región la ley permite consultar tu reporte de crédito **gratis al menos una vez al año** directamente con la sociedad de información crediticia, a través de su sitio web oficial o sus oficinas. Busca en el sitio del regulador financiero de tu país la lista de entidades autorizadas.",
          "Al consultarlo:",
          "- Usa siempre el sitio oficial, escribiendo la dirección tú mismo. Hay páginas falsas que imitan a los burós para robar datos.\n- Ten a mano tu documento de identidad y datos de algún crédito que tengas, porque pueden pedirlos para verificar tu identidad.\n- Descarga y guarda el reporte.",
          "Consultar tu propio historial **no baja tu puntaje**. Lo que puede afectar es que muchas entidades lo consulten en poco tiempo porque solicitaste varios créditos."
        ]
      },
      {
        "h": "Cómo corregir errores",
        "p": [
          "Revisa tu reporte línea por línea. Errores frecuentes:",
          "- Créditos que no reconoces, que podrían indicar robo de identidad.\n- Deudas ya pagadas que aparecen como vigentes o con atraso.\n- Datos personales incorrectos.\n- Montos que no coinciden con tus estados de cuenta.",
          "Si encuentras algo incorrecto:",
          "1. Reúne pruebas: comprobantes de pago, cartas de finiquito, estados de cuenta.\n2. Presenta una reclamación ante la sociedad de información crediticia por sus canales oficiales; suelen tener un procedimiento y plazo establecido por ley.\n3. Contacta también a la entidad que reportó el dato.\n4. Si no se resuelve, acude a la autoridad de protección al consumidor financiero de tu país.",
          "Cuando liquides una deuda, pide siempre una **carta de finiquito** o constancia de no adeudo y guárdala."
        ]
      },
      {
        "h": "Cómo mejorar tu historial",
        "p": [
          "### Si ya tienes atrasos",
          "- **Ponte al corriente cuanto antes.** Un atraso de 30 días pesa menos que uno de 90 o más.\n- **Negocia con el acreedor** si no puedes pagar el total. Un convenio de pago cumplido es mejor que una deuda abandonada, aunque el registro de que hubo un convenio puede permanecer un tiempo.\n- **Ten paciencia.** Los registros negativos no son eternos; en muchos países existen plazos legales después de los cuales se eliminan. Mientras tanto, cada mes de pagos puntuales suma a tu favor.",
          "### Si estás empezando de cero",
          "No tener historial también es un obstáculo: para las entidades eres un desconocido. Para empezar:",
          "- **Tarjeta de crédito básica o garantizada**: algunas entidades ofrecen tarjetas con límite bajo o respaldadas por un depósito. Úsala para pocas compras y paga el total.\n- **Crédito de nómina o de tienda pequeño**, solo si lo necesitas y puedes pagarlo con holgura.\n- **Pagar a tiempo los servicios** que en tu país se reportan a centrales de riesgo, como algunos planes de telefonía.",
          "### Hábitos que construyen un buen historial",
          "1. Paga siempre a tiempo, aunque sea el mínimo en una emergencia; mejor aún, el total.\n2. Usa una parte moderada de tu límite. Muchas personas se guían por no superar alrededor de un tercio del límite disponible.\n3. No abras muchos créditos a la vez.\n4. No cierres de golpe tu tarjeta más antigua si no tiene costo, porque aporta antigüedad.\n5. Revisa tu reporte al menos una vez al año."
        ]
      },
      {
        "h": "Cuidado con los \"limpiadores de historial\"",
        "p": [
          "Existen empresas o personas que prometen \"borrar tu historial\" o \"sacarte del buró\" a cambio de un pago. Nadie puede eliminar información verídica antes de los plazos legales. Lo único que sí se puede corregir es la información errónea, y eso se hace gratis mediante los canales oficiales. Si alguien te pide dinero por adelantado para limpiar tu historial, es muy probable que se trate de un fraude."
        ]
      },
      {
        "h": "Robo de identidad: cómo protegerte",
        "p": [
          "- No compartas fotos de tu documento de identidad por mensajería con desconocidos.\n- Desconfía de llamadas que piden datos personales \"para actualizar tu crédito\".\n- Revisa tu historial si pierdes tus documentos o sospechas de un uso indebido.\n- Si detectas créditos que no solicitaste, denuncia ante las autoridades y presenta la reclamación ante el buró."
        ]
      },
      {
        "h": "Preguntas frecuentes",
        "p": [
          "### ¿Estar en el buró significa estar en una lista negra?",
          "No. Todos los que alguna vez han tenido un crédito aparecen en el buró; es solo un registro. Lo que importa es si tu comportamiento de pago es bueno o malo.",
          "### ¿Cuánto tiempo tarda en mejorar mi puntaje?",
          "Depende del sistema y de tu situación, pero los cambios suelen notarse en meses, no en días. Varios meses seguidos de pagos puntuales y un uso moderado del crédito tienden a mejorarlo de forma gradual."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- El historial crediticio registra cómo has pagado tus créditos; el buró no aprueba ni rechaza préstamos.\n- La puntualidad es el factor más importante; también influyen el uso del crédito, la antigüedad y las solicitudes recientes.\n- Consulta tu reporte gratis en el sitio oficial y corrige errores por los canales legales.\n- Si empiezas de cero, usa productos sencillos y paga siempre el total.\n- Desconfía de quien promete borrar tu historial a cambio de dinero.",
          "Los plazos, derechos y nombres de las entidades varían según el país. Consulta la información oficial de tu regulador financiero."
        ]
      }
    ]
  },
  {
    "slug": "inflacion-y-poder-adquisitivo",
    "category": "espanol",
    "lang": "es",
    "title": "Inflación y poder adquisitivo: qué significan para tu bolsillo y cómo protegerte",
    "excerpt": "Explicación clara de la inflación, cómo erosiona tus ahorros y tu sueldo, cómo leer los datos oficiales y qué medidas prácticas ayudan a cuidar el valor de tu dinero.",
    "date": "2026-08-14",
    "minutes": 7,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Pocas palabras económicas tienen un efecto tan directo en la vida diaria como *inflación*. En muchos países de Latinoamérica la historia está marcada por periodos de precios que subían mes a mes, y aun cuando la inflación es moderada, su efecto acumulado durante años es enorme. Entenderla bien ayuda a tomar mejores decisiones con el sueldo, el ahorro y las deudas."
        ]
      },
      {
        "h": "Qué es la inflación",
        "p": [
          "La inflación es el aumento generalizado y sostenido de los precios. *Generalizado* significa que no se trata de un solo producto que sube por una mala cosecha, sino de muchos bienes y servicios a la vez. *Sostenido* quiere decir que ocurre a lo largo del tiempo, no en un solo día.",
          "La otra cara de la inflación es la pérdida de **poder adquisitivo**: con la misma cantidad de dinero puedes comprar menos cosas que antes.",
          "Un ejemplo sencillo: si una canasta de compras cuesta 100 y la inflación anual es del 10 %, al año siguiente costará unos 110. Si tu sueldo no subió, ahora puedes comprar aproximadamente un 9 % menos con el mismo dinero."
        ]
      },
      {
        "h": "Cómo se mide",
        "p": [
          "Los institutos de estadística de cada país calculan un **índice de precios al consumidor (IPC o INPC)**. Para ello registran periódicamente los precios de una canasta representativa: alimentos, vivienda, transporte, salud, educación, ropa, servicios, etc. La variación de ese índice es la inflación oficial.",
          "Es útil saber leer tres cifras:",
          "- **Inflación mensual**: cuánto subieron los precios respecto al mes anterior.\n- **Inflación anual o interanual**: cuánto subieron respecto al mismo mes del año anterior. Es la cifra más citada.\n- **Inflación subyacente**: excluye los precios más volátiles (como algunos alimentos frescos o la energía) para mostrar la tendencia de fondo.",
          "### Tu inflación personal no es la oficial",
          "El índice oficial representa a un hogar promedio. Tu canasta puede ser diferente: si gastas mucho en transporte, alquiler o medicinas, y esos rubros suben más que el resto, tu inflación personal será mayor que la oficial. Por eso conviene revisar tu propio presupuesto de un año a otro y comparar cuánto pagas por lo mismo."
        ]
      },
      {
        "h": "Por qué existe la inflación",
        "p": [
          "Las causas son variadas y los economistas las debaten, pero algunas son ampliamente aceptadas:",
          "- **Demanda mayor que la oferta**: cuando la gente quiere comprar más de lo que la economía puede producir, los precios suben.\n- **Aumento de costos**: si sube la energía, el transporte o las materias primas, las empresas trasladan parte del costo a los precios.\n- **Expansión del dinero**: cuando la cantidad de dinero crece mucho más rápido que la producción, por ejemplo para financiar déficits públicos, suele aparecer inflación.\n- **Tipo de cambio**: en economías que importan mucho, una devaluación encarece los productos importados.\n- **Expectativas**: si todos esperan que los precios suban, se ajustan sueldos y precios por adelantado, lo que alimenta la inflación.",
          "Los bancos centrales de la región suelen tener como objetivo mantener la inflación baja y estable, usando principalmente la tasa de interés de referencia."
        ]
      },
      {
        "h": "Cómo afecta a tu dinero",
        "p": [
          "### El efectivo y la cuenta sin intereses pierden valor",
          "El dinero guardado sin rendimiento pierde poder adquisitivo cada año. Con una inflación del 5 % anual, en diez años los precios suben más de un 60 %; el mismo billete compra bastante menos.",
          "### El ahorro con rendimiento bajo también puede perder",
          "Lo importante es el **rendimiento real**: lo que ganas por encima de la inflación. De forma aproximada:",
          "> Rendimiento real ≈ rendimiento nominal − inflación",
          "Si una cuenta paga 4 % y la inflación es 6 %, tu rendimiento real es aproximadamente −2 %: tu dinero crece en cifras, pero compra menos.",
          "### Las deudas a tasa fija se vuelven más ligeras",
          "La inflación tiene un efecto contrario en las deudas a tasa fija en tu moneda: si tu sueldo sube con la inflación y la cuota se mantiene, la cuota pesa cada vez menos. Por el contrario, las deudas a tasa variable o indexadas pueden encarecerse cuando suben las tasas para combatir la inflación.",
          "### El sueldo puede quedarse atrás",
          "Si tu aumento anual es menor que la inflación, en términos reales ganaste menos. Llevar la cuenta de la inflación te da argumentos para negociar o para decidir cambios laborales."
        ]
      },
      {
        "h": "Medidas prácticas para protegerte",
        "p": [
          "No hay una fórmula única, y en contextos de inflación muy alta las opciones dependen mucho de la regulación de cada país. Aun así, hay principios generales:",
          "### 1. Mantén el fondo de emergencia, pero sin exceso de efectivo",
          "Necesitas liquidez, pero no tiene sentido tener años de gastos en una cuenta que no paga intereses. Guarda en efectivo lo mínimo y el resto del colchón en instrumentos seguros que paguen algo, idealmente cerca o por encima de la inflación.",
          "### 2. Busca instrumentos que acompañen a la inflación",
          "En varios países existen instrumentos de deuda pública o depósitos ajustados por inflación o por unidades indexadas. Suelen ser una opción para preservar el valor a mediano plazo. Infórmate en el sitio oficial del tesoro o del banco central de tu país sobre cómo invertir directamente y con qué costos.",
          "### 3. Para el largo plazo, considera activos reales y diversificados",
          "Históricamente, a plazos largos, las inversiones diversificadas en empresas (por ejemplo, mediante fondos indexados) y algunos activos reales han tendido a superar la inflación, aunque con altibajos fuertes en el camino. Solo tienen sentido para dinero que no necesitarás en varios años.",
          "### 4. Revisa tu presupuesto al menos dos veces al año",
          "Los precios cambian, y un presupuesto de hace un año puede estar desactualizado. Ajusta montos de comida, transporte y servicios para que el plan siga siendo realista.",
          "### 5. Compra con inteligencia, no por pánico",
          "En periodos inflacionarios aparece la tentación de comprar todo de inmediato \"antes de que suba\". Adelantar compras de productos no perecederos que sí usarás puede tener sentido; endeudarte para acumular cosas, no.",
          "### 6. Cuida las tasas de tus deudas",
          "Prioriza pagar deudas a tasa variable o muy cara. Si tienes una deuda a tasa fija razonable en tu moneda, no siempre es urgente liquidarla antes que formar tu colchón.",
          "### 7. Invierte en tu capacidad de generar ingresos",
          "La mejor defensa a largo plazo es que tus ingresos crezcan: capacitación, certificaciones, diversificar clientes o desarrollar una habilidad con demanda."
        ]
      },
      {
        "h": "Cuidado con las promesas de \"protección\"",
        "p": [
          "Los periodos de inflación alta atraen esquemas fraudulentos que prometen rendimientos fijos muy por encima del mercado o \"protección total\" contra la devaluación. Desconfía si:",
          "- Te garantizan rendimientos altos sin riesgo.\n- La entidad no está registrada ante el regulador financiero de tu país.\n- Te presionan para decidir rápido o para traer a otras personas."
        ]
      },
      {
        "h": "Un ejercicio para medir tu propia inflación",
        "p": [
          "Para saber cómo te afecta de verdad la subida de precios, haz este ejercicio una vez al año:",
          "1. Elige diez productos y servicios que compras con frecuencia: por ejemplo, un kilo de arroz, un litro de aceite, el pasaje del transporte, la recarga del celular, el recibo de luz y la colegiatura.\n2. Anota cuánto pagas hoy por cada uno y guárdalo.\n3. Doce meses después, anota los nuevos precios y calcula el aumento porcentual de cada uno.\n4. Pondera según lo que pesa cada gasto en tu presupuesto: un aumento del 20 % en la renta importa mucho más que uno igual en un producto que compras una vez al año.",
          "El resultado te da una idea más cercana a tu realidad que el promedio nacional y te ayuda a decidir dónde ajustar: cambiar de marca, comprar a granel, renegociar un servicio o buscar una ruta de transporte más barata.",
          "### Cómo usar la inflación al negociar tu sueldo",
          "Si trabajas como empleado, la inflación del último año es un dato objetivo para pedir un ajuste salarial: un aumento menor que la inflación equivale a una reducción real. Si trabajas por tu cuenta, revisa tus tarifas al menos una vez al año con el mismo criterio y comunícalo a tus clientes con anticipación, explicando que se trata de mantener el valor del servicio y no de un aumento arbitrario."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- La inflación es el aumento generalizado de precios y reduce el poder adquisitivo.\n- Se mide con el índice de precios al consumidor; tu inflación personal puede ser distinta.\n- Lo que importa es el rendimiento real: lo que ganas por encima de la inflación.\n- Protégete con liquidez moderada, instrumentos indexados cuando existan, inversiones diversificadas a largo plazo y un presupuesto actualizado.\n- Desconfía de promesas de rendimientos altos sin riesgo.",
          "Esta guía es informativa y no constituye asesoría financiera personalizada. Las alternativas de inversión y su tratamiento fiscal dependen del país."
        ]
      }
    ]
  },
  {
    "slug": "metas-de-ahorro",
    "category": "espanol",
    "lang": "es",
    "title": "Metas de ahorro que sí se cumplen: cómo definirlas, priorizarlas y seguirlas",
    "excerpt": "Cómo convertir deseos vagos en metas de ahorro concretas, calcular cuánto apartar cada mes, ordenar varias metas a la vez y mantener la motivación hasta lograrlas.",
    "date": "2026-08-18",
    "minutes": 7,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "\"Quiero ahorrar más\" es uno de los propósitos más repetidos de cada año, y también uno de los que más se abandonan. El problema no suele ser la falta de voluntad, sino que la meta es demasiado vaga: no dice para qué, cuánto ni cuándo. Una meta de ahorro bien definida, en cambio, se convierte en un plan con fecha y monto mensual, y eso cambia por completo las probabilidades de lograrla."
        ]
      },
      {
        "h": "De deseo a meta: la fórmula básica",
        "p": [
          "Una meta de ahorro útil responde a cuatro preguntas:",
          "1. **¿Para qué?** El propósito concreto: un fondo de emergencia, el enganche de una vivienda, un curso, una computadora para trabajar, las vacaciones de diciembre.\n2. **¿Cuánto?** Un monto preciso, investigado, no un número al azar.\n3. **¿Para cuándo?** Una fecha límite realista.\n4. **¿Cuánto por mes?** El resultado de dividir el monto entre los meses disponibles.",
          "Ejemplo: \"Quiero comprar una computadora\" se convierte en \"Quiero 900 para una computadora de trabajo dentro de 10 meses, así que apartaré 90 cada mes\".",
          "Esta estructura se parece al conocido método SMART (específica, medible, alcanzable, relevante y con tiempo definido). Lo importante no es el nombre, sino que la meta deje de ser un deseo y se vuelva un número que puedes revisar."
        ]
      },
      {
        "h": "Cómo calcular el monto correcto",
        "p": [
          "Muchas metas fracasan porque el monto estaba mal calculado desde el inicio. Algunos consejos:",
          "- **Investiga precios reales**, no estimaciones. Cotiza en dos o tres lugares.\n- **Suma los costos ocultos**: envío, impuestos, instalación, trámites, comisiones. En una vivienda, por ejemplo, además del enganche hay gastos notariales, avalúo y mudanza.\n- **Considera la inflación** si la meta está a más de un año. Si el precio puede subir, añade un margen; una forma sencilla es aumentar el monto en el porcentaje de inflación anual esperado por cada año que falte.\n- **Agrega un pequeño colchón** del 5 % al 10 % para imprevistos."
        ]
      },
      {
        "h": "Metas de corto, mediano y largo plazo",
        "p": [
          "No todas las metas son iguales, y el plazo cambia dónde conviene guardar el dinero:",
          "| Plazo | Ejemplos | Dónde guardar el ahorro |\n|---|---|---|\n| Corto (menos de 1 año) | Vacaciones, regalos de fin de año, una reparación prevista | Cuenta de ahorro o instrumento muy líquido, sin riesgo |\n| Mediano (1 a 5 años) | Enganche de un auto o vivienda, un posgrado | Depósitos a plazo, deuda pública de corto o mediano plazo, instrumentos conservadores |\n| Largo (más de 5 años) | Retiro, educación universitaria de los hijos | Inversiones diversificadas acordes a tu perfil, porque hay tiempo para recuperarse de caídas |",
          "La regla general es que cuanto más cerca esté la fecha, menos riesgo debes asumir. Un dinero que necesitas en seis meses no debería estar en acciones."
        ]
      },
      {
        "h": "Cómo priorizar si tienes varias metas",
        "p": [
          "Es normal querer muchas cosas a la vez. Para no dispersarte, un orden razonable para la mayoría de los hogares es:",
          "1. **Mini fondo de emergencia** (por ejemplo, un mes de gastos esenciales).\n2. **Pagar deudas caras**, como saldos de tarjeta de crédito o préstamos con intereses muy altos.\n3. **Fondo de emergencia completo** (de tres a seis meses de gastos).\n4. **Ahorro para el retiro**, sobre todo si hay aportaciones del empleador que estarías desaprovechando.\n5. **Metas de mediano plazo**: vivienda, auto, estudios.\n6. **Metas de estilo de vida**: viajes, gustos, mejoras del hogar.",
          "Este orden no es rígido. Puedes avanzar en varias metas a la vez repartiendo porcentajes, por ejemplo: 50 % del ahorro al fondo de emergencia, 30 % a la deuda y 20 % a unas vacaciones modestas. Tener una meta divertida en paralelo ayuda a mantener la motivación.",
          "### El método de los sobres digitales",
          "Asigna a cada meta su propia cuenta o subcuenta con nombre: \"Emergencias\", \"Computadora\", \"Diciembre\". Cuando cada peso tiene un destino visible, es más difícil gastarlo en otra cosa y es más fácil ver el progreso de cada objetivo."
        ]
      },
      {
        "h": "Automatiza para no depender de la fuerza de voluntad",
        "p": [
          "La decisión más eficaz es hacer que el ahorro ocurra sin que tengas que pensarlo:",
          "- Programa transferencias automáticas el mismo día en que recibes tu ingreso.\n- Si tu empleador lo permite, divide tu nómina entre dos cuentas.\n- Aumenta el monto automáticamente cada vez que recibas un aumento: destina al ahorro al menos la mitad del incremento.",
          "Cuando el ahorro sale primero, el resto del mes te ajustas a lo que queda, igual que te ajustas a pagar la renta."
        ]
      },
      {
        "h": "Mantén la motivación",
        "p": [
          "Las metas largas pueden desanimar. Algunas ideas:",
          "- **Divide en hitos**: celebra al llegar al 25 %, 50 % y 75 %.\n- **Hazlo visible**: una gráfica en el refrigerador o en la app de tu banco que se va llenando.\n- **Ponle imagen**: guarda una foto de lo que quieres lograr como nombre o portada de la cuenta.\n- **Comparte la meta** con alguien de confianza que te pregunte cómo vas.\n- **Revisa mensualmente**: diez minutos a fin de mes para ver avance y ajustar."
        ]
      },
      {
        "h": "Qué hacer cuando te atrasas",
        "p": [
          "Habrá meses en que no puedas aportar lo planeado. En lugar de abandonar:",
          "1. **Aporta menos, pero aporta.** Mantener el hábito importa más que el monto.\n2. **Ajusta la fecha** si la meta no es urgente, en vez de forzar un presupuesto imposible.\n3. **Revisa el monto**: quizá encuentres una alternativa más barata o una versión reacondicionada.\n4. **Busca ingresos extra puntuales** para recuperar el ritmo: vender algo que ya no usas, un trabajo de fin de semana, horas extra."
        ]
      },
      {
        "h": "Errores que conviene evitar",
        "p": [
          "- **Ahorrar \"lo que sobre\"**: casi nunca sobra. Ahorra primero.\n- **Mezclar el dinero de las metas** con la cuenta de gastos diarios.\n- **Usar el fondo de emergencia para metas** que se podían prever.\n- **Metas que no son tuyas**: si ahorras para algo solo por presión social, es más fácil abandonar.\n- **Endeudarte para cumplir la meta antes**: si al final financias la compra, el ahorro previo debería reducir lo más posible el monto del crédito."
        ]
      },
      {
        "h": "Una plantilla sencilla",
        "p": [
          "Puedes copiar esta tabla en una hoja de cálculo:",
          "| Meta | Monto total | Fecha | Meses | Aporte mensual | Ahorrado | % avance |\n|---|---|---|---|---|---|---|\n| Fondo de emergencia | 2.400 | dic. | 12 | 200 | 600 | 25 % |\n| Computadora | 900 | ago. | 10 | 90 | 270 | 30 % |\n| Vacaciones | 600 | dic. | 12 | 50 | 150 | 25 % |",
          "Con una vista así, sabes en todo momento cuánto apartar y cuánto te falta."
        ]
      },
      {
        "h": "Metas en pareja y en familia",
        "p": [
          "Cuando el dinero se comparte, las metas también deben ser compartidas. Algunas recomendaciones:",
          "- **Hablen de prioridades antes de hablar de montos.** Una persona puede valorar más la seguridad (un fondo de emergencia grande) y otra la experiencia (un viaje). Ninguna está equivocada; se trata de encontrar un orden que ambos acepten.\n- **Distingan metas comunes e individuales.** Una buena práctica es que cada persona tenga un pequeño monto propio, sin dar explicaciones, además de las metas del hogar.\n- **Aporten en proporción a sus ingresos** si ganan cantidades muy distintas. Repartir en partes iguales puede ser injusto para quien gana menos.\n- **Involucren a los hijos** en metas sencillas, como ahorrar para una salida familiar. Ver el progreso en una alcancía transparente o en una tabla enseña más que cualquier sermón."
        ]
      },
      {
        "h": "Cómo saber si tu meta es realista",
        "p": [
          "Antes de comprometerte, haz una prueba de tres meses: aparta el monto mensual calculado como si ya estuvieras ahorrando. Si llegas a fin de mes sin usar la tarjeta y sin sacar dinero de esa cuenta, la meta es viable. Si cada mes terminas tomando prestado de ella, necesitas ajustar el plazo, el monto o tus gastos.",
          "Otra señal útil es el porcentaje de tu ingreso que representa el conjunto de tus metas. Para muchos hogares, ahorrar entre el 10 % y el 20 % del ingreso neto es un rango alcanzable; si tus metas suman el 40 %, probablemente estás intentando hacer demasiado al mismo tiempo y conviene escalonarlas."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Una meta de ahorro necesita propósito, monto, fecha y aporte mensual.\n- Calcula montos reales, incluye costos ocultos y considera la inflación.\n- El plazo define dónde guardar el dinero: menos riesgo cuanto más cerca esté la fecha.\n- Prioriza: mini fondo, deudas caras, fondo completo, retiro y luego el resto.\n- Automatiza, separa cada meta en su propia cuenta y revisa el avance cada mes.",
          "Los montos de esta guía son ejemplos. Ajusta las cifras a tu moneda, tus ingresos y los productos disponibles en tu país."
        ]
      }
    ]
  },
  {
    "slug": "metodo-50-30-20",
    "category": "espanol",
    "lang": "es",
    "title": "El método 50/30/20: cómo repartir tu sueldo y cuándo adaptarlo",
    "excerpt": "Qué es la regla 50/30/20 para repartir el ingreso entre necesidades, deseos y ahorro, cómo aplicarla con ejemplos y cómo ajustarla cuando la vivienda o las deudas pesan más.",
    "date": "2026-10-02",
    "minutes": 6,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "El método 50/30/20 es una de las reglas de presupuesto más conocidas del mundo, y con razón: es fácil de recordar y ofrece un punto de partida claro para quien nunca ha organizado su dinero. Propone dividir el ingreso neto en tres grandes bloques: 50 % para necesidades, 30 % para deseos y 20 % para ahorro y pago de deudas.",
          "Sin embargo, en muchos hogares latinoamericanos la vivienda, el transporte y la comida se llevan bastante más de la mitad del ingreso. Por eso esta guía no solo explica la regla, sino también cómo adaptarla a tu realidad sin perder su espíritu: dar prioridad a lo esencial y no olvidar nunca el ahorro."
        ]
      },
      {
        "h": "Los tres bloques del método",
        "p": [
          "### 50 %: necesidades",
          "Son los gastos que tendrías que pagar aunque perdieras el trabajo mañana, porque sin ellos no puedes vivir ni trabajar:",
          "- vivienda: alquiler o cuota hipotecaria, mantenimiento básico;\n- servicios: luz, agua, gas, internet y teléfono básicos;\n- alimentación en casa;\n- transporte para ir a trabajar o estudiar;\n- salud: medicinas, consultas, seguro médico si es necesario;\n- educación obligatoria de los hijos;\n- pagos mínimos de deudas.",
          "### 30 %: deseos",
          "Todo lo que mejora tu vida pero no es imprescindible:",
          "- comidas fuera, cafés y pedidos a domicilio;\n- salidas, cine, conciertos;\n- ropa que no es de reposición;\n- suscripciones de entretenimiento;\n- viajes y vacaciones;\n- mejoras de teléfono o tecnología que no son necesarias.",
          "La línea entre necesidad y deseo no siempre es nítida. Un teléfono es una necesidad; el modelo más caro, un deseo. Comer es necesario; comer en restaurante, no.",
          "### 20 %: ahorro y deudas",
          "Este bloque construye tu futuro:",
          "- fondo de emergencia;\n- pagos de deuda por encima del mínimo;\n- ahorro para metas como un enganche, estudios o un viaje;\n- inversión y ahorro voluntario para el retiro."
        ]
      },
      {
        "h": "Cómo aplicarlo paso a paso",
        "p": [
          "1. **Calcula tu ingreso neto mensual**, es decir, lo que recibes después de impuestos y aportes obligatorios.\n2. **Multiplica por 0,50, 0,30 y 0,20** para obtener tus tres topes.\n3. **Clasifica tus gastos actuales** en los tres bloques. Si nunca los has registrado, empieza por la guía [presupuesto personal paso a paso](/guias/presupuesto-personal-paso-a-paso/).\n4. **Compara** lo que gastas con los topes.\n5. **Ajusta** primero el bloque de deseos si te pasas, y busca después cómo bajar necesidades a mediano plazo.\n6. **Automatiza el 20 %**: programa una transferencia a otra cuenta el día que cobras."
        ]
      },
      {
        "h": "Ejemplo con números",
        "p": [
          "Andrés recibe un ingreso neto de 2.000 dólares mensuales.",
          "| Bloque | Porcentaje | Monto |\n|---|---|---|\n| Necesidades | 50 % | 1.000 |\n| Deseos | 30 % | 600 |\n| Ahorro y deudas | 20 % | 400 |",
          "Al revisar sus gastos descubre que paga 650 de alquiler, 120 de servicios, 250 de supermercado y 80 de transporte: 1.100 en necesidades, un 55 %. Sus deseos suman 700 y apenas ahorra 200. Para equilibrar, recorta 100 en deseos (menos pedidos a domicilio y una suscripción menos) y destina esos 100 al ahorro. Queda en 55/30/15, más realista que la regla original y mucho mejor que su situación inicial."
        ]
      },
      {
        "h": "Cuando el 50/30/20 no encaja",
        "p": [
          "La regla nació en contextos donde la vivienda es relativamente más barata respecto al ingreso. En ciudades grandes de la región, el alquiler solo puede superar el 35 % o el 40 % del sueldo. Eso no significa que el método no sirva, sino que debe adaptarse.",
          "### Variantes habituales",
          "| Variante | Necesidades | Deseos | Ahorro y deudas | Para quién |\n|---|---|---|---|---|\n| 50/30/20 | 50 % | 30 % | 20 % | Ingresos medios, vivienda moderada |\n| 60/20/20 | 60 % | 20 % | 20 % | Vivienda cara, pero se quiere mantener el ahorro |\n| 70/20/10 | 70 % | 20 % | 10 % | Ingresos ajustados o familias numerosas |\n| 50/20/30 | 50 % | 20 % | 30 % | Quien tiene deudas caras o una meta urgente |\n| 80/20 | 80 % todo lo demás | | 20 % ahorro | Quien prefiere no clasificar en detalle |",
          "Lo importante no son los números exactos, sino el orden de prioridades: primero lo esencial, luego el ahorro, y lo que sobra para deseos.",
          "### Si tienes deudas caras",
          "Cuando pagas intereses altos en tarjetas de crédito o préstamos personales, cada peso que destinas a amortizar esas deudas \"rinde\" el equivalente a la tasa de interés que dejas de pagar. En ese caso conviene reducir temporalmente el bloque de deseos y llevar el de ahorro y deudas al 25 % o 30 %. La guía [salir de deudas con bola de nieve y avalancha](/guias/salir-de-deudas-bola-de-nieve-y-avalancha/) explica cómo ordenar los pagos.",
          "### Si tus ingresos son variables",
          "Aplica los porcentajes sobre tu ingreso mínimo esperado y destina los meses buenos a reforzar el ahorro. Más detalles en [cómo ahorrar con ingresos irregulares](/guias/ahorrar-con-ingresos-irregulares/)."
        ]
      },
      {
        "h": "Cómo bajar el bloque de necesidades",
        "p": [
          "Si tus necesidades superan con mucho el 50 %, reducirlas suele requerir decisiones de mediano plazo:",
          "- **Vivienda:** compartir, mudarse más cerca del trabajo para ahorrar transporte o renegociar el alquiler al renovar.\n- **Servicios:** revisar planes de telefonía e internet, comparar tarifas cada año.\n- **Supermercado:** planificar menús, comprar marcas propias, evitar ir con hambre.\n- **Transporte:** combinar transporte público, bicicleta o auto compartido.\n- **Deudas:** consolidar o renegociar tasas altas. Lee [consolidar deudas](/guias/consolidar-deudas/).\n- **Seguros:** comparar coberturas y precios en cada renovación."
        ]
      },
      {
        "h": "Errores comunes",
        "p": [
          "- **Clasificar deseos como necesidades.** El plan de streaming no es una necesidad aunque lo uses todos los días.\n- **Usar el ingreso bruto.** Los porcentajes se aplican sobre el ingreso neto.\n- **Dejar el ahorro para el final.** Si ahorras \"lo que sobra\", nunca sobra. Págate primero.\n- **Olvidar los gastos anuales.** Divide los gastos de una vez al año entre doce y súmalos al bloque que corresponda.\n- **Sentir culpa por el 30 %.** Disfrutar parte del ingreso es parte de un plan sostenible. Un presupuesto que prohíbe todo se abandona."
        ]
      },
      {
        "h": "Preguntas frecuentes",
        "p": [
          "### ¿El pago mínimo de la tarjeta es necesidad o ahorro?",
          "El pago mínimo va en necesidades, porque dejar de pagarlo tiene consecuencias graves. Todo lo que pagues por encima del mínimo va en el bloque de ahorro y deudas.",
          "### ¿Dónde pongo las donaciones o el apoyo a familiares?",
          "Si es un compromiso fijo, como ayudar a tus padres cada mes, inclúyelo en necesidades. Si es voluntario y ocasional, en deseos.",
          "### ¿El ahorro para el retiro cuenta en el 20 %?",
          "Sí, el ahorro voluntario sí. Los aportes obligatorios que te descuentan del sueldo ya no forman parte del ingreso neto, así que no se suman. Más información en [ahorro voluntario para el retiro](/guias/ahorro-voluntario-para-el-retiro/).",
          "### ¿Cada cuánto debo revisar los porcentajes?",
          "Revisa cada mes durante los primeros tres meses y después cada vez que cambie tu ingreso o tu situación familiar."
        ]
      },
      {
        "h": "Conclusión",
        "p": [
          "El método 50/30/20 es una brújula, no una ley. Úsalo para ordenar tus prioridades: necesidades primero, ahorro siempre y deseos con medida. Si tu realidad no encaja en los porcentajes originales, adapta la proporción, pero no renuncies al ahorro. Con el tiempo, a medida que bajes deudas y suban tus ingresos, podrás acercarte a la regla original o incluso superarla."
        ]
      }
    ]
  },
  {
    "slug": "presupuesto-personal-paso-a-paso",
    "category": "espanol",
    "lang": "es",
    "title": "Cómo hacer un presupuesto personal paso a paso (y cumplirlo)",
    "excerpt": "Guía práctica para armar tu primer presupuesto mensual: calcular ingresos netos, registrar gastos, separar fijos y variables, asignar cada peso y revisarlo sin abandonarlo.",
    "date": "2026-10-03",
    "minutes": 8,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Un presupuesto no es una lista de prohibiciones. Es un plan que le dice a tu dinero adónde ir antes de que el mes decida por ti. Mucha gente cree que necesita ganar más para empezar a ordenarse, pero la experiencia muestra lo contrario: quien no sabe en qué gasta un sueldo pequeño tampoco sabrá en qué gasta uno grande. El presupuesto es la herramienta que convierte el ingreso, sea el que sea, en decisiones conscientes.",
          "En esta guía vas a armar tu presupuesto desde cero, con un método que funciona tanto si cobras un salario fijo como si tus ingresos cambian cada mes. No necesitas aplicaciones caras ni conocimientos de contabilidad: basta una hoja de cálculo, un cuaderno o las notas del teléfono."
        ]
      },
      {
        "h": "Por qué la mayoría de los presupuestos fracasa",
        "p": [
          "Antes de empezar conviene entender por qué tantos intentos terminan abandonados a la segunda semana:",
          "- **Son demasiado estrictos.** Si el plan no deja espacio para una salida o un antojo, se rompe en cuanto aparece la primera tentación.\n- **Se basan en números inventados.** Muchas personas escriben lo que *creen* que gastan, no lo que realmente gastan. La diferencia suele ser enorme.\n- **Olvidan los gastos que no son mensuales.** El seguro del auto, la inscripción escolar, los regalos de diciembre o el mantenimiento de la casa llegan una vez al año y descuadran todo.\n- **Nadie los revisa.** Un presupuesto que no se mira es una lista de buenos deseos.",
          "El método que verás a continuación ataca estos cuatro problemas."
        ]
      },
      {
        "h": "Paso 1: calcula tu ingreso neto real",
        "p": [
          "El punto de partida es el dinero que realmente entra a tu cuenta, no el sueldo bruto del contrato. Resta impuestos, aportes a la seguridad social, a la pensión y cualquier otro descuento obligatorio. Si recibes ingresos adicionales de forma regular, como una renta, un trabajo de fin de semana o una pensión alimenticia, súmalos solo si son estables.",
          "Si tus ingresos varían, usa como base el mes más bajo de los últimos seis o doce meses. Es más prudente planear con el escenario flojo y celebrar cuando llega más dinero que hacer lo contrario. En la guía [cómo ahorrar con ingresos irregulares](/guias/ahorrar-con-ingresos-irregulares/) encontrarás un método específico para esta situación.",
          "**Ejemplo.** Laura cobra un sueldo bruto de 20.000 pesos al mes. Después de impuestos y aportes recibe 16.800. Además vende postres los fines de semana, con ingresos que van de 1.000 a 3.000 pesos. Para su presupuesto toma 16.800 como ingreso base y trata lo de los postres como ingreso extra que asignará cuando llegue."
        ]
      },
      {
        "h": "Paso 2: registra tus gastos reales durante un mes",
        "p": [
          "Este es el paso que casi todos se saltan y el más revelador. Durante treinta días anota absolutamente todo lo que gastas: desde el alquiler hasta el café de la esquina, las propinas, las suscripciones y los cargos del banco. Puedes hacerlo de tres formas:",
          "1. **Revisar estados de cuenta** de tus tarjetas y cuentas bancarias de los últimos dos o tres meses.\n2. **Guardar recibos** y anotarlos cada noche.\n3. **Usar una aplicación** que registre los movimientos, siempre que revises que categoriza bien.",
          "No intentes cambiar nada todavía. El objetivo es obtener una fotografía honesta. Muchas personas descubren en este paso los llamados [gastos hormiga](/guias/gastos-hormiga/): pequeñas compras diarias que, sumadas, pueden equivaler a una parte importante del ingreso."
        ]
      },
      {
        "h": "Paso 3: clasifica los gastos",
        "p": [
          "Agrupa lo que registraste en categorías. Una clasificación útil distingue entre:",
          "| Tipo | Ejemplos | Característica |\n|---|---|---|\n| Fijos esenciales | Alquiler o hipoteca, servicios básicos, transporte al trabajo, cuota escolar | Mismo monto cada mes, difíciles de recortar a corto plazo |\n| Variables esenciales | Supermercado, medicinas, gasolina | Cambian, pero son necesarios |\n| Deudas | Mínimo de tarjeta, préstamo personal, crédito de auto | Compromisos con fecha y monto |\n| No esenciales | Restaurantes, salidas, ropa no necesaria, suscripciones | Se pueden reducir |\n| Ahorro e inversión | Fondo de emergencia, metas, retiro | Lo que pagas a tu yo del futuro |\n| Gastos anuales o irregulares | Seguros, regalos, vacaciones, trámites, mantenimiento | Llegan pocas veces al año |"
        ]
      },
      {
        "h": "Paso 4: convierte los gastos anuales en mensuales",
        "p": [
          "Este paso evita que diciembre, el regreso a clases o la renovación del seguro te tomen por sorpresa. Haz una lista de todos los gastos que ocurren una o pocas veces al año, estima su monto y divídelo entre doce.",
          "**Ejemplo.** Laura paga 3.600 pesos al año de seguro del auto, calcula 4.800 en regalos y fiestas de fin de año y 2.400 en útiles escolares de su hijo. En total son 10.800 al año, es decir, 900 al mes. Ese dinero lo aparta cada mes en una cuenta separada. Cuando llega el gasto, el dinero ya está ahí."
        ]
      },
      {
        "h": "Paso 5: asigna cada peso antes de gastarlo",
        "p": [
          "Ahora sí, construye el plan. Parte del ingreso neto y asigna una cantidad a cada categoría hasta que el resultado sea cero. No significa gastar todo: el ahorro también es una asignación. Este enfoque, conocido como presupuesto base cero, obliga a decidir el destino de cada unidad de dinero.",
          "Orden recomendado de asignación:",
          "1. **Gastos fijos esenciales.**\n2. **Pagos mínimos de deudas.**\n3. **Un primer monto de ahorro**, aunque sea pequeño. Si lo dejas para el final, nunca queda nada.\n4. **Gastos variables esenciales.**\n5. **La provisión mensual de gastos anuales.**\n6. **Pagos extra a deudas** si tienes deudas caras.\n7. **Gastos no esenciales**, con un monto definido.",
          "Si la suma no alcanza, el ajuste debe hacerse en el paso 7 primero y luego revisando contratos fijos: un plan de telefonía más barato, una suscripción menos, un seguro mejor comparado.",
          "Si prefieres una regla sencilla para empezar, el [método 50/30/20](/guias/metodo-50-30-20/) ofrece una proporción de referencia que luego puedes ajustar."
        ]
      },
      {
        "h": "Paso 6: separa el dinero físicamente",
        "p": [
          "Las buenas intenciones fallan cuando todo el dinero está en una sola cuenta. Separa al menos tres \"cajones\":",
          "- **Cuenta de gastos del mes**, donde llega el sueldo y salen los pagos.\n- **Cuenta o subcuenta de ahorro**, idealmente sin tarjeta de débito asociada.\n- **Cuenta para gastos anuales**, donde se acumula la provisión del paso 4.",
          "Muchos bancos y billeteras digitales permiten crear \"bolsillos\" o \"apartados\" sin costo. Programa una transferencia automática el mismo día que cobras. Lo que no ves, no lo gastas."
        ]
      },
      {
        "h": "Paso 7: revisa cada semana y ajusta cada mes",
        "p": [
          "Dedica diez minutos por semana a comparar lo gastado con lo planeado. No se trata de castigarte, sino de corregir a tiempo. Si a mitad de mes ya gastaste el 80 % del presupuesto de supermercado, sabes que debes cocinar más en casa las próximas dos semanas.",
          "Al final del mes, ajusta: quizá asignaste poco a transporte y demasiado a ropa. Los primeros tres meses son de calibración. Es normal que el presupuesto cambie bastante hasta reflejar tu vida real."
        ]
      },
      {
        "h": "Ejemplo completo",
        "p": [
          "Así quedó el presupuesto mensual de Laura con un ingreso neto de 16.800 pesos:",
          "| Categoría | Monto | Porcentaje |\n|---|---|---|\n| Alquiler | 5.500 | 33 % |\n| Servicios (luz, agua, gas, internet, teléfono) | 1.300 | 8 % |\n| Transporte | 1.200 | 7 % |\n| Supermercado | 3.200 | 19 % |\n| Pago de tarjeta (mínimo + extra) | 1.500 | 9 % |\n| Ahorro para emergencias | 1.200 | 7 % |\n| Provisión de gastos anuales | 900 | 5 % |\n| Salidas y entretenimiento | 1.000 | 6 % |\n| Ropa y cuidado personal | 600 | 4 % |\n| Imprevistos menores | 400 | 2 % |\n| **Total** | **16.800** | **100 %** |",
          "Los ingresos extra de los postres los divide en dos: la mitad va a pagar más rápido la tarjeta y la otra mitad a su fondo de emergencia."
        ]
      },
      {
        "h": "Errores comunes y cómo evitarlos",
        "p": [
          "- **Ser demasiado optimista.** Presupuesta 3.200 de supermercado si realmente gastas 3.200, aunque quisieras gastar 2.500. Reduce poco a poco.\n- **No tener un rubro para imprevistos menores.** Siempre aparece algo: una receta médica, un cumpleaños, una reparación pequeña.\n- **Abandonar tras un mal mes.** Un mes fuera de presupuesto no anula el sistema. Analiza qué pasó y ajusta.\n- **Usar la tarjeta de crédito como extensión del sueldo.** Si pagas con tarjeta, registra el gasto el día de la compra, no el día del pago. Más en [cómo usar la tarjeta de crédito sin pagar intereses](/guias/tarjeta-de-credito-sin-pagar-intereses/).\n- **Olvidar al resto del hogar.** Si compartes gastos, el presupuesto debe ser acordado. Lee [cómo hablar de dinero en pareja](/guias/dinero-en-pareja/)."
        ]
      },
      {
        "h": "Herramientas para llevar el presupuesto",
        "p": [
          "| Herramienta | Ventajas | Desventajas |\n|---|---|---|\n| Cuaderno | Simple, sin tecnología, ayuda a reflexionar | Hay que sumar a mano |\n| Hoja de cálculo | Flexible, gratuita, fácil de ajustar | Requiere disciplina para actualizarla |\n| Aplicación de presupuesto | Registra movimientos, gráficos automáticos | Algunas cobran, privacidad de datos |\n| Sobres o bolsillos digitales | Muy visual, evita gastar de más | Menos detalle para analizar |",
          "La mejor herramienta es la que vas a usar de verdad. Si nunca abres la aplicación, el cuaderno será mejor."
        ]
      },
      {
        "h": "Preguntas frecuentes",
        "p": [
          "### ¿Cuánto debería ahorrar cada mes?",
          "Una referencia habitual es el 10 % al 20 % del ingreso neto, pero cualquier monto constante es mejor que ninguno. Si hoy solo puedes apartar el 3 %, empieza ahí y súbelo cada vez que tengas un aumento.",
          "### ¿Qué hago si mis gastos fijos superan mi ingreso?",
          "Es una señal de alerta. Revisa primero los contratos más grandes: vivienda, transporte y deudas. A veces la solución pasa por renegociar una deuda, mudarse a una vivienda más barata o buscar un ingreso adicional. Mientras tanto, prioriza siempre comida, vivienda, servicios y salud.",
          "### ¿Debo incluir el pago de deudas en el presupuesto?",
          "Sí, siempre. Las deudas son un gasto fijo con fecha. Si tienes varias, la guía [cómo salir de deudas](/guias/salir-de-deudas-bola-de-nieve-y-avalancha/) explica qué pagar primero."
        ]
      },
      {
        "h": "Conclusión",
        "p": [
          "Un buen presupuesto se construye con datos reales, separa el dinero en cuentas distintas, incluye los gastos anuales y se revisa con frecuencia. Empieza registrando un mes completo de gastos, asigna cada peso antes de gastarlo, aparta el ahorro primero y date tres meses para ajustar. Con ese hábito, el siguiente paso natural es construir tu [fondo de emergencia](/guias/fondo-de-emergencia/)."
        ]
      }
    ]
  },
  {
    "slug": "salir-de-deudas-bola-de-nieve-y-avalancha",
    "category": "espanol",
    "lang": "es",
    "title": "Salir de deudas: método bola de nieve vs. método avalancha, con ejemplos",
    "excerpt": "Cómo funcionan los métodos bola de nieve y avalancha para pagar varias deudas, cuál ahorra más intereses, cuál motiva más y cómo armar tu propio plan de salida.",
    "date": "2026-08-21",
    "minutes": 7,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "Tener varias deudas al mismo tiempo —una o dos tarjetas de crédito, un préstamo personal, una compra a meses, un adeudo con un familiar— genera una sensación de que nunca se avanza. Cada mes se paga algo de todo, y aun así los saldos apenas bajan. La salida empieza con un plan ordenado, y dos de los métodos más conocidos para organizarlo son la *bola de nieve* y la *avalancha*.",
          "Ambos comparten la misma base: pagar el mínimo en todas las deudas y concentrar todo el dinero extra en una sola, hasta liquidarla. La diferencia está en qué deuda atacas primero."
        ]
      },
      {
        "h": "Antes de empezar: el inventario de deudas",
        "p": [
          "Ningún método funciona si no sabes exactamente qué debes. Haz una lista con:",
          "- Nombre del acreedor.\n- Saldo actual.\n- Tasa de interés anual (y si es fija o variable).\n- Pago mínimo mensual.\n- Fecha de corte y fecha límite de pago.\n- Comisiones o penalizaciones por atraso.",
          "Encontrarás la tasa y el saldo en tu estado de cuenta o en la app de la entidad. Si no aparece claramente, pide la información por escrito: tienes derecho a conocerla.",
          "También conviene revisar el **costo anual total** que algunas regulaciones exigen informar (en distintos países recibe nombres como CAT, TEA o CFT). Incluye intereses y comisiones, y es la mejor cifra para comparar qué deuda es realmente más cara."
        ]
      },
      {
        "h": "Paso previo: deja de agrandar la deuda",
        "p": [
          "Ningún plan de pago funciona si las deudas siguen creciendo por otro lado. Antes de elegir método:",
          "- Deja de usar las tarjetas con saldo pendiente para compras nuevas, o úsalas solo si pagas el total cada mes.\n- Arma un mini fondo de emergencia, aunque sea pequeño, para que el próximo imprevisto no termine otra vez en la tarjeta.\n- Haz un presupuesto realista para saber cuánto dinero extra puedes destinar cada mes al plan."
        ]
      },
      {
        "h": "Método bola de nieve",
        "p": [
          "**Cómo funciona:** ordenas tus deudas de **menor a mayor saldo**, sin importar la tasa. Pagas el mínimo en todas y todo el dinero extra va a la más pequeña. Cuando la liquidas, sumas lo que pagabas en ella al pago de la siguiente, y así sucesivamente. El pago \"rueda\" y crece como una bola de nieve.",
          "**Ventaja principal:** la motivación. Ver desaparecer una deuda pronto da una sensación de logro que ayuda a sostener el esfuerzo. Además, cada deuda liquidada reduce el número de pagos que tienes que vigilar.",
          "**Desventaja:** puedes terminar pagando más intereses en total, si las deudas pequeñas tienen tasas más bajas que las grandes."
        ]
      },
      {
        "h": "Método avalancha",
        "p": [
          "**Cómo funciona:** ordenas tus deudas de **mayor a menor tasa de interés**. Pagas el mínimo en todas y el dinero extra va a la deuda con la tasa más alta. Al liquidarla, pasas a la siguiente tasa más alta.",
          "**Ventaja principal:** es matemáticamente más eficiente. Pagas menos intereses en total y, por lo general, sales antes de las deudas.",
          "**Desventaja:** si la deuda con la tasa más alta también es grande, puede pasar mucho tiempo antes de ver la primera deuda liquidada, y eso desanima a algunas personas."
        ]
      },
      {
        "h": "Un ejemplo con números",
        "p": [
          "Supongamos estas deudas y 200 extra al mes, además de los mínimos (las cifras son ilustrativas):",
          "| Deuda | Saldo | Tasa anual | Pago mínimo |\n|---|---|---|---|\n| Tarjeta A | 3.000 | 60 % | 120 |\n| Préstamo personal | 2.000 | 30 % | 90 |\n| Tarjeta B | 600 | 45 % | 30 |\n| Compra a meses | 400 | 0 % | 50 |",
          "**Con bola de nieve**, el orden sería: compra a meses (400), Tarjeta B (600), préstamo personal (2.000) y Tarjeta A (3.000). Las dos primeras deudas desaparecen en pocos meses, lo cual motiva mucho, pero mientras tanto la Tarjeta A, que es la más cara, sigue generando intereses altos.",
          "**Con avalancha**, el orden sería: Tarjeta A (60 %), Tarjeta B (45 %), préstamo (30 %) y compra a meses (0 %). La compra a meses sin intereses queda al final porque no cuesta nada mantenerla con su pago mínimo, siempre que no haya penalizaciones. Liquidar primero la tarjeta más cara reduce de forma importante el total de intereses pagados.",
          "En casos como este, en que la diferencia de tasas es grande, la avalancha suele ahorrar una cantidad considerable. Si las tasas son parecidas, la diferencia entre métodos es pequeña y la motivación pesa más."
        ]
      },
      {
        "h": "¿Cuál elegir?",
        "p": [
          "- Elige **avalancha** si te mueven los números, si tienes disciplina y si hay mucha diferencia entre tasas.\n- Elige **bola de nieve** si has intentado salir de deudas antes y te desanimaste, o si tienes muchas deudas pequeñas que te agobian.\n- Prueba un **híbrido**: liquida primero una o dos deudas muy pequeñas para ganar impulso y luego cambia a avalancha.",
          "El mejor método es el que vas a sostener hasta el final."
        ]
      },
      {
        "h": "Cómo acelerar el plan",
        "p": [
          "- **Destina ingresos extraordinarios**: aguinaldo, bonos, devoluciones de impuestos, ventas de cosas que no usas.\n- **Negocia la tasa**: llama a tu banco y pregunta si pueden reducir la tasa o mejorar las condiciones, sobre todo si tienes buen historial de pagos.\n- **Compara una consolidación o transferencia de saldo**: puede convenir si la nueva tasa es claramente menor y no hay comisiones que se coman el ahorro. No sirve si sigues usando las tarjetas liberadas.\n- **Paga más de una vez al mes**: en algunas tarjetas, abonar antes de la fecha de corte reduce el saldo sobre el que se calculan intereses."
        ]
      },
      {
        "h": "Qué hacer si no alcanzas ni los mínimos",
        "p": [
          "Si tus ingresos no cubren los pagos mínimos, el problema ya no es de método:",
          "1. Prioriza gastos básicos: vivienda, comida, servicios, transporte para trabajar.\n2. Contacta a tus acreedores **antes** de atrasarte y pide opciones de reestructura o plazo.\n3. Busca orientación gratuita en la autoridad de protección al usuario financiero de tu país.\n4. Desconfía de empresas que cobran por adelantado prometiendo \"borrar\" tus deudas o tu historial."
        ]
      },
      {
        "h": "Cómo armar tu plan en una hoja de cálculo",
        "p": [
          "No necesitas una aplicación especial. Con una hoja de cálculo sencilla puedes ver tu fecha de salida:",
          "1. **Una fila por deuda**, ordenadas según el método elegido.\n2. **Columnas por mes**: en cada celda, el saldo al final de ese mes.\n3. **Fórmula básica del saldo**: saldo anterior + intereses del mes − pago realizado. Los intereses del mes se pueden aproximar como saldo × tasa anual ÷ 12.\n4. **Pago de la deuda objetivo**: su mínimo más todo el dinero extra, más los mínimos de las deudas ya liquidadas.",
          "Al ver la tabla completa sabrás en qué mes desaparece cada deuda y cuánto pagarás de intereses en total. Es motivador comprobar que, por ejemplo, en 18 o 24 meses puedes estar libre de deudas de consumo."
        ]
      },
      {
        "h": "Señales de que el plan está funcionando",
        "p": [
          "- El saldo total baja cada mes, aunque sea poco al principio.\n- Cada vez dependes menos de la tarjeta para llegar a fin de mes.\n- Tu mini fondo de emergencia se mantiene intacto o crece.\n- Los intereses que pagas cada mes, visibles en el estado de cuenta, van disminuyendo.",
          "Si después de tres meses el saldo total no baja, revisa tres cosas: si estás generando nuevos cargos, si el pago extra realmente llega a la deuda objetivo y si alguna comisión o seguro está inflando los saldos."
        ]
      },
      {
        "h": "Después de salir de deudas",
        "p": [
          "El último pago es un gran logro, pero el plan no termina ahí. El dinero que destinabas a las deudas ya forma parte de tu presupuesto: no lo dejes desaparecer en gasto nuevo. Redirígelo primero a completar tu fondo de emergencia y luego al ahorro para el retiro o a tus metas de mediano plazo. Así, el esfuerzo de salir de deudas se convierte en el impulso para empezar a construir patrimonio."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Haz un inventario completo de deudas con saldo, tasa y pago mínimo.\n- Deja de generar nuevas deudas y arma un mini fondo de emergencia.\n- Bola de nieve: de menor a mayor saldo, ideal para motivación.\n- Avalancha: de mayor a menor tasa, la opción que ahorra más intereses.\n- Acelera con ingresos extraordinarios y negociación; si no alcanzas los mínimos, pide ayuda a tiempo.",
          "Las tasas y cifras de esta guía son ejemplos. Revisa las condiciones de tus propios contratos y la información de tu regulador financiero."
        ]
      }
    ]
  },
  {
    "slug": "tarjeta-de-credito-sin-pagar-intereses",
    "category": "espanol",
    "lang": "es",
    "title": "Cómo usar la tarjeta de crédito sin pagar intereses: fechas, pago total y trampas comunes",
    "excerpt": "Explicación clara del ciclo de una tarjeta de crédito (fecha de corte, fecha límite, pago mínimo y pago para no generar intereses) y hábitos para usarla a tu favor.",
    "date": "2026-08-25",
    "minutes": 7,
    "author": "Redacción Jai",
    "sections": [
      {
        "h": "",
        "p": [
          "La tarjeta de crédito puede ser una herramienta útil o una de las deudas más caras que existen. La diferencia no está en la tarjeta, sino en cómo se usa. Quien entiende sus fechas y paga el total cada mes puede usarla durante años sin pagar un solo peso de intereses, acumular beneficios y construir historial crediticio. Quien paga solo el mínimo, en cambio, puede tardar años en saldar una compra y pagar por ella varias veces su precio.",
          "Esta guía explica el funcionamiento básico de una tarjeta y los hábitos que te permiten usarla sin intereses."
        ]
      },
      {
        "h": "Las fechas que debes conocer",
        "p": [
          "### Fecha de corte",
          "Es el día del mes en que el banco \"cierra\" tu periodo de compras. Todo lo que gastaste desde el corte anterior hasta este día se suma y aparece en tu estado de cuenta.",
          "### Fecha límite de pago",
          "Es el último día para pagar lo que se acumuló en ese periodo. Suele estar entre 15 y 25 días después de la fecha de corte, según el banco y el país. Si pagas el total antes de esta fecha, normalmente no se generan intereses por esas compras.",
          "### El periodo de gracia",
          "El tiempo entre una compra y la fecha límite de pago es, en la práctica, un préstamo gratuito. Una compra hecha justo después del corte puede tener cerca de 50 días para pagarse sin intereses; una hecha un día antes del corte tendrá solo los días hasta la fecha límite.",
          "> Consejo: si tienes una compra grande planeada y vas a pagarla completa, hacerla justo después de la fecha de corte te da el mayor plazo sin costo."
        ]
      },
      {
        "h": "Los distintos montos de pago",
        "p": [
          "Tu estado de cuenta suele mostrar varias cifras. Entenderlas es clave:",
          "- **Pago mínimo**: la cantidad más baja que puedes pagar para no caer en atraso. Evita penalizaciones, pero el resto del saldo genera intereses, normalmente a tasas muy altas.\n- **Pago para no generar intereses**: el monto que debes cubrir para no pagar intereses en el siguiente periodo. Puede ser distinto del saldo total si tienes compras a meses sin intereses, porque solo incluye la mensualidad que corresponde a ese mes.\n- **Saldo total**: todo lo que debes, incluidas las mensualidades futuras de compras a plazos.",
          "**La regla de oro: paga siempre el monto \"para no generar intereses\".** Si puedes, liquida el saldo total para mantener las cosas simples."
        ]
      },
      {
        "h": "Por qué el pago mínimo es una trampa",
        "p": [
          "Las tasas de interés de las tarjetas de crédito en Latinoamérica suelen estar entre las más altas del sistema financiero. Cuando pagas solo el mínimo:",
          "- La mayor parte de tu pago se va a intereses, comisiones e impuestos sobre esos intereses, y una parte pequeña reduce el saldo.\n- La deuda tarda años en desaparecer, aunque no vuelvas a usar la tarjeta.\n- El total que pagarás puede superar con creces el precio original de lo que compraste.",
          "Muchos estados de cuenta incluyen una tabla que muestra cuánto tardarías en liquidar tu saldo pagando solo el mínimo. Vale la pena leerla: suele ser el mejor argumento para cambiar de hábito."
        ]
      },
      {
        "h": "Hábitos para usar la tarjeta a tu favor",
        "p": [
          "### 1. Trátala como débito",
          "Usa la tarjeta solo para gastos que ya tienes en tu cuenta y que habrías pagado igual en efectivo. Si no tienes el dinero hoy, no lo tendrás mágicamente en la fecha límite.",
          "### 2. Lleva un registro",
          "Anota cada compra o revisa la app del banco una vez por semana. Así sabes cuánto llevas gastado antes de que llegue el estado de cuenta.",
          "### 3. Programa el pago",
          "Configura un pago automático por el monto para no generar intereses, o pon alarmas unos días antes de la fecha límite. Un solo olvido puede costar intereses sobre todo el saldo, además de la comisión por pago tardío.",
          "### 4. Usa un límite propio más bajo que el del banco",
          "Que el banco te autorice un límite alto no significa que debas usarlo. Define tu propio tope mensual según tu presupuesto.",
          "### 5. Cuida las compras a meses sin intereses",
          "Pueden ser útiles para compras necesarias y planeadas, pero:",
          "- Cada mensualidad reduce tu capacidad de pago de los meses siguientes.\n- Acumular varias compras a meses hace que el pago mensual crezca sin que lo notes.\n- Si no pagas la mensualidad completa a tiempo, algunas promociones pierden el beneficio.",
          "Antes de aceptar, pregúntate si podrías pagar esa mensualidad aunque tu ingreso bajara.",
          "### 6. Evita disponer de efectivo con la tarjeta",
          "Retirar efectivo con la tarjeta de crédito suele tener comisión inmediata y genera intereses desde el primer día, sin periodo de gracia. Es una de las formas más caras de conseguir dinero."
        ]
      },
      {
        "h": "Costos que conviene revisar",
        "p": [
          "- **Anualidad**: cuota anual por tener la tarjeta. Muchas entidades la eliminan si gastas cierto monto o si lo solicitas.\n- **Comisión por pago tardío**: se cobra si no cubres al menos el mínimo a tiempo.\n- **Seguros y servicios adicionales**: a veces se agregan con un cargo mensual. Revisa si los contrataste y si los necesitas.\n- **Costo anual total**: indicador que incluye intereses y comisiones; sirve para comparar tarjetas.",
          "Si no entiendes un cargo, reclama por los canales oficiales del banco y, si no obtienes respuesta, acude a la autoridad de protección al usuario financiero de tu país."
        ]
      },
      {
        "h": "Beneficios que sí valen la pena",
        "p": [
          "Usada con disciplina, una tarjeta de crédito ofrece ventajas reales:",
          "- **Construye historial crediticio**, útil para obtener créditos futuros con mejores condiciones.\n- **Protección en compras**: en muchos casos puedes disputar cargos no reconocidos o productos que no llegaron.\n- **Puntos, descuentos o reembolsos** en efectivo.\n- **Seguridad en compras en línea**, frente a usar directamente la cuenta de débito.",
          "Ningún beneficio compensa pagar intereses. Si alguna vez te ves obligado a pagar solo el mínimo, los puntos o el reembolso no cubren ni de cerca el costo de los intereses."
        ]
      },
      {
        "h": "Qué hacer si ya tienes saldo acumulado",
        "p": [
          "1. Deja de usar la tarjeta para compras nuevas hasta liquidar el saldo.\n2. Calcula cuánto puedes pagar cada mes por encima del mínimo.\n3. Si tienes varias deudas, aplica un método de salida ordenado, como bola de nieve o avalancha.\n4. Pregunta a tu banco por planes de pago fijo con tasa menor, y compara con cuidado.\n5. Cuando termines, vuelve a usarla solo como herramienta de pago, pagando el total cada mes."
        ]
      },
      {
        "h": "Señales de alerta",
        "p": [
          "- Usas la tarjeta para pagar gastos básicos porque el sueldo no alcanza.\n- Pagas una tarjeta con otra.\n- No sabes cuánto debes en total.\n- Solo puedes pagar el mínimo varios meses seguidos.",
          "Si te reconoces en estas señales, es momento de hacer un presupuesto, frenar el uso de crédito y buscar orientación."
        ]
      },
      {
        "h": "Preguntas frecuentes",
        "p": [
          "### ¿Pagar el total baja mi historial por \"no usar crédito\"?",
          "No. El historial se construye por usar la tarjeta y pagarla puntualmente. Pagar el total cada mes es lo mejor que puedes hacer para tu historial; no necesitas mantener deuda ni pagar intereses para que se vea positivo.",
          "### ¿Conviene tener varias tarjetas?",
          "Para la mayoría de las personas, una o dos tarjetas bien administradas son suficientes. Más tarjetas significan más fechas que recordar, más anualidades posibles y más tentación de gasto. Tener una segunda tarjeta puede servir como respaldo si la principal se bloquea o se pierde.",
          "### ¿Qué pasa si pago un poco tarde?",
          "Normalmente se cobra una comisión por pago tardío y se pierden los beneficios del periodo, por lo que se generan intereses. Además, el atraso puede reportarse al buró o central de riesgos y afectar tu historial. Si te ocurre, paga cuanto antes y comunícate con el banco: en algunos casos aceptan revertir la comisión la primera vez."
        ]
      },
      {
        "h": "Resumen",
        "p": [
          "- Conoce tu fecha de corte y tu fecha límite de pago.\n- Paga siempre el monto para no generar intereses; el pago mínimo es una trampa costosa.\n- Usa la tarjeta como si fuera débito, con un límite propio y pagos programados.\n- Cuida las compras a meses y evita retirar efectivo con la tarjeta.\n- Aprovecha los beneficios solo si no pagas intereses.",
          "Las condiciones de cada tarjeta varían según el banco y el país. Lee tu contrato y tu estado de cuenta, y consulta a tu entidad o al regulador ante cualquier duda."
        ]
      }
    ]
  }
];

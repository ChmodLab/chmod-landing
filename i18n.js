// Traducciones de la landing. La clave es el texto en español tal cual está en index.html
// (espacios colapsados); el valor es [inglés, portugués]. Si cambiás un texto en el HTML,
// cambiá también su clave acá — si no, ese texto queda en español en EN/PT.
(() => {
  const D = {
    // <head>
    'chmod — Infraestructura de identidad y prevención de fraude': ['chmod — Identity infrastructure and fraud prevention', 'chmod — Infraestrutura de identidade e prevenção a fraudes'],
    'Verificación de identidad, onboarding y autenticación en una sola plataforma y una sola integración. Para fintechs y empresas de Latinoamérica.': ['Identity verification, onboarding and authentication on a single platform with a single integration. For fintechs and companies across Latin America.', 'Verificação de identidade, onboarding e autenticação em uma única plataforma e uma única integração. Para fintechs e empresas da América Latina.'],
    'chmod — Sabé con certeza quién es tu usuario': ['chmod — Know for certain who your user is', 'chmod — Saiba com certeza quem é o seu usuário'],
    'KYC, onboarding configurable y MFA biométrico en una sola integración.': ['KYC, configurable onboarding and biometric MFA in a single integration.', 'KYC, onboarding configurável e MFA biométrico em uma única integração.'],

    // Nav
    'Plataforma': ['Platform', 'Plataforma'],
    'Identidad continua': ['Continuous identity', 'Identidade contínua'],
    'Por qué chmod': ['Why chmod', 'Por que chmod'],
    'Industrias': ['Industries', 'Setores'],
    'Preguntas': ['FAQ', 'Perguntas'],
    'Agendar demo': ['Book a demo', 'Agendar demo'],
    'chmod, inicio': ['chmod, home', 'chmod, início'],
    'Principal': ['Main', 'Principal'],
    'Abrir menú': ['Open menu', 'Abrir menu'],
    'Idioma': ['Language', 'Idioma'],

    // Hero
    'infraestructura de identidad': ['identity infrastructure', 'infraestrutura de identidade'],
    'Sabé con certeza quién es tu usuario.': ['Know for certain who your user is.', 'Saiba com certeza quem é o seu usuário.'],
    'Verificación de identidad, onboarding y autenticación en': ['Identity verification, onboarding and authentication on', 'Verificação de identidade, onboarding e autenticação em'],
    'una sola plataforma': ['a single platform', 'uma única plataforma'],
    'y': ['and', 'e'],
    'una sola integración': ['a single integration', 'uma única integração'],
    '. Desde el primer onboarding hasta cada acceso y operación.': ['. From the first onboarding to every login and transaction.', '. Do primeiro onboarding a cada acesso e operação.'],
    'Agendar una demo': ['Book a demo', 'Agendar uma demo'],
    'Ver la plataforma': ['See the platform', 'Ver a plataforma'],
    'SDK nativo Android e iOS': ['Native Android & iOS SDK', 'SDK nativo Android e iOS'],
    'En producción en días': ['Live in days', 'Em produção em dias'],
    'Hecho para LatAm': ['Built for LatAm', 'Feito para a América Latina'],
    'Demostración del flujo de verificación': ['Verification flow demo', 'Demonstração do fluxo de verificação'],
    'tu': ['your', 'seu'],
    'Frente de tu documento': ['Front of your ID', 'Frente do seu documento'],
    'Ubicalo dentro del marco': ['Fit it inside the frame', 'Posicione dentro da moldura'],
    'Analizando autenticidad…': ['Checking authenticity…', 'Analisando autenticidade…'],
    'Prueba de vida': ['Liveness check', 'Prova de vida'],
    'Mirá a la cámara y acercate': ['Look at the camera and move closer', 'Olhe para a câmera e aproxime-se'],
    'Comparando con el documento…': ['Matching against the ID…', 'Comparando com o documento…'],
    'Identidad verificada': ['Identity verified', 'Identidade verificada'],
    'Documento auténtico': ['Authentic document', 'Documento autêntico'],
    'Rostro coincide': ['Face matches', 'Rosto confere'],
    'Listas de sanciones': ['Sanctions lists', 'Listas de sanções'],
    'Continuar': ['Continue', 'Continuar'],
    'recaptura de pantalla: no': ['screen recapture: no', 'recaptura de tela: não'],
    'imagen generada por IA: descartada': ['AI-generated image: ruled out', 'imagem gerada por IA: descartada'],
    'OFAC · sin coincidencias': ['OFAC · no matches', 'OFAC · sem correspondências'],

    // Problema
    'el problema': ['the problem', 'o problema'],
    'Salir a producción no debería requerir cinco proveedores.': ['Going live shouldn’t take five vendors.', 'Entrar em produção não deveria exigir cinco fornecedores.'],
    'Hoy una fintech resuelve por su cuenta, o con varios proveedores distintos, la autenticación, la verificación de identidad, el antifraude, la consulta a fuentes de gobierno y el onboarding.': ['Today a fintech has to solve authentication, identity verification, fraud prevention, government data checks and onboarding on its own, or with several different vendors.', 'Hoje uma fintech resolve sozinha, ou com vários fornecedores diferentes, a autenticação, a verificação de identidade, o antifraude, a consulta a fontes governamentais e o onboarding.'],
    'Hoy': ['Today', 'Hoje'],
    'Autenticación': ['Authentication', 'Autenticação'],
    'Proveedor A': ['Vendor A', 'Fornecedor A'],
    'Verificación de identidad': ['Identity verification', 'Verificação de identidade'],
    'Proveedor B': ['Vendor B', 'Fornecedor B'],
    'Prevención de fraude': ['Fraud prevention', 'Prevenção a fraudes'],
    'Proveedor C': ['Vendor C', 'Fornecedor C'],
    'Fuentes de gobierno': ['Government sources', 'Fontes governamentais'],
    'Proveedor D': ['Vendor D', 'Fornecedor D'],
    'Desarrollo propio': ['Built in-house', 'Desenvolvimento próprio'],
    'Meses de desarrollo': ['Months of development', 'Meses de desenvolvimento'],
    'Múltiples contratos': ['Multiple contracts', 'Vários contratos'],
    'Experiencia fragmentada': ['Fragmented experience', 'Experiência fragmentada'],
    'Con chmod': ['With chmod', 'Com a chmod'],
    'Antifraude': ['Anti-fraud', 'Antifraude'],
    'Días, no meses': ['Days, not months', 'Dias, não meses'],
    'Un contrato': ['One contract', 'Um contrato'],
    'Una experiencia': ['One experience', 'Uma experiência'],

    // Plataforma
    'la plataforma': ['the platform', 'a plataforma'],
    'Tres productos, una integración.': ['Three products, one integration.', 'Três produtos, uma integração.'],
    'Prueba de vida, biometría facial y análisis documental para detectar adulteraciones. Cruce con fuentes gubernamentales y listas de sanciones como OFAC.': ['Liveness, facial biometrics and document analysis to detect tampering. Cross-checks against government sources and sanctions lists such as OFAC.', 'Prova de vida, biometria facial e análise documental para detectar adulterações. Cruzamento com fontes governamentais e listas de sanções como a OFAC.'],
    'Ver KYC': ['See KYC', 'Ver KYC'],
    'Onboarding simplificado': ['Simplified onboarding', 'Onboarding simplificado'],
    'Un SDK cuya experiencia e interfaz son configurables. Adaptás pasos, diseño y marca sin construir la verificación desde cero.': ['An SDK with a fully configurable experience and interface. Adapt steps, design and branding without building verification from scratch.', 'Um SDK com experiência e interface configuráveis. Você adapta etapas, design e marca sem construir a verificação do zero.'],
    'Ver el SDK': ['See the SDK', 'Ver o SDK'],
    'Autenticación y MFA': ['Authentication & MFA', 'Autenticação e MFA'],
    'Contraseña, PIN, OTP, TOTP, biometría del dispositivo y biometría con prueba de vida para las operaciones sensibles.': ['Password, PIN, OTP, TOTP, device biometrics and liveness-backed biometrics for sensitive operations.', 'Senha, PIN, OTP, TOTP, biometria do dispositivo e biometria com prova de vida para operações sensíveis.'],
    'Ver factores': ['See factors', 'Ver fatores'],

    // KYC
    'APROBADA': ['APPROVED', 'APROVADA'],
    'Prueba de vida pasiva': ['Passive liveness', 'Prova de vida passiva'],
    'superada': ['passed', 'aprovada'],
    'Comparación facial 1:1': ['1:1 face match', 'Comparação facial 1:1'],
    'coincide': ['match', 'confere'],
    'Lectura MRZ / OCR': ['MRZ / OCR read', 'Leitura MRZ / OCR'],
    'consistente': ['consistent', 'consistente'],
    'Foto de una pantalla': ['Photo of a screen', 'Foto de uma tela'],
    'no': ['no', 'não'],
    'Recaptura / fotocopia': ['Recapture / photocopy', 'Recaptura / fotocópia'],
    'Imagen generada por IA': ['AI-generated image', 'Imagem gerada por IA'],
    'Listas de sanciones (OFAC)': ['Sanctions lists (OFAC)', 'Listas de sanções (OFAC)'],
    'sin coincidencias': ['no matches', 'sem correspondências'],
    'políticas del cliente aplicadas · veredicto automático': ['client policies applied · automatic verdict', 'políticas do cliente aplicadas · veredito automático'],
    'Una persona real, un documento real y los dos coinciden.': ['A real person, a real document, and they match.', 'Uma pessoa real, um documento real, e os dois conferem.'],
    'Validamos cada identidad con varias capas de análisis y aplicamos tus políticas para emitir un veredicto automático.': ['We validate every identity with multiple layers of analysis and apply your policies to issue an automatic verdict.', 'Validamos cada identidade com várias camadas de análise e aplicamos suas políticas para emitir um veredito automático.'],
    'Prueba de vida pasiva:': ['Passive liveness:', 'Prova de vida passiva:'],
    'sin gestos ni instrucciones raras para el usuario.': ['no gestures or awkward instructions for the user.', 'sem gestos nem instruções estranhas para o usuário.'],
    'Biometría facial:': ['Facial biometrics:', 'Biometria facial:'],
    'el rostro de la selfie contra el del documento.': ['the selfie face against the ID photo.', 'o rosto da selfie contra o do documento.'],
    'Análisis documental:': ['Document analysis:', 'Análise documental:'],
    'detecta fotos de pantallas, recapturas e imágenes generadas por IA.': ['detects photos of screens, recaptures and AI-generated images.', 'detecta fotos de telas, recapturas e imagens geradas por IA.'],
    'Fuentes de gobierno y sanciones:': ['Government sources & sanctions:', 'Fontes governamentais e sanções:'],
    'cruce de datos con registros oficiales y listas como OFAC.': ['data cross-checked against official records and lists such as OFAC.', 'cruzamento de dados com registros oficiais e listas como a OFAC.'],

    // SDK studio
    'onboarding': ['onboarding', 'onboarding'],
    'Tu marca, tus pasos, nuestro motor.': ['Your brand, your steps, our engine.', 'Sua marca, suas etapas, nosso motor.'],
    'El SDK se integra de forma nativa en tu app y se viste con tu identidad. Elegí un estilo, cambiá el color, los bordes o el idioma, y mirá lo que van a ver tus usuarios.': ['The SDK plugs natively into your app and wears your identity. Pick a style, change the color, corners or language, and see exactly what your users will see.', 'O SDK se integra de forma nativa ao seu app e veste a sua identidade. Escolha um estilo, mude a cor, as bordas ou o idioma e veja o que seus usuários vão ver.'],
    '> arrancá de un estilo': ['> start from a style', '> comece por um estilo'],
    'Estilos': ['Styles', 'Estilos'],
    'Verde sobre blanco': ['Green on white', 'Verde sobre branco'],
    'Oro sobre negro': ['Gold on black', 'Ouro sobre preto'],
    'Azul sobre negro': ['Blue on black', 'Azul sobre preto'],
    'Violeta sobre blanco': ['Violet on white', 'Violeta sobre branco'],
    'Coral sobre blanco': ['Coral on white', 'Coral sobre branco'],
    '> tu marca': ['> your brand', '> sua marca'],
    '> color principal': ['> primary color', '> cor principal'],
    'Color principal': ['Primary color', 'Cor principal'],
    'Verde': ['Green', 'Verde'],
    'Amarillo': ['Yellow', 'Amarelo'],
    'Azul': ['Blue', 'Azul'],
    'Violeta': ['Violet', 'Violeta'],
    'Coral': ['Coral', 'Coral'],
    'Tu color exacto': ['Your exact color', 'Sua cor exata'],
    'Elegir color exacto': ['Pick an exact color', 'Escolher cor exata'],
    '> tema': ['> theme', '> tema'],
    'Claro': ['Light', 'Claro'],
    'Oscuro': ['Dark', 'Escuro'],
    '> idioma': ['> language', '> idioma'],
    '> bordes': ['> corners', '> bordas'],
    'Recto': ['Square', 'Reto'],
    'Suave': ['Soft', 'Suave'],
    'Redondo': ['Round', 'Redondo'],
    'Píldora': ['Pill', 'Pílula'],
    '> tipografía': ['> typography', '> tipografia'],
    'Moderna': ['Modern', 'Moderna'],
    'Técnica': ['Technical', 'Técnica'],
    'Clásica': ['Classic', 'Clássica'],
    '> pantallas': ['> screens', '> telas'],
    'Bienvenida': ['Welcome', 'Boas-vindas'],
    'Resultado': ['Result', 'Resultado'],
    'Pantalla': ['Screen', 'Tela'],
    'Documento': ['ID document', 'Documento'],
    'copiar': ['copy', 'copiar'],
    'copiado ✓': ['copied ✓', 'copiado ✓'],
    'no se pudo copiar': ['couldn’t copy', 'não foi possível copiar'],
    '// + tus textos: locale.texts': ['// + your copy: locale.texts', '// + seus textos: locale.texts'],
    'Es la configuración real del SDK: lo que ves en el teléfono es lo que escribís en tu código. Sin pantallas de terceros.': ['This is the SDK’s real configuration: what you see on the phone is what you write in your code. No third-party screens.', 'É a configuração real do SDK: o que você vê no celular é o que escreve no seu código. Sem telas de terceiros.'],
    '> y además': ['> and also', '> e ainda'],
    'Todo lo que se configura': ['Everything you can configure', 'Tudo o que dá para configurar'],
    'Colores': ['Colors', 'Cores'],
    '19 tokens por tema: principal, fondos, superficies, bordes, errores y pantallas de resultado.': ['19 tokens per theme: primary, backgrounds, surfaces, outlines, errors and result screens.', '19 tokens por tema: principal, fundos, superfícies, bordas, erros e telas de resultado.'],
    'Tema': ['Theme', 'Tema'],
    'Claro, oscuro o el que tenga el sistema del usuario.': ['Light, dark, or whatever the user’s system uses.', 'Claro, escuro ou o que o sistema do usuário usar.'],
    'Tipografía': ['Typography', 'Tipografia'],
    'Tu propia fuente y tamaños de título, texto y etiquetas.': ['Your own font, plus title, body and label sizes.', 'Sua própria fonte e tamanhos de título, texto e rótulos.'],
    'Formas': ['Shapes', 'Formas'],
    'Siete niveles de redondeo, de recto a píldora.': ['Seven corner levels, from square to pill.', 'Sete níveis de arredondamento, de reto a pílula.'],
    'Idiomas y textos': ['Languages & copy', 'Idiomas e textos'],
    'Español, portugués, inglés, francés, italiano, alemán y ruso. Y cualquier texto reescrito con tu tono.': ['Spanish, Portuguese, English, French, Italian, German and Russian. And any string rewritten in your own voice.', 'Espanhol, português, inglês, francês, italiano, alemão e russo. E qualquer texto reescrito com o seu tom.'],
    'Captura de documento': ['Document capture', 'Captura de documento'],
    'Disparo automático o manual, detección del tipo de documento, vista previa y reintentos.': ['Automatic or manual capture, document type detection, preview and retries.', 'Captura automática ou manual, detecção do tipo de documento, pré-visualização e novas tentativas.'],
    'Pantallas': ['Screens', 'Telas'],
    'Bienvenida, resultado y detalle de error: las mostrás o las resolvés vos.': ['Welcome, result and error detail: show them, or handle them yourself.', 'Boas-vindas, resultado e detalhe de erro: você mostra ou resolve do seu jeito.'],
    'Ubicación': ['Location', 'Localização'],
    'Permiso requerido, opcional o desactivado, según tu política de riesgo.': ['Required, optional or disabled permission, based on your risk policy.', 'Permissão obrigatória, opcional ou desativada, conforme sua política de risco.'],

    // Identidad continua
    'lo que nos diferencia': ['what sets us apart', 'o que nos diferencia'],
    'Identidad continua: verificamos una vez y la identidad queda.': ['Continuous identity: verify once, and the identity stays.', 'Identidade contínua: verificamos uma vez e a identidade fica.'],
    'El rostro validado en el onboarding se reutiliza después para autenticar al usuario. La mayoría de los proveedores trata KYC y autenticación como productos separados. Nosotros no.': ['The face validated during onboarding is reused later to authenticate the user. Most vendors treat KYC and authentication as separate products. We don’t.', 'O rosto validado no onboarding é reutilizado depois para autenticar o usuário. A maioria dos fornecedores trata KYC e autenticação como produtos separados. Nós não.'],
    '01 · onboarding': ['01 · onboarding', '01 · onboarding'],
    'Se valida el rostro': ['The face is validated', 'O rosto é validado'],
    'Documento, prueba de vida y comparación facial. Queda una identidad verificada.': ['ID, liveness and face match. A verified identity is created.', 'Documento, prova de vida e comparação facial. Fica uma identidade verificada.'],
    '02 · operación sensible': ['02 · sensitive operation', '02 · operação sensível'],
    'Transferencia grande': ['Large transfer', 'Transferência alta'],
    'Una selfie con prueba de vida confirma que es la misma persona.': ['A liveness selfie confirms it’s the same person.', 'Uma selfie com prova de vida confirma que é a mesma pessoa.'],
    '03 · recuperación': ['03 · recovery', '03 · recuperação'],
    'Perdió su clave': ['Lost their password', 'Perdeu a senha'],
    'Recupera la cuenta con su rostro, sin tickets de soporte ni preguntas de seguridad.': ['They recover the account with their face: no support tickets, no security questions.', 'Recupera a conta com o rosto, sem chamados de suporte nem perguntas de segurança.'],
    '04 · nuevo dispositivo': ['04 · new device', '04 · novo dispositivo'],
    'Cambió de celular': ['Got a new phone', 'Trocou de celular'],
    'El nuevo equipo se habilita con la misma biometría del onboarding.': ['The new device is enabled with the same biometrics from onboarding.', 'O novo aparelho é habilitado com a mesma biometria do onboarding.'],

    // MFA
    'autenticación': ['authentication', 'autenticação'],
    'El factor justo para cada momento.': ['The right factor for every moment.', 'O fator certo para cada momento.'],
    'Combiná factores según el riesgo de cada acción. Poca fricción para entrar a la app y máxima seguridad para mover dinero.': ['Combine factors based on the risk of each action. Low friction to open the app, maximum security to move money.', 'Combine fatores conforme o risco de cada ação. Pouco atrito para entrar no app e máxima segurança para movimentar dinheiro.'],
    'Contraseña': ['Password', 'Senha'],
    'El clásico, bien protegido': ['The classic, well protected', 'O clássico, bem protegido'],
    'Rápido para el día a día': ['Quick for everyday use', 'Rápido para o dia a dia'],
    'SMS · mail': ['SMS · email', 'SMS · e-mail'],
    'Código de un solo uso': ['One-time code', 'Código de uso único'],
    'Compatible con Google Authenticator': ['Works with Google Authenticator', 'Compatível com Google Authenticator'],
    'Biometría del dispositivo': ['Device biometrics', 'Biometria do dispositivo'],
    'Huella o Face ID del celular': ['Phone fingerprint or Face ID', 'Digital ou Face ID do celular'],
    'Biometría con prueba de vida': ['Liveness biometrics', 'Biometria com prova de vida'],
    'Para operaciones sensibles': ['For sensitive operations', 'Para operações sensíveis'],

    // Por qué
    'por qué chmod': ['why chmod', 'por que chmod'],
    'Lo que cambia cuando todo está en un solo lugar.': ['What changes when everything lives in one place.', 'O que muda quando tudo está em um só lugar.'],
    'Comparación': ['Comparison', 'Comparação'],
    'El camino habitual': ['The usual way', 'O caminho habitual'],
    'Integración': ['Integration', 'Integração'],
    'Un proveedor por problema': ['One vendor per problem', 'Um fornecedor por problema'],
    'Una sola integración': ['A single integration', 'Uma única integração'],
    'Tiempo a producción': ['Time to go live', 'Tempo até produção'],
    'Meses': ['Months', 'Meses'],
    'Días': ['Days', 'Dias'],
    'KYC y autenticación': ['KYC & authentication', 'KYC e autenticação'],
    'Productos separados': ['Separate products', 'Produtos separados'],
    'El mismo rostro, de punta a punta': ['The same face, end to end', 'O mesmo rosto, de ponta a ponta'],
    'Experiencia': ['Experience', 'Experiência'],
    'Pantallas de terceros': ['Third-party screens', 'Telas de terceiros'],
    'SDK nativo con tu marca': ['Native SDK with your brand', 'SDK nativo com a sua marca'],
    'Costo': ['Cost', 'Custo'],
    'Precios de jugador global': ['Global-player pricing', 'Preço de player global'],
    'Significativamente menor': ['Significantly lower', 'Significativamente menor'],
    'Cambiar de proveedor': ['Switching vendors', 'Trocar de fornecedor'],
    'Reprocesar a cada usuario': ['Reprocess every user', 'Reprocessar cada usuário'],
    'Migración gratuita, con biometría': ['Free migration, biometrics included', 'Migração gratuita, com biometria'],

    // Migración
    'migración · gratis': ['migration · free', 'migração · grátis'],
    'Lo que ya verificaste sigue verificado.': ['What you already verified stays verified.', 'O que você já verificou continua verificado.'],
    'Cambiar de proveedor suele significar': ['Switching vendors usually means', 'Trocar de fornecedor costuma significar'],
    'reprocesar a cada usuario': ['reprocessing every user', 'reprocessar cada usuário'],
    ': pagar otra vez por identidades en las que ya confiabas y volver a pedirles documento y selfie. Con chmod no. Migramos tu base existente, con su biometría facial, sin costo.': [': paying again for identities you already trusted and asking people for their ID and selfie all over again. Not with chmod. We migrate your existing user base, facial biometrics included, at no cost.', ': pagar de novo por identidades em que você já confiava e pedir documento e selfie outra vez. Com a chmod, não. Migramos sua base existente, com a biometria facial, sem custo.'],
    'Cómo viaja tu base': ['How your data travels', 'Como sua base viaja'],
    '01 · tu base actual': ['01 · your current base', '01 · sua base atual'],
    'Fotos de documentos': ['ID photos', 'Fotos de documentos'],
    'Selfies validadas': ['Validated selfies', 'Selfies validadas'],
    'Datos de cada usuario': ['Each user’s data', 'Dados de cada usuário'],
    '02 · acceso temporal': ['02 · temporary access', '02 · acesso temporário'],
    'URL prefirmada por imagen': ['A presigned URL per image', 'URL pré-assinada por imagem'],
    'Vence sola': ['Expires on its own', 'Expira sozinha'],
    'No sale de tu nube hasta que la leemos': ['Stays in your cloud until we read it', 'Não sai da sua nuvem até a lermos'],
    'Identidades listas': ['Identities ready', 'Identidades prontas'],
    'El rostro ya sirve para autenticar': ['The face already works for authentication', 'O rosto já serve para autenticar'],
    'Tus usuarios ni se enteran': ['Your users won’t even notice', 'Seus usuários nem percebem'],
    'recomendado': ['recommended', 'recomendado'],
    'URLs prefirmadas': ['Presigned URLs', 'URLs pré-assinadas'],
    'Nos compartís acceso temporal a cada imagen desde tu propio almacenamiento. Los archivos no viajan en el request y el permiso vence solo.': ['You share temporary access to each image from your own storage. Files don’t travel in the request, and access expires on its own.', 'Você compartilha acesso temporário a cada imagem a partir do seu próprio armazenamento. Os arquivos não viajam na requisição e a permissão expira sozinha.'],
    'directo': ['direct', 'direto'],
    'Imágenes en base64': ['Base64 images', 'Imagens em base64'],
    'Enviás cada imagen codificada dentro de la misma llamada a la API. Sin configurar permisos en tu nube.': ['Send each image encoded inside the API call itself. No cloud permissions to set up.', 'Você envia cada imagem codificada na própria chamada à API. Sem configurar permissões na sua nuvem.'],
    'API REST': ['REST API', 'API REST'],
    'Sin infraestructura extra': ['No extra infrastructure', 'Sem infraestrutura extra'],
    'a medida': ['custom', 'sob medida'],
    'Lo conversamos': ['Let’s talk', 'A gente conversa'],
    '¿Tu base vive en servidores propios, on-premise o en otro formato? Armamos juntos el camino que mejor se adapte.': ['Does your data live on your own servers, on-premise or in another format? We’ll design the best path together.', 'Sua base está em servidores próprios, on-premise ou em outro formato? Montamos juntos o caminho que melhor se adapta.'],
    'On-premise': ['On-premise', 'On-premise'],
    'Servidores propios': ['Own servers', 'Servidores próprios'],
    'Otros formatos': ['Other formats', 'Outros formatos'],
    'La migración no tiene costo.': ['Migration is free.', 'A migração não tem custo.'],
    'Planificar mi migración': ['Plan my migration', 'Planejar minha migração'],

    // Industrias
    'para quién': ['who it’s for', 'para quem'],
    'Para cualquier empresa que necesite saber quién está del otro lado.': ['For any company that needs to know who’s on the other side.', 'Para qualquer empresa que precise saber quem está do outro lado.'],
    '> finanzas': ['> finance', '> finanças'],
    'Fintechs en etapa temprana': ['Early-stage fintechs', 'Fintechs em estágio inicial'],
    'Billeteras digitales': ['Digital wallets', 'Carteiras digitais'],
    'Neobancos': ['Neobanks', 'Bancos digitais'],
    'Prestamistas digitales': ['Digital lenders', 'Credores digitais'],
    'Remesadoras': ['Remittance companies', 'Empresas de remessas'],
    'Procesadores de pago': ['Payment processors', 'Processadores de pagamento'],
    'Cooperativas y mutuales': ['Credit unions & cooperatives', 'Cooperativas e mútuas'],
    'Financieras': ['Consumer finance companies', 'Financeiras'],
    'Bancos regionales': ['Regional banks', 'Bancos regionais'],
    '> inversión y cripto': ['> investing & crypto', '> investimentos e cripto'],
    'Exchanges cripto': ['Crypto exchanges', 'Exchanges de cripto'],
    'Plataformas de inversión': ['Investment platforms', 'Plataformas de investimento'],
    '> plataformas y servicios': ['> platforms & services', '> plataformas e serviços'],
    'Apuestas y gaming online': ['Online betting & gaming', 'Apostas e games online'],
    'Economía gig': ['Gig economy', 'Economia gig'],
    'Delivery y movilidad': ['Delivery & mobility', 'Delivery e mobilidade'],
    'Proptech y alquileres': ['Proptech & rentals', 'Proptech e aluguéis'],
    'Telemedicina': ['Telehealth', 'Telemedicina'],

    // Cómo funciona
    'cómo funciona': ['how it works', 'como funciona'],
    'De la firma a producción, en días.': ['From signing to going live, in days.', 'Da assinatura à produção, em dias.'],
    'Integrás el SDK': ['Integrate the SDK', 'Integre o SDK'],
    'Una dependencia en tu app Android o iOS y una API para tu backend.': ['One dependency in your Android or iOS app, and one API for your backend.', 'Uma dependência no seu app Android ou iOS e uma API para o seu backend.'],
    'Configurás el flujo': ['Configure the flow', 'Configure o fluxo'],
    'Pasos, marca y políticas de aprobación, adaptados a tu producto y tu regulación.': ['Steps, branding and approval policies, tailored to your product and your regulations.', 'Etapas, marca e políticas de aprovação, adaptadas ao seu produto e à sua regulação.'],
    'Salís a producción': ['Go live', 'Entre em produção'],
    'Tus usuarios se verifican y autentican dentro de tu app, sin salir de ella.': ['Your users verify and authenticate inside your app, without ever leaving it.', 'Seus usuários se verificam e se autenticam dentro do seu app, sem sair dele.'],

    // Documentación
    'Documentación': ['Docs', 'Documentação'],
    '> para developers': ['> for developers', '> para desenvolvedores'],
    'Toda la API y el SDK, documentados.': ['The whole API and SDK, documented.', 'Toda a API e o SDK, documentados.'],
    'Guías de integración, referencia de endpoints y configuración del SDK.': ['Integration guides, endpoint reference and SDK configuration.', 'Guias de integração, referência de endpoints e configuração do SDK.'],
    'Ver documentación': ['Read the docs', 'Ver documentação'],

    // FAQ
    'Preguntas frecuentes': ['Frequently asked questions', 'Perguntas frequentes'],
    '¿Cuánto tarda la integración?': ['How long does integration take?', 'Quanto tempo leva a integração?'],
    'Días, no meses. El SDK trae el flujo completo de captura, verificación y autenticación. Tu equipo solo lo configura y lo conecta.': ['Days, not months. The SDK ships the full capture, verification and authentication flow. Your team just configures and connects it.', 'Dias, não meses. O SDK traz o fluxo completo de captura, verificação e autenticação. Sua equipe só configura e conecta.'],
    '¿En qué plataformas funciona el SDK?': ['Which platforms does the SDK support?', 'Em quais plataformas o SDK funciona?'],
    'En Android e iOS, de forma nativa. La experiencia se integra en tu interfaz con tus colores, tu marca y los pasos que elijas.': ['Android and iOS, natively. The experience blends into your interface with your colors, your brand and the steps you choose.', 'Android e iOS, de forma nativa. A experiência se integra à sua interface com suas cores, sua marca e as etapas que você escolher.'],
    '¿Cómo detectan documentos adulterados?': ['How do you detect tampered documents?', 'Como vocês detectam documentos adulterados?'],
    'Analizamos cada imagen para detectar fotos tomadas a una pantalla, recapturas e imágenes generadas por IA. Además leemos la zona MRZ y comparamos el rostro del documento con el de la prueba de vida.': ['We analyze every image to detect photos taken of a screen, recaptures and AI-generated images. We also read the MRZ and compare the face on the ID with the one from the liveness check.', 'Analisamos cada imagem para detectar fotos tiradas de uma tela, recapturas e imagens geradas por IA. Também lemos a zona MRZ e comparamos o rosto do documento com o da prova de vida.'],
    'Ya uso otro proveedor. ¿Tengo que volver a verificar a todos mis usuarios?': ['I already use another vendor. Do I have to re-verify all my users?', 'Já uso outro fornecedor. Preciso verificar todos os meus usuários de novo?'],
    'No. Migramos gratis tu base existente, incluida la biometría facial, así que no pagás dos veces por identidades que ya verificaste. Nos compartís las imágenes con URLs prefirmadas desde tu nube (S3, Google Cloud Storage o Azure) o en base64 por API. Si tu base está on-premise, armamos el camino juntos.': ['No. We migrate your existing base for free, facial biometrics included, so you never pay twice for identities you already verified. Share the images through presigned URLs from your cloud (S3, Google Cloud Storage or Azure) or as base64 via the API. If your data is on-premise, we’ll work out the path together.', 'Não. Migramos sua base existente de graça, incluindo a biometria facial, então você não paga duas vezes por identidades que já verificou. Você compartilha as imagens com URLs pré-assinadas da sua nuvem (S3, Google Cloud Storage ou Azure) ou em base64 pela API. Se sua base estiver on-premise, montamos o caminho juntos.'],
    '¿Qué es la identidad continua?': ['What is continuous identity?', 'O que é identidade contínua?'],
    'El rostro que validás en el onboarding se convierte en un factor de autenticación. Lo usás para confirmar operaciones sensibles, recuperar cuentas o habilitar un dispositivo nuevo, sin integrar otro proveedor.': ['The face you validate during onboarding becomes an authentication factor. Use it to confirm sensitive operations, recover accounts or enable a new device, without integrating another vendor.', 'O rosto validado no onboarding vira um fator de autenticação. Você o usa para confirmar operações sensíveis, recuperar contas ou habilitar um novo dispositivo, sem integrar outro fornecedor.'],

    // CTA + footer
    'chmod +x tu-onboarding': ['chmod +x your-onboarding', 'chmod +x seu-onboarding'],
    'Crecé con seguridad y confianza.': ['Grow with security and confidence.', 'Cresça com segurança e confiança.'],
    'Cumplimiento regulatorio, prevención de fraude y una experiencia fluida en una sola integración.': ['Regulatory compliance, fraud prevention and a seamless experience in a single integration.', 'Conformidade regulatória, prevenção a fraudes e uma experiência fluida em uma única integração.'],
    'o escribinos a': ['or write to us at', 'ou escreva para'],
    '> infraestructura para verificación de identidad y prevención de fraude': ['> infrastructure for identity verification and fraud prevention', '> infraestrutura para verificação de identidade e prevenção a fraudes'],
    'Pie': ['Footer', 'Rodapé'],
    'chmod. Todos los derechos reservados.': ['chmod. All rights reserved.', 'chmod. Todos os direitos reservados.'],
  };

  const LANGS = ['es', 'en', 'pt'];
  const IDX = { en: 0, pt: 1 };
  const HTML_LANG = { es: 'es', en: 'en', pt: 'pt-BR' };
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const tr = (es, lang) => (lang === 'es' || !D[es]) ? es : D[es][IDX[lang]];

  // Se capturan los textos originales una sola vez; cambiar de idioma siempre parte del español.
  const SKIP = 'script, style, pre, svg, #sdkPhone, .idcard__mrz';
  const texts = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    if (n.parentElement.closest(SKIP)) continue;
    const key = norm(n.nodeValue);
    if (!D[key]) continue;
    texts.push({ n, raw: n.nodeValue, key, lead: n.nodeValue.match(/^\s*/)[0], trail: n.nodeValue.match(/\s*$/)[0] });
  }
  const attrs = [];
  document.querySelectorAll('[aria-label], [title]').forEach(el => {
    ['aria-label', 'title'].forEach(a => { const v = el.getAttribute(a); if (v && D[v]) attrs.push({ el, a, v }); });
  });
  const metas = [...document.querySelectorAll('meta[name="description"], meta[property^="og:"]')]
    .map(el => ({ el, v: el.getAttribute('content') })).filter(m => D[m.v]);
  const title = document.title;

  let current = 'es';
  const apply = lang => {
    current = lang;
    texts.forEach(t => { t.n.nodeValue = lang === 'es' ? t.raw : t.lead + tr(t.key, lang) + t.trail; });
    attrs.forEach(({ el, a, v }) => el.setAttribute(a, tr(v, lang)));
    metas.forEach(({ el, v }) => el.setAttribute('content', tr(v, lang)));
    document.title = tr(title, lang);
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll('.lang button').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on);
    });
    document.documentElement.classList.remove('i18n-wait');
    window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  };

  const set = lang => {
    apply(lang);
    try { localStorage.setItem('chmod-lang', lang); } catch {}
    const url = new URL(location.href);
    if (lang === 'es') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  };

  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => set(b.dataset.lang)));

  window.i18n = { t: es => tr(es, current), get lang() { return current; } };
  apply(window.__initialLang && LANGS.includes(window.__initialLang) ? window.__initialLang : 'es');
})();

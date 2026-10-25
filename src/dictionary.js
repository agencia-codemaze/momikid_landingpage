/** Textos do site nos três idiomas. Arquivo puro (sem JSX) para o script de build também poder lê-lo. */
export const LANGS = ['pt', 'en', 'es'];
export const LANG_NAMES = { pt: 'Português', en: 'English', es: 'Español' };

export const DICT = {
  pt: {
    meta: { title: 'momikid | App para pais: rotina, vacinas e remédios do bebê', description: 'Registre mamadas, sono, fraldas, remédios e vacinas dos seus filhos e compartilhe em tempo real com pai, avó e babá. Baixe o momikid para Android e iPhone.' },
    nav: { download: 'Baixar app', language: 'Idioma' },
    stores: { play1: 'Disponível no', apple1: 'Baixe na', playAria: 'Baixar no Google Play', appleAria: 'Baixar na App Store' },
    hero: {
      hud: 'Para mães, pais, avós e babás',
      title: 'Todo mundo cuida.', em: 'Ninguém se perde.',
      lead: 'Mamadas, sono, fraldas, remédios, vacinas e agenda dos seus filhos num só lugar — e todo mundo que cuida vê tudo em tempo real.',
      free: 'Grátis para começar · português, inglês e espanhol',
      fc1: ['Vacina em 3 dias', 'Calendário vacinal'], fc2: ['Meta da semana', '8 de 10 estrelas'],
    },
    feat: {
      eyebrow: 'Tudo no mesmo lugar', title: 'Feito para a rotina real de quem cuida',
      items: [
        ['Registro com um toque', 'Peito, mamadeira, sono, fralda e remédio. Cronômetro de mamada por lado e linha do dia sempre atualizada.'],
        ['Remédios sem dose dupla', 'Horários, próximas doses e um aviso quando alguém da família já deu o remédio.'],
        ['Vacinas e crescimento', 'Calendário vacinal do PNI e curvas de crescimento da OMS para acompanhar peso e altura.'],
        ['Relatório para o pediatra', 'Sintomas, remédios e ficha de emergência prontos para levar à consulta, em PDF.'],
        ['Agenda da família', 'Consultas, escola e compromissos, com quem leva e quem busca.'],
        ['Tarefas, estrelas e marcos', 'Quadro de tarefas para os maiores e um álbum de marcos para cada primeira vez.'],
      ],
    },
    inside: {
      eyebrow: 'Por dentro do app', title: 'Tudo o que a família precisa saber, na hora certa',
      topics: [
        ['Aviso de remédios', 'Quando chega a hora da dose, ela fica em destaque na tela Hoje, com um toque para registrar que foi dada.', 'Tela Hoje do momikid mostrando as próximas doses de remédio com o botão Dar'],
        ['Aviso de vacinas', 'O lembrete aparece na hora da dose do calendário vacinal. Um toque em “Foi aplicada” e ela entra no histórico.', 'Tela Hoje com o lembrete de vacina na hora e o botão Foi aplicada'],
        ['Agenda da família', 'Consultas, escola e atividades por semana ou por mês, filtradas por criança e por tipo. O que vem aí também aparece na tela inicial.', 'Tela Agenda do momikid com calendário do mês e filtros por criança'],
        ['Histórico completo dos filhos', 'Peso, altura, vacinas, remédios, sintomas e a linha do dia, tudo guardado por criança, com as curvas de crescimento da OMS.', 'Tela Saúde com a curva de peso por idade e a lista de medições'],
        ['Relatório para o pediatra', 'Um resumo do último mês em PDF, com o que foi registrado, pronto para levar à consulta.', 'Tela Saúde com sintomas e o atalho Relatório para o pediatra'],
        ['Estatísticas da família', 'Gráficos do que foi registrado, da família toda ou de cada criança, em 7, 30 ou 90 dias.', 'Tela Estatísticas com o resumo da família e o placar entre as crianças'],
      ],
    },
    steps: {
      eyebrow: 'Como funciona', title: 'Pronto em poucos minutos',
      items: [['Baixe e crie a família', 'Cadastre seu filho ou filha e comece a registrar o dia.'], ['Convide quem cuida', 'Mande um link para o pai, a avó ou a babá. Cada um entra no seu idioma.'], ['Registre e acompanhe', 'Tudo sincroniza na hora. Ninguém precisa perguntar: está no momikid.']],
    },
    live: {
      eyebrow: 'Em tempo real', title: 'Todo mundo na mesma página',
      lead: 'Quem cuida de manhã passa o bastão sem mensagem comprida. O que um registra, os outros veem na hora.',
      people: [['Mamãe', 'Registrou a mamada', '09:40'], ['Papai', 'Trocou a fralda', '07:35'], ['Vovó', 'Soneca em andamento', 'agora']],
    },
    faq: {
      eyebrow: 'Dúvidas', title: 'Tudo o que você quer saber antes de começar',
      items: [
        ['Como o momikid vai ajudar a minha família no dia a dia?', 'Ele reúne em um só lugar tudo o que você anota sobre seus filhos: mamadas, sono, fraldas, remédios, vacinas e consultas. Quem cuida vê tudo na hora, então ninguém precisa perguntar “quando foi a última mamada?” e a rotina fica tranquila, mesmo quando muita gente ajuda.'],
        ['Como evito esquecer um remédio ou uma vacina?', 'As próximas doses e vacinas aparecem em destaque na tela Hoje, na hora certa, e você registra com um toque. A família toda enxerga o que já foi dado, o que ajuda a evitar dose repetida ou esquecida.'],
        ['Consigo levar tudo para a consulta do pediatra?', 'Consegue. Com um toque, o app gera um resumo do último mês em PDF, com sintomas, remédios e medições. Você chega à consulta com as respostas na mão, sem depender da memória.'],
        ['Pai, avó e babá também podem usar?', 'Podem, e é aí que o app brilha. Você convida cada pessoa por link e escolhe quais crianças ela pode ver. Cada um usa o próprio celular, Android ou iPhone, e todo mundo acompanha a mesma rotina em tempo real.'],
        ['Preciso pagar para usar?', 'Não para começar. Você baixa, cria sua família e já pode registrar a rotina dos seus filhos sem pagar nada. Se um dia houver recursos pagos, você será avisado antes de qualquer cobrança.'],
        ['Os dados dos meus filhos ficam protegidos?', 'Só entra na família quem você convida, e cada pessoa vê apenas as crianças que você liberar. Não vendemos dados e não usamos dados de saúde para publicidade. Os detalhes estão na Política de Privacidade.'],
        ['O momikid substitui o pediatra?', 'Não, e foi pensado para fortalecer essa relação. O momikid organiza o que a família anota para você conversar com mais clareza com o pediatra, mas não faz diagnóstico. Em caso de emergência, procure atendimento.'],
      ],
    },
    humans: {
      eyebrow: 'Gente de verdade', title: 'Por trás de cada registro, uma família',
      lead: 'O momikid existe para sobrar mais tempo para o que importa: estar juntos.',
      momAlt: 'Mãe usando o momikid no celular', familyAlt: 'Pais e filhos juntos',
      chips: [['Mamou · lado esquerdo', 'registrado em 2 segundos'], ['Vacina em dia', 'um toque e pronto'], ['Papai viu na hora', 'sem precisar perguntar']],
    },
    final: { title1: 'Menos preocupação,', title2: 'mais tempo com eles.', lead: 'Baixe o momikid e leve a rotina da sua família no bolso.' },
    footer: { privacy: 'Privacidade', terms: 'Termos', deletion: 'Excluir conta', disclaimer: 'O momikid registra e organiza o que a família anota. Não faz diagnóstico nem substitui a orientação do pediatra ou de outro profissional de saúde. Em caso de emergência, procure atendimento.' },
    phone: {
      today: 'Hoje', live: 'ao vivo', child: 'Mel, 5 meses',
      quick: ['Peito', 'Mamadeira', 'Sono', 'Xixi', 'Cocô', 'Remédio'],
      events: [['Mamou · lado esquerdo', 'por Mamãe · 14 min'], ['Soneca', 'por Vovó · 1h20'], ['Fralda de xixi', 'por Papai'], ['Mamadeira · 120 ml', 'por Mamãe'], ['Vitamina D', 'por Mamãe'], ['Fralda de cocô', 'por Papai']],
    },
  },

  en: {
    meta: { title: 'momikid | Baby care app: routine, vaccines and medicines', description: 'Log feedings, sleep, diapers, medicines and vaccines and share them in real time with dad, grandma and the nanny. Get momikid for Android and iPhone.' },
    nav: { download: 'Get the app', language: 'Language' },
    stores: { play1: 'Get it on', apple1: 'Download on the', playAria: 'Get it on Google Play', appleAria: 'Download on the App Store' },
    hero: {
      hud: 'For moms, dads, grandparents and nannies',
      title: 'Everyone cares.', em: 'No one loses track.',
      lead: 'Feedings, sleep, diapers, medicines, vaccines and your kids’ schedule in one place — and everyone who helps care for them sees it all in real time.',
      free: 'Free to start · Portuguese, English and Spanish',
      fc1: ['Vaccine in 3 days', 'Vaccination calendar'], fc2: ['Weekly goal', '8 of 10 stars'],
    },
    feat: {
      eyebrow: 'All in one place', title: 'Made for the real routine of caregiving',
      items: [
        ['One-tap logging', 'Breast, bottle, sleep, diaper and medicine. A feeding timer per side and a daily timeline that’s always up to date.'],
        ['No double doses', 'Schedules, upcoming doses and a heads-up when someone in the family has already given the medicine.'],
        ['Vaccines and growth', 'Vaccination calendar and WHO growth curves to follow weight and height.'],
        ['Report for the pediatrician', 'Symptoms, medicines and the emergency card, ready to take to the appointment as a PDF.'],
        ['Family schedule', 'Appointments, school and plans, with who drops off and who picks up.'],
        ['Chores, stars and milestones', 'A chore chart for older kids and a milestone album for every first time.'],
      ],
    },
    inside: {
      eyebrow: 'Inside the app', title: 'Everything the family needs to know, right on time',
      topics: [
        ['Medicine reminders', 'When a dose is due, it stands out on the Today screen, with one tap to log that it was given.', 'momikid Today screen showing upcoming medicine doses with the Give button'],
        ['Vaccine reminders', 'The reminder shows up when a dose from the vaccination calendar is due. One tap on “Done” and it goes into the history.', 'Today screen with the vaccine reminder due and the Done button'],
        ['Family schedule', 'Appointments, school and activities by week or month, filtered by child and by type. What’s coming up also shows on the home screen.', 'momikid Schedule screen with the month calendar and filters by child'],
        ['Complete history for each child', 'Weight, height, vaccines, medicines, symptoms and the daily timeline, all kept per child, with WHO growth curves.', 'Health screen with the weight-for-age curve and the list of measurements'],
        ['Report for the pediatrician', 'A one-month summary as a PDF with everything that was logged, ready to take to the appointment.', 'Health screen with symptoms and the shortcut to the pediatrician report'],
        ['Family statistics', 'Charts of what was logged, for the whole family or for each child, over 7, 30 or 90 days.', 'Statistics screen with the family summary and the scoreboard between kids'],
      ],
    },
    steps: {
      eyebrow: 'How it works', title: 'Ready in a few minutes',
      items: [['Download and create your family', 'Add your child and start logging the day.'], ['Invite caregivers', 'Send a link to dad, grandma or the nanny. Each person joins in their own language.'], ['Log and follow along', 'Everything syncs instantly. Nobody has to ask: it’s in momikid.']],
    },
    live: {
      eyebrow: 'In real time', title: 'Everyone on the same page',
      lead: 'Whoever cares for them in the morning hands over without a long message. What one person logs, the others see instantly.',
      people: [['Mom', 'Logged the feeding', '09:40'], ['Dad', 'Changed a diaper', '07:35'], ['Grandma', 'Nap in progress', 'now']],
    },
    faq: {
      eyebrow: 'Questions', title: 'Everything you want to know before you start',
      items: [
        ['How will momikid help my family every day?', 'It brings together in one place everything you log about your kids: feedings, sleep, diapers, medicines, vaccines and appointments. Everyone who helps care for them sees it instantly, so nobody has to ask “when was the last feeding?” and the routine stays calm, even when many people pitch in.'],
        ['How do I avoid forgetting a medicine or a vaccine?', 'Upcoming doses and vaccines stand out on the Today screen at the right time, and you log them with one tap. The whole family can see what has already been given, which helps avoid repeated or missed doses.'],
        ['Can I take everything to the pediatrician appointment?', 'Yes. With one tap, the app generates a one-month PDF summary with symptoms, medicines and measurements. You arrive at the appointment with the answers in hand, without relying on memory.'],
        ['Can dad, grandma and the nanny use it too?', 'They can, and that is where the app shines. You invite each person by link and choose which children they can see. Everyone uses their own phone, Android or iPhone, and everybody follows the same routine in real time.'],
        ['Do I have to pay to use it?', 'Not to get started. You download it, create your family and can start logging your kids’ routine without paying anything. If paid features are ever introduced, you will be told before any charge.'],
        ['Is my children’s data protected?', 'Only people you invite can join the family, and each person sees only the children you make available. We do not sell data and we do not use health data for advertising. The details are in the Privacy Policy.'],
        ['Does momikid replace the pediatrician?', 'No, and it was designed to strengthen that relationship. momikid organizes what the family logs so you can talk to the pediatrician more clearly, but it does not diagnose. In an emergency, seek care.'],
      ],
    },
    humans: {
      eyebrow: 'Real people', title: 'Behind every log, a family',
      lead: 'momikid exists so there is more time left for what matters: being together.',
      momAlt: 'Mother using momikid on her phone', familyAlt: 'Parents and children together',
      chips: [['Fed · left side', 'logged in 2 seconds'], ['Vaccine up to date', 'one tap and done'], ['Dad saw it instantly', 'no need to ask']],
    },
    final: { title1: 'Less worry,', title2: 'more time with them.', lead: 'Get momikid and carry your family’s routine in your pocket.' },
    footer: { privacy: 'Privacy', terms: 'Terms', deletion: 'Delete account', disclaimer: 'momikid records and organizes what the family logs. It does not diagnose and does not replace the advice of a pediatrician or other health professional. In an emergency, seek care.' },
    phone: {
      today: 'Today', live: 'live', child: 'Mel, 5 months',
      quick: ['Breast', 'Bottle', 'Sleep', 'Pee', 'Poop', 'Medicine'],
      events: [['Fed · left side', 'by Mom · 14 min'], ['Nap', 'by Grandma · 1h20'], ['Pee diaper', 'by Dad'], ['Bottle · 120 ml', 'by Mom'], ['Vitamin D', 'by Mom'], ['Poop diaper', 'by Dad']],
    },
  },

  es: {
    meta: { title: 'momikid | App para padres: rutina, vacunas y medicinas', description: 'Registra tomas, sueño, pañales, medicinas y vacunas de tus hijos y compártelos en tiempo real con papá, abuela y niñera. Descarga momikid para Android e iPhone.' },
    nav: { download: 'Descargar app', language: 'Idioma' },
    stores: { play1: 'Disponible en', apple1: 'Descárgala en la', playAria: 'Disponible en Google Play', appleAria: 'Descárgala en la App Store' },
    hero: {
      hud: 'Para mamás, papás, abuelos y niñeras',
      title: 'Todos cuidan.', em: 'Nadie se pierde.',
      lead: 'Tomas, sueño, pañales, medicinas, vacunas y la agenda de tus hijos en un solo lugar — y todos los que cuidan lo ven todo en tiempo real.',
      free: 'Gratis para empezar · portugués, inglés y español',
      fc1: ['Vacuna en 3 días', 'Calendario de vacunas'], fc2: ['Meta de la semana', '8 de 10 estrellas'],
    },
    feat: {
      eyebrow: 'Todo en un mismo lugar', title: 'Hecho para la rutina real de quien cuida',
      items: [
        ['Registro con un toque', 'Pecho, biberón, sueño, pañal y medicina. Cronómetro de toma por lado y línea del día siempre al día.'],
        ['Medicinas sin doble dosis', 'Horarios, próximas dosis y un aviso cuando alguien de la familia ya dio la medicina.'],
        ['Vacunas y crecimiento', 'Calendario de vacunación y curvas de crecimiento de la OMS para seguir peso y talla.'],
        ['Informe para el pediatra', 'Síntomas, medicinas y ficha de emergencia listos para llevar a la consulta, en PDF.'],
        ['Agenda de la familia', 'Consultas, escuela y compromisos, con quién lleva y quién recoge.'],
        ['Tareas, estrellas e hitos', 'Tablero de tareas para los mayores y un álbum de hitos para cada primera vez.'],
      ],
    },
    inside: {
      eyebrow: 'Por dentro de la app', title: 'Todo lo que la familia necesita saber, a la hora justa',
      topics: [
        ['Aviso de medicinas', 'Cuando llega la hora de la dosis, queda destacada en la pantalla Hoy, con un toque para registrar que se dio.', 'Pantalla Hoy de momikid con las próximas dosis de medicina y el botón Dar'],
        ['Aviso de vacunas', 'El recordatorio aparece a la hora de la dosis del calendario de vacunación. Un toque en “Aplicada” y pasa al historial.', 'Pantalla Hoy con el recordatorio de vacuna y el botón Aplicada'],
        ['Agenda de la familia', 'Consultas, escuela y actividades por semana o por mes, filtradas por niño y por tipo. Lo que viene también aparece en la pantalla de inicio.', 'Pantalla Agenda de momikid con el calendario del mes y filtros por niño'],
        ['Historial completo de los hijos', 'Peso, talla, vacunas, medicinas, síntomas y la línea del día, todo guardado por niño, con las curvas de crecimiento de la OMS.', 'Pantalla Salud con la curva de peso por edad y la lista de mediciones'],
        ['Informe para el pediatra', 'Un resumen del último mes en PDF, con lo que se registró, listo para llevar a la consulta.', 'Pantalla Salud con síntomas y el acceso al informe para el pediatra'],
        ['Estadísticas de la familia', 'Gráficos de lo registrado, de toda la familia o de cada niño, en 7, 30 o 90 días.', 'Pantalla Estadísticas con el resumen de la familia y el marcador entre los niños'],
      ],
    },
    steps: {
      eyebrow: 'Cómo funciona', title: 'Listo en pocos minutos',
      items: [['Descarga y crea la familia', 'Registra a tu hijo o hija y empieza a anotar el día.'], ['Invita a quien cuida', 'Envía un enlace al papá, la abuela o la niñera. Cada uno entra en su idioma.'], ['Registra y acompaña', 'Todo se sincroniza al instante. Nadie tiene que preguntar: está en momikid.']],
    },
    live: {
      eyebrow: 'En tiempo real', title: 'Todos en la misma página',
      lead: 'Quien cuida por la mañana pasa el relevo sin mensajes largos. Lo que uno registra, los demás lo ven al instante.',
      people: [['Mamá', 'Registró la toma', '09:40'], ['Papá', 'Cambió el pañal', '07:35'], ['Abuela', 'Siesta en curso', 'ahora']],
    },
    faq: {
      eyebrow: 'Dudas', title: 'Todo lo que quieres saber antes de empezar',
      items: [
        ['¿Cómo va a ayudar momikid a mi familia en el día a día?', 'Reúne en un solo lugar todo lo que anotas sobre tus hijos: tomas, sueño, pañales, medicinas, vacunas y consultas. Quien cuida lo ve todo al instante, así que nadie tiene que preguntar “¿cuándo fue la última toma?” y la rutina se mantiene tranquila, incluso cuando ayuda mucha gente.'],
        ['¿Cómo evito olvidar una medicina o una vacuna?', 'Las próximas dosis y vacunas aparecen destacadas en la pantalla Hoy, a la hora justa, y las registras con un toque. Toda la familia ve lo que ya se dio, lo que ayuda a evitar dosis repetidas u olvidadas.'],
        ['¿Puedo llevar todo a la consulta del pediatra?', 'Sí. Con un toque, la app genera un resumen del último mes en PDF, con síntomas, medicinas y mediciones. Llegas a la consulta con las respuestas en la mano, sin depender de la memoria.'],
        ['¿Papá, abuela y niñera también pueden usarla?', 'Pueden, y ahí es donde la app brilla. Invitas a cada persona por enlace y eliges qué niños puede ver. Cada uno usa su propio teléfono, Android o iPhone, y todos siguen la misma rutina en tiempo real.'],
        ['¿Tengo que pagar para usarla?', 'No para empezar. La descargas, creas tu familia y ya puedes registrar la rutina de tus hijos sin pagar nada. Si algún día hubiera funciones de pago, te avisaremos antes de cualquier cobro.'],
        ['¿Los datos de mis hijos están protegidos?', 'Solo entra a la familia quien tú invitas, y cada persona ve únicamente a los niños que habilites. No vendemos datos ni usamos datos de salud para publicidad. Los detalles están en la Política de Privacidad.'],
        ['¿momikid reemplaza al pediatra?', 'No, y se pensó para fortalecer esa relación. momikid organiza lo que la familia anota para que converses con más claridad con el pediatra, pero no hace diagnósticos. En caso de emergencia, busca atención.'],
      ],
    },
    humans: {
      eyebrow: 'Gente de verdad', title: 'Detrás de cada registro, una familia',
      lead: 'momikid existe para que sobre más tiempo para lo que importa: estar juntos.',
      momAlt: 'Madre usando momikid en el celular', familyAlt: 'Padres e hijos juntos',
      chips: [['Tomó · lado izquierdo', 'registrado en 2 segundos'], ['Vacuna al día', 'un toque y listo'], ['Papá lo vio al instante', 'sin tener que preguntar']],
    },
    final: { title1: 'Menos preocupación,', title2: 'más tiempo con ellos.', lead: 'Descarga momikid y lleva la rutina de tu familia en el bolsillo.' },
    footer: { privacy: 'Privacidad', terms: 'Términos', deletion: 'Eliminar cuenta', disclaimer: 'momikid registra y organiza lo que la familia anota. No hace diagnósticos ni reemplaza la orientación del pediatra u otro profesional de la salud. En caso de emergencia, busca atención.' },
    phone: {
      today: 'Hoy', live: 'en vivo', child: 'Mel, 5 meses',
      quick: ['Pecho', 'Biberón', 'Sueño', 'Pipí', 'Caca', 'Medicina'],
      events: [['Tomó · lado izquierdo', 'por Mamá · 14 min'], ['Siesta', 'por Abuela · 1h20'], ['Pañal de pipí', 'por Papá'], ['Biberón · 120 ml', 'por Mamá'], ['Vitamina D', 'por Mamá'], ['Pañal de caca', 'por Papá']],
    },
  },
};

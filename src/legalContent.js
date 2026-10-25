/**
 * Textos da Política de Privacidade, dos Termos de Uso e da página de exclusão da conta (pt, en, es).
 *
 * RASCUNHO que descreve o que o app faz hoje e deixa em {{lacunas}} o que só o responsável e o jurídico podem
 * definir (quem é o controlador, encarregado, prazos, país do servidor, foro). Cada {{...}} aparece destacado na
 * página. Antes de publicar, ou de informar este endereço nas lojas, preencha todas as lacunas, revise com um
 * advogado e passe LEGAL_DRAFT para false. Os fatos vieram de momikid/docs (infraestrutura, integrações, LGPD).
 */
export const LEGAL_DRAFT = true;

/** Cada seção: h = título; p = parágrafos; ul = itens. */
export const LEGAL = {
  pt: {
    ui: {
      draft: 'RASCUNHO — pendente de revisão jurídica. Os campos destacados em amarelo ainda precisam ser preenchidos. Não use este texto nas lojas antes disso.',
      version: 'Versão', since: 'Vigente desde', toc: 'Neste documento', other: 'Leia também', home: 'Voltar ao início',
      summary: 'Resumo em linguagem simples',
    },
    privacy: {
      title: 'Política de Privacidade',
      version: '{{versão, ex.: 1.0}}', since: '{{data de início da vigência}}',
      summary: [
        'O momikid é um aplicativo para a família acompanhar, junta, a rotina e a saúde dos filhos. Para funcionar, ele guarda dados de saúde de crianças, que são dados pessoais sensíveis.',
        'Só as pessoas que você convida para a família veem os dados, e cada pessoa vê apenas as crianças que foram liberadas para ela.',
        'Não vendemos dados pessoais e não usamos dados de saúde para publicidade.',
        'Você pode pedir acesso, correção ou exclusão dos dados a qualquer momento.',
      ],
      sections: [
        { h: 'Quem somos', p: [
          'O controlador dos dados tratados pelo aplicativo momikid e por este site é {{razão social da empresa}}, inscrita no CNPJ sob o nº {{CNPJ}}, com sede em {{endereço completo}} (“momikid”, “nós”).',
          'Nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) é {{nome do encarregado}}, contato: {{e-mail de privacidade}}.',
        ] },
        { h: 'Quais dados tratamos', p: ['Tratamos apenas o que é necessário para o app funcionar:'], ul: [
          'Conta: nome, e-mail, senha (guardada de forma protegida, nunca em texto aberto) e foto de perfil, se você enviar. Se você entrar com Google, Apple ou Facebook, recebemos o que o provedor autorizar, em geral nome e e-mail.',
          'Família e cuidadores: nomes, papéis (administrador ou membro), convites e quais crianças cada pessoa pode ver.',
          'Crianças: nome, data de nascimento, foto (opcional), alergias e restrições alimentares, como APLV, e cidade de nascimento (opcional, usada só para calcular signo e ascendente).',
          'Saúde e rotina (dados sensíveis): mamadas, sono, fraldas, remédios e doses, vacinas, sintomas e temperatura, peso, altura e perímetro da cabeça, ficha de emergência e relatórios que você gera.',
          'Agenda, tarefas e marcos: compromissos, tarefas e estrelas, marcos do desenvolvimento e as fotos que você anexar.',
          'Dados técnicos: identificadores do aparelho e do app, idioma, registros de acesso e de erros e, quando você ativar os avisos, o código de notificação do aparelho.',
          'Calendário do aparelho: somente se você permitir. Usamos para enviar a agenda da família ao seu calendário e para importar os eventos que você escolher.',
          'Não acessamos a sua localização.',
        ] },
        { h: 'Para que usamos os dados', ul: [
          'Prestar o serviço: registrar a rotina, sincronizar entre os cuidadores, lembrar doses, vacinas e compromissos e gerar relatórios para o pediatra.',
          'Manter a conta e a família seguras, prevenir fraudes e abusos e dar suporte.',
          'Cumprir obrigações legais e regulatórias.',
          'Não usamos dados de saúde para publicidade, perfilamento comercial ou venda a terceiros.',
        ] },
        { h: 'Bases legais', p: [
          'Tratamos os dados de saúde das crianças com base no consentimento específico e em destaque do pai, da mãe ou do responsável legal que cadastra a criança. Você pode revogar o consentimento a qualquer momento, o que pode limitar ou encerrar o uso do app.',
          'Para os demais dados usamos a execução do contrato de uso (conta e funcionalidades), o cumprimento de obrigação legal e o legítimo interesse (segurança e prevenção a fraudes).',
          '{{REVISÃO JURÍDICA: confirmar a base legal de cada finalidade}}',
        ] },
        { h: 'Crianças e adolescentes', p: [
          'O momikid é feito para adultos: pais, mães, responsáveis legais e pessoas que dividem o cuidado. Apenas um adulto pode criar conta e cadastrar uma criança, e ao fazê-lo declara ser o responsável legal ou ter autorização dele.',
          'O tratamento dos dados das crianças é feito em seu melhor interesse. A tela de tarefas e estrelas pode ser usada por uma criança junto de um adulto, mas a criança não cria conta própria. Se soubermos que uma criança criou conta sozinha ou que alguém cadastrou uma criança sem ser responsável, podemos excluir os dados.',
        ] },
        { h: 'Com quem compartilhamos', ul: [
          'Cuidadores da sua família: somente as pessoas que você convida, de acordo com o papel e as crianças liberadas pelo administrador.',
          'Outras famílias: apenas quando você escolhe enviar uma atividade. A outra família recebe uma cópia dessa atividade.',
          'Profissionais e terceiros que você escolher: o relatório em PDF e a ficha de emergência são gerados e enviados por você.',
          'Calendários: só se você ativar a sincronização com o calendário do aparelho.',
          'Prestadores que nos ajudam a operar o serviço (operadores): hospedagem do servidor e do banco de dados ({{provedor e país do servidor}}); Cloudflare (rede e proteção do domínio); Google (envio de avisos pelo Firebase Cloud Messaging e login com Google); Apple (login com Apple e avisos no iPhone); Meta (login com Facebook); provedor de e-mail para confirmação de conta e recuperação de senha ({{provedor de e-mail}}); Expo (compilação do app e, se adotado, entrega de avisos); Open-Meteo (busca de cidade: recebe apenas o texto digitado e o idioma, nunca o nome ou a data de nascimento da criança).',
          'Autoridades públicas, quando a lei exigir.',
          'Não vendemos dados pessoais.',
        ] },
        { h: 'Transferência internacional', p: [
          'Alguns prestadores podem tratar dados fora do Brasil. Nesses casos adotamos os mecanismos previstos no art. 33 da LGPD. {{mecanismo de transferência e países envolvidos}}',
        ] },
        { h: 'Por quanto tempo guardamos', p: [
          'Guardamos os dados enquanto a sua conta existir. Se você excluir uma criança, sair da família ou excluir a conta, apagamos os dados correspondentes em {{prazo}}. Cópias de segurança são substituídas em até {{prazo das cópias de segurança}}. Podemos manter o mínimo exigido por lei, pelo prazo que ela determinar.',
        ] },
        { h: 'Segurança', p: [
          'Usamos conexão criptografada (HTTPS), separamos os dados por família, de modo que cada família acessa apenas os seus, e fazemos cópias de segurança diárias. Nenhum sistema é totalmente seguro. Em caso de incidente que possa causar risco ou dano relevante, comunicaremos a ANPD e os titulares afetados, conforme o art. 48 da LGPD.',
        ] },
        { h: 'Seus direitos', p: ['Nos termos do art. 18 da LGPD, você pode pedir:'], ul: [
          'confirmação de que tratamos seus dados e acesso a eles;', 'correção de dados incompletos, inexatos ou desatualizados;',
          'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;', 'portabilidade dos dados;',
          'informação sobre com quem compartilhamos os dados;', 'eliminação dos dados tratados com consentimento e revogação do consentimento;',
          'revisão de decisões tomadas apenas por tratamento automatizado, se houver.',
        ], p2: [
          'Para exercer seus direitos, use as opções do app ou escreva para {{e-mail de privacidade}}. Responderemos dentro dos prazos legais. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).',
        ] },
        { h: 'Se você está fora do Brasil', p: [
          'Se você usa o momikid em outro país, a lei local pode lhe dar direitos adicionais, como acesso, retificação, apagamento, limitação, oposição, portabilidade e reclamação à autoridade de proteção de dados do seu país. Escreva para {{e-mail de privacidade}} e responderemos conforme a lei aplicável. {{REVISÃO JURÍDICA: requisitos para os países de lançamento, como representante local e bases legais}}',
        ] },
        { h: 'Este site', p: [
          'Este site de apresentação não usa cookies de publicidade nem ferramentas de rastreamento. Ele guarda apenas a sua escolha de idioma no seu próprio navegador. As fontes de letra são servidas por este mesmo site.',
        ] },
        { h: 'Mudanças nesta política', p: [
          'Podemos atualizar esta política. Quando a mudança for relevante, avisaremos pelo app ou por e-mail e, se necessário, pediremos um novo aceite. A data de vigência no topo mostra a versão atual.',
        ] },
        { h: 'Contato', p: ['Dúvidas sobre privacidade: {{e-mail de privacidade}}. Encarregado (DPO): {{nome do encarregado}}.'] },
      ],
    },
    terms: {
      title: 'Termos de Uso',
      version: '{{versão, ex.: 1.0}}', since: '{{data de início da vigência}}',
      summary: [
        'O momikid ajuda a família a registrar e organizar a rotina e a saúde dos filhos. Ele não é um serviço médico.',
        'Você precisa ser adulto e responsável pela criança que cadastra, ou ter autorização de quem é.',
        'Cuide dos convites: quem entra na família pode ver os dados das crianças liberadas para essa pessoa.',
        'Em caso de emergência, procure atendimento médico.',
      ],
      sections: [
        { h: 'Aceitação', p: [
          'Estes Termos regem o uso do aplicativo momikid e do site momikid.com, oferecidos por {{razão social da empresa}}, CNPJ {{CNPJ}} (“momikid”). Ao criar uma conta ou usar o app, você declara que leu e concorda com estes Termos e com a Política de Privacidade. Se não concordar, não use o serviço.',
        ] },
        { h: 'O que é o momikid', p: [
          'O momikid é um aplicativo compartilhado para a família registrar e consultar a rotina, a saúde e a agenda dos filhos, como mamadas, sono, fraldas, remédios, vacinas, crescimento, compromissos, tarefas e marcos.',
        ] },
        { h: 'Aviso importante sobre saúde', p: [
          'O momikid registra e organiza o que a família anota. Não faz diagnóstico nem substitui a orientação do pediatra ou de outro profissional de saúde. Em caso de emergência, procure atendimento.',
          'Calendários de vacinas, curvas de crescimento e lembretes são guias e podem estar desatualizados ou não se aplicar ao seu caso. Confirme sempre com um profissional de saúde e com o serviço de saúde da sua cidade. As decisões sobre a saúde da criança são suas e dos profissionais que a acompanham.',
        ] },
        { h: 'Quem pode usar', ul: [
          'Você precisa ter 18 anos ou mais, ou capacidade legal para aceitar estes Termos.',
          'Ao cadastrar uma criança, você declara ser pai, mãe ou responsável legal, ou ter autorização de quem seja, e consentir, em nome dela, com o tratamento descrito na Política de Privacidade.',
          'Crianças não criam conta própria.',
        ] },
        { h: 'Sua conta', ul: [
          'Informe dados verdadeiros e mantenha-os atualizados.',
          'Guarde sua senha. Você é responsável pelas atividades feitas na sua conta. Avise-nos se suspeitar de uso indevido.',
          'Cada pessoa deve usar a própria conta. Não compartilhe a senha.',
        ] },
        { h: 'Família, cuidadores e convites', ul: [
          'O administrador da família decide quem convidar, qual papel cada pessoa tem e quais crianças ela pode ver.',
          'Quem é convidado passa a ver e, conforme o papel, registrar e editar dados das crianças liberadas. Convide apenas pessoas de confiança.',
          'Você pode remover um cuidador a qualquer momento. O que ele já registrou continua na família.',
          'Você só pode enviar uma atividade a outra família se tiver o direito de compartilhá-la.',
        ] },
        { h: 'Conteúdo que você registra', p: [
          'Os dados e as fotos que você registra continuam sendo seus. Você nos autoriza a armazená-los, exibi-los às pessoas que você convidou e processá-los para prestar o serviço. Você é responsável pelo conteúdo e declara ter o direito de enviá-lo, inclusive as fotos de crianças e de outras pessoas.',
        ] },
        { h: 'Uso adequado', p: ['Você concorda em não:'], ul: [
          'usar o app de forma ilegal, ou para cadastrar crianças sobre as quais não tenha responsabilidade ou autorização;',
          'tentar acessar dados de outras famílias, burlar a segurança ou sobrecarregar o serviço;',
          'enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros;',
          'copiar, vender ou fazer engenharia reversa do app, salvo quando a lei permitir.',
        ] },
        { h: 'Disponibilidade e mudanças', p: [
          'Trabalhamos para manter o serviço disponível, mas ele pode ter interrupções para manutenção ou por falhas fora do nosso controle. Podemos mudar, adicionar ou retirar funcionalidades. Se uma mudança relevante afetar você, avisaremos com antecedência razoável.',
        ] },
        { h: 'Planos e cobrança', p: [
          'Hoje o momikid pode ser baixado e usado sem cobrança. Se um dia houver recursos pagos, as condições, os preços e a forma de cancelar serão informados de forma clara antes de qualquer cobrança.',
        ] },
        { h: 'Propriedade intelectual', p: [
          'O app, a marca momikid, o logotipo, o design e o código são de {{razão social da empresa}} ou de seus licenciantes. Estes Termos não transferem a você nenhum direito sobre eles, exceto o direito limitado de usar o app conforme estes Termos.',
        ] },
        { h: 'Responsabilidade', p: [
          'Na máxima extensão permitida pela lei, e sem afastar direitos que a lei do consumidor garante, o momikid não se responsabiliza por decisões tomadas com base nas informações registradas, por dados inseridos incorretamente, por falhas de terceiros, como redes, aparelhos e lojas de aplicativos, nem por uso do app em desacordo com estes Termos. {{REVISÃO JURÍDICA: revisar a limitação de responsabilidade}}',
        ] },
        { h: 'Encerramento e exclusão', p: [
          'Você pode parar de usar o app e excluir a criança, sair da família ou excluir a conta quando quiser, e a exclusão dos dados segue a Política de Privacidade. Podemos suspender ou encerrar contas que violem estes Termos ou a lei, avisando quando possível.',
        ] },
        { h: 'Lojas de aplicativos', p: [
          'A Apple e o Google não são partes destes Termos e não têm obrigação de prestar suporte ao momikid. As regras das lojas também se aplicam ao seu uso do app.',
        ] },
        { h: 'Mudanças nos Termos', p: [
          'Podemos atualizar estes Termos. Quando a mudança for relevante, avisaremos pelo app ou por e-mail e, se necessário, pediremos um novo aceite. Continuar usando o app depois da vigência significa que você concorda com a nova versão.',
        ] },
        { h: 'Lei aplicável e foro', p: [
          'Estes Termos seguem as leis do Brasil. Fica eleito o foro de {{comarca}}, sem prejudicar o direito do consumidor de ajuizar ação no foro do seu domicílio, quando a lei assim garantir. Se você usa o app em outro país, direitos que a lei local lhe assegure continuam valendo. {{REVISÃO JURÍDICA: confirmar para os países de lançamento}}',
        ] },
        { h: 'Contato', p: ['Dúvidas sobre estes Termos: {{e-mail de contato}}.'] },
      ],
    },
    deletion: {
      title: 'Excluir a conta',
      version: '{{versão, ex.: 1.0}}', since: '{{data de início da vigência}}',
      summary: [
        'Você pode excluir a sua conta do momikid a qualquer momento, pelo próprio app. A exclusão é imediata e não pode ser desfeita.',
        'As famílias em que você é a única pessoa são excluídas junto, com as crianças, os registros e as fotos.',
        'Nas famílias com outras pessoas, você sai, e o que você registrou continua com a família, sem o seu nome.',
        'Se não conseguir entrar no app, peça a exclusão por e-mail.',
      ],
      sections: [
        { h: 'Como excluir pelo app', ul: [
          'Abra o momikid e entre na sua conta.',
          'Toque em “Excluir minha conta”. O link fica na aba Família, em Meu perfil e, se você ainda não tem família, na tela de criar ou entrar em uma.',
          'Confira o que vai acontecer com cada uma das suas famílias.',
          'Digite EXCLUIR e toque em “Excluir minha conta para sempre”.',
        ] },
        { h: 'O que é apagado', ul: [
          'Sua conta e seu login, seu nome e sua foto de perfil.',
          'Seus amigos, bloqueios e os eventos compartilhados com você.',
          'O registro dos seus aceites dos termos e dos consentimentos.',
          'As famílias em que você é a única pessoa, com as crianças, todos os registros e as fotos.',
          'As preferências guardadas no aparelho. A sessão é encerrada.',
        ] },
        { h: 'O que continua', ul: [
          'Nas famílias com outras pessoas, o que você registrou continua com a família, sem o seu nome, e as fotos que você enviou ficam com ela.',
          'Os eventos que você copiou para o calendário do celular continuam lá. Se quiser, apague-os pelo app de calendário.',
          'Relatórios em PDF e fichas de emergência que você já enviou a outras pessoas ficam com quem os recebeu.',
        ] },
        { h: 'Se você é o único administrador', p: [
          'Se você é o único administrador de uma família que tem outros membros, o app pede que, antes, você torne outro membro administrador ou remova os demais. Assim a família não fica sem ninguém para administrá-la.',
        ] },
        { h: 'Sem acesso ao app', p: [
          'Se você não consegue entrar no app, escreva para {{e-mail de privacidade}} a partir do e-mail da sua conta, com o assunto “Excluir minha conta”. Podemos pedir uma confirmação para ter certeza de que o pedido é seu. A exclusão segue as regras desta página e é feita em até {{prazo para atender o pedido}}.',
        ] },
        { h: 'Se você entrou com Google, Apple ou Facebook', p: [
          'Excluir a conta apaga os seus dados no momikid. Você também pode tirar o acesso do momikid na conta do provedor:',
        ], ul: [
          'Facebook: Configurações e privacidade > Configurações > Apps e sites > momikid > Remover.',
          'Google: em myaccount.google.com/connections, escolha momikid e remova o acesso.',
          'Apple: no iPhone, Ajustes > [seu nome] > Iniciar sessão com a Apple > momikid > Parar de usar.',
        ], p2: [
          'Remover o acesso só no provedor não apaga os dados no momikid. Para isso, exclua a conta pelo app ou peça por e-mail.',
        ] },
        { h: 'Cópias de segurança', p: [
          'Fazemos cópias de segurança diárias do servidor. Os dados excluídos saem delas quando as cópias são substituídas, em até {{prazo das cópias de segurança}}. Podemos manter o mínimo exigido por lei, pelo prazo que ela determinar.',
        ] },
        { h: 'Contato', p: ['Dúvidas sobre a exclusão: {{e-mail de privacidade}}.'] },
      ],
    },
  },

  en: {
    ui: {
      draft: 'DRAFT — pending legal review. Fields highlighted in yellow still need to be filled in. Do not use this text in the app stores before that.',
      version: 'Version', since: 'Effective since', toc: 'In this document', other: 'Also read', home: 'Back to home',
      summary: 'Plain-language summary',
    },
    privacy: {
      title: 'Privacy Policy',
      version: '{{version, e.g. 1.0}}', since: '{{effective date}}',
      summary: [
        'momikid is an app for families to follow their children’s routine and health together. To work, it stores children’s health data, which is sensitive personal data.',
        'Only the people you invite to the family can see the data, and each person sees only the children made available to them.',
        'We do not sell personal data and we do not use health data for advertising.',
        'You can ask for access, correction or deletion of your data at any time.',
      ],
      sections: [
        { h: 'Who we are', p: [
          'The controller of the data processed by the momikid app and this website is {{company legal name}}, registered under tax ID (CNPJ) {{CNPJ}}, headquartered at {{full address}} (“momikid”, “we”).',
          'Our Data Protection Officer (DPO) is {{DPO name}}, contact: {{privacy e-mail}}.',
        ] },
        { h: 'What data we process', p: ['We process only what the app needs to work:'], ul: [
          'Account: name, e-mail, password (stored in protected form, never in plain text) and a profile photo, if you upload one. If you sign in with Google, Apple or Facebook, we receive what the provider authorizes, usually name and e-mail.',
          'Family and caregivers: names, roles (administrator or member), invitations and which children each person can see.',
          'Children: name, date of birth, photo (optional), allergies and dietary restrictions, such as cow’s milk protein allergy, and city of birth (optional, used only to calculate sun sign and ascendant).',
          'Health and routine (sensitive data): feedings, sleep, diapers, medicines and doses, vaccines, symptoms and temperature, weight, height and head circumference, emergency card and the reports you generate.',
          'Schedule, chores and milestones: appointments, chores and stars, developmental milestones and the photos you attach.',
          'Technical data: device and app identifiers, language, access and error logs and, when you turn on alerts, the device notification token.',
          'Device calendar: only if you allow it. We use it to send the family schedule to your calendar and to import the events you choose.',
          'We do not access your location.',
        ] },
        { h: 'What we use the data for', ul: [
          'To provide the service: log the routine, sync between caregivers, remind about doses, vaccines and appointments, and generate reports for the pediatrician.',
          'To keep accounts and families secure, prevent fraud and abuse, and provide support.',
          'To comply with legal and regulatory obligations.',
          'We do not use health data for advertising, commercial profiling or sale to third parties.',
        ] },
        { h: 'Legal bases', p: [
          'We process children’s health data based on the specific, prominent consent of the parent or legal guardian who registers the child. You can withdraw consent at any time, which may limit or end your use of the app.',
          'For other data we rely on performance of the contract of use (account and features), compliance with legal obligations and legitimate interests (security and fraud prevention).',
          '{{LEGAL REVIEW: confirm the legal basis for each purpose}}',
        ] },
        { h: 'Children and teenagers', p: [
          'momikid is made for adults: parents, legal guardians and people who share care. Only an adult may create an account and register a child, and by doing so declares to be the legal guardian or to have the guardian’s authorization.',
          'Children’s data is processed in their best interest. The chores and stars screen may be used by a child together with an adult, but children do not create their own accounts. If we learn that a child created an account alone, or that someone registered a child without being their guardian, we may delete the data.',
        ] },
        { h: 'Who we share it with', ul: [
          'Caregivers in your family: only the people you invite, according to the role and the children made available by the administrator.',
          'Other families: only when you choose to send an activity. The other family receives a copy of that activity.',
          'Professionals and third parties you choose: the PDF report and the emergency card are generated and sent by you.',
          'Calendars: only if you turn on sync with the device calendar.',
          'Providers that help us run the service (processors): hosting of the server and database ({{hosting provider and country}}); Cloudflare (network and domain protection); Google (alerts through Firebase Cloud Messaging and Google sign-in); Apple (Sign in with Apple and alerts on iPhone); Meta (Facebook sign-in); e-mail provider for account confirmation and password recovery ({{e-mail provider}}); Expo (app builds and, if adopted, alert delivery); Open-Meteo (city search: receives only the text typed and the language, never the child’s name or date of birth).',
          'Public authorities, when required by law.',
          'We do not sell personal data.',
        ] },
        { h: 'International transfers', p: [
          'Some providers may process data outside Brazil. In those cases we use the mechanisms provided in Article 33 of the Brazilian data protection law (LGPD). {{transfer mechanism and countries involved}}',
        ] },
        { h: 'How long we keep it', p: [
          'We keep the data while your account exists. If you delete a child, leave the family or delete your account, we delete the corresponding data within {{period}}. Backups are overwritten within {{backup period}}. We may keep the minimum required by law for the period it sets.',
        ] },
        { h: 'Security', p: [
          'We use encrypted connections (HTTPS), separate data by family so each family can access only its own, and make daily backups. No system is completely secure. In the event of an incident that may cause relevant risk or harm, we will notify the Brazilian data protection authority (ANPD) and affected individuals, as required by Article 48 of the LGPD.',
        ] },
        { h: 'Your rights', p: ['Under Article 18 of the LGPD, you may request:'], ul: [
          'confirmation that we process your data, and access to it;', 'correction of incomplete, inaccurate or outdated data;',
          'anonymization, blocking or deletion of unnecessary data or data processed in breach of the law;', 'data portability;',
          'information about who we share data with;', 'deletion of data processed with consent, and withdrawal of consent;',
          'review of decisions made solely through automated processing, if any.',
        ], p2: [
          'To exercise your rights, use the options in the app or write to {{privacy e-mail}}. We will reply within the legal deadlines. You may also complain to the Brazilian data protection authority (ANPD).',
        ] },
        { h: 'If you are outside Brazil', p: [
          'If you use momikid in another country, local law may give you additional rights, such as access, rectification, erasure, restriction, objection, portability and the right to complain to your country’s data protection authority. Write to {{privacy e-mail}} and we will respond as required by the applicable law. {{LEGAL REVIEW: requirements for launch countries, such as local representative and legal bases}}',
        ] },
        { h: 'This website', p: [
          'This presentation website does not use advertising cookies or tracking tools. It stores only your language choice in your own browser. Fonts are served by this same website.',
        ] },
        { h: 'Changes to this policy', p: [
          'We may update this policy. When a change is relevant, we will let you know in the app or by e-mail and, if needed, ask for new consent. The effective date at the top shows the current version.',
        ] },
        { h: 'Contact', p: ['Privacy questions: {{privacy e-mail}}. DPO: {{DPO name}}.'] },
      ],
    },
    terms: {
      title: 'Terms of Use',
      version: '{{version, e.g. 1.0}}', since: '{{effective date}}',
      summary: [
        'momikid helps families log and organize their children’s routine and health. It is not a medical service.',
        'You must be an adult and responsible for the child you register, or have authorization from someone who is.',
        'Be careful with invitations: whoever joins the family can see the data of the children made available to them.',
        'In an emergency, seek medical care.',
      ],
      sections: [
        { h: 'Acceptance', p: [
          'These Terms govern the use of the momikid app and the momikid.com website, offered by {{company legal name}}, tax ID (CNPJ) {{CNPJ}} (“momikid”). By creating an account or using the app, you declare that you have read and agree to these Terms and the Privacy Policy. If you do not agree, do not use the service.',
        ] },
        { h: 'What momikid is', p: [
          'momikid is a shared app for families to log and review their children’s routine, health and schedule, such as feedings, sleep, diapers, medicines, vaccines, growth, appointments, chores and milestones.',
        ] },
        { h: 'Important health notice', p: [
          'momikid records and organizes what the family logs. It does not diagnose and does not replace the advice of a pediatrician or other health professional. In an emergency, seek care.',
          'Vaccination calendars, growth curves and reminders are guides and may be out of date or not apply to your case. Always confirm with a health professional and your local health service. Decisions about your child’s health are yours and those of the professionals who care for them.',
        ] },
        { h: 'Who can use it', ul: [
          'You must be 18 or older, or have the legal capacity to accept these Terms.',
          'When you register a child, you declare that you are the parent or legal guardian, or have authorization from one, and you consent, on the child’s behalf, to the processing described in the Privacy Policy.',
          'Children do not create their own accounts.',
        ] },
        { h: 'Your account', ul: [
          'Provide accurate information and keep it up to date.',
          'Keep your password safe. You are responsible for activity on your account. Tell us if you suspect misuse.',
          'Each person must use their own account. Do not share your password.',
        ] },
        { h: 'Family, caregivers and invitations', ul: [
          'The family administrator decides who to invite, which role each person has and which children they can see.',
          'People who are invited can see and, depending on their role, log and edit data of the children made available to them. Invite only people you trust.',
          'You can remove a caregiver at any time. What they have already logged stays in the family.',
          'You may send an activity to another family only if you have the right to share it.',
        ] },
        { h: 'Content you log', p: [
          'The data and photos you log remain yours. You authorize us to store them, show them to the people you have invited and process them to provide the service. You are responsible for the content and declare that you have the right to upload it, including photos of children and other people.',
        ] },
        { h: 'Acceptable use', p: ['You agree not to:'], ul: [
          'use the app unlawfully, or to register children you are not responsible for or authorized to register;',
          'try to access other families’ data, bypass security or overload the service;',
          'upload content that is unlawful, offensive or violates third-party rights;',
          'copy, sell or reverse engineer the app, except where the law allows it.',
        ] },
        { h: 'Availability and changes', p: [
          'We work to keep the service available, but it may be interrupted for maintenance or by failures beyond our control. We may change, add or remove features. If a relevant change affects you, we will give reasonable notice.',
        ] },
        { h: 'Plans and billing', p: [
          'Today momikid can be downloaded and used free of charge. If paid features are ever introduced, the conditions, prices and how to cancel will be clearly disclosed before any charge.',
        ] },
        { h: 'Intellectual property', p: [
          'The app, the momikid brand, the logo, the design and the code belong to {{company legal name}} or its licensors. These Terms do not transfer any right in them to you, except the limited right to use the app under these Terms.',
        ] },
        { h: 'Liability', p: [
          'To the fullest extent permitted by law, and without removing rights guaranteed by consumer law, momikid is not liable for decisions made based on the information logged, for incorrectly entered data, for failures of third parties such as networks, devices and app stores, or for use of the app in breach of these Terms. {{LEGAL REVIEW: review the limitation of liability}}',
        ] },
        { h: 'Termination and deletion', p: [
          'You may stop using the app and delete a child, leave the family or delete your account whenever you want, and data deletion follows the Privacy Policy. We may suspend or terminate accounts that breach these Terms or the law, giving notice where possible.',
        ] },
        { h: 'App stores', p: [
          'Apple and Google are not parties to these Terms and have no obligation to provide support for momikid. The stores’ rules also apply to your use of the app.',
        ] },
        { h: 'Changes to the Terms', p: [
          'We may update these Terms. When a change is relevant, we will let you know in the app or by e-mail and, if needed, ask for new acceptance. Continuing to use the app after the effective date means you agree to the new version.',
        ] },
        { h: 'Governing law and venue', p: [
          'These Terms are governed by the laws of Brazil. The courts of {{judicial district}} are chosen, without prejudice to the consumer’s right to sue in the courts of their own domicile, where the law so guarantees. If you use the app in another country, rights that local law gives you remain in force. {{LEGAL REVIEW: confirm for launch countries}}',
        ] },
        { h: 'Contact', p: ['Questions about these Terms: {{contact e-mail}}.'] },
      ],
    },
    deletion: {
      title: 'Delete your account',
      version: '{{version, e.g. 1.0}}', since: '{{effective date}}',
      summary: [
        'You can delete your momikid account at any time, right in the app. Deletion is immediate and cannot be undone.',
        'Families where you are the only person are deleted too, along with the children, records and photos.',
        'In families with other people, you leave, and what you recorded stays with the family, without your name.',
        'If you cannot sign in to the app, request deletion by e-mail.',
      ],
      sections: [
        { h: 'How to delete it in the app', ul: [
          'Open momikid and sign in to your account.',
          'Tap “Delete my account”. The link is on the Family tab, in My profile and, if you do not have a family yet, on the screen to create or join one.',
          'Check what will happen to each of your families.',
          'Type DELETE and tap “Delete my account forever”.',
        ] },
        { h: 'What gets deleted', ul: [
          'Your account and sign-in, your name and your profile photo.',
          'Your friends, blocks and the events shared with you.',
          'The record of your acceptance of the terms and of your consents.',
          'Families where you are the only person, along with the children, all records and the photos.',
          'The preferences saved on the device. You are signed out.',
        ] },
        { h: 'What stays', ul: [
          'In families with other people, what you recorded stays with the family, without your name, and the photos you uploaded stay with it.',
          'Events you copied to your phone’s calendar stay there. If you want, delete them in the calendar app.',
          'PDF reports and emergency cards you already sent to other people stay with whoever received them.',
        ] },
        { h: 'If you are the only admin', p: [
          'If you are the only admin of a family that has other members, the app asks you to first make another member an admin or remove the other members. That way the family is not left without anyone to manage it.',
        ] },
        { h: 'Without access to the app', p: [
          'If you cannot sign in to the app, write to {{privacy e-mail}} from your account’s e-mail address, with the subject “Delete my account”. We may ask for confirmation to make sure the request is yours. Deletion follows the rules on this page and is done within {{period to handle the request}}.',
        ] },
        { h: 'If you signed in with Google, Apple or Facebook', p: [
          'Deleting your account deletes your data in momikid. You can also remove momikid’s access in your provider account:',
        ], ul: [
          'Facebook: Settings & privacy > Settings > Apps and websites > momikid > Remove.',
          'Google: at myaccount.google.com/connections, choose momikid and remove access.',
          'Apple: on your iPhone, Settings > [your name] > Sign in with Apple > momikid > Stop Using.',
        ], p2: [
          'Removing access only at the provider does not delete your data in momikid. To do that, delete your account in the app or request it by e-mail.',
        ] },
        { h: 'Backups', p: [
          'We make daily backups of the server. Deleted data leaves them as the backups are overwritten, within {{backup period}}. We may keep the minimum required by law for the period it sets.',
        ] },
        { h: 'Contact', p: ['Questions about deletion: {{privacy e-mail}}.'] },
      ],
    },
  },

  es: {
    ui: {
      draft: 'BORRADOR — pendiente de revisión jurídica. Los campos resaltados en amarillo aún deben completarse. No uses este texto en las tiendas de aplicaciones antes de eso.',
      version: 'Versión', since: 'Vigente desde', toc: 'En este documento', other: 'Lee también', home: 'Volver al inicio',
      summary: 'Resumen en lenguaje sencillo',
    },
    privacy: {
      title: 'Política de Privacidad',
      version: '{{versión, p. ej. 1.0}}', since: '{{fecha de inicio de vigencia}}',
      summary: [
        'momikid es una aplicación para que la familia acompañe junta la rutina y la salud de los hijos. Para funcionar, guarda datos de salud de niños, que son datos personales sensibles.',
        'Solo las personas que invitas a la familia ven los datos, y cada una ve únicamente a los niños que se le habilitaron.',
        'No vendemos datos personales ni usamos datos de salud para publicidad.',
        'Puedes pedir acceso, corrección o eliminación de tus datos en cualquier momento.',
      ],
      sections: [
        { h: 'Quiénes somos', p: [
          'El responsable de los datos tratados por la aplicación momikid y por este sitio es {{razón social de la empresa}}, inscrita con el CNPJ n.º {{CNPJ}}, con sede en {{dirección completa}} (“momikid”, “nosotros”).',
          'Nuestro Encargado de Protección de Datos (DPO) es {{nombre del encargado}}, contacto: {{correo de privacidad}}.',
        ] },
        { h: 'Qué datos tratamos', p: ['Tratamos solo lo necesario para que la app funcione:'], ul: [
          'Cuenta: nombre, correo, contraseña (guardada de forma protegida, nunca en texto abierto) y foto de perfil, si la subes. Si entras con Google, Apple o Facebook, recibimos lo que el proveedor autorice, en general nombre y correo.',
          'Familia y cuidadores: nombres, roles (administrador o miembro), invitaciones y qué niños puede ver cada persona.',
          'Niños: nombre, fecha de nacimiento, foto (opcional), alergias y restricciones alimentarias, como la alergia a la proteína de la leche de vaca, y ciudad de nacimiento (opcional, usada solo para calcular signo y ascendente).',
          'Salud y rutina (datos sensibles): tomas, sueño, pañales, medicinas y dosis, vacunas, síntomas y temperatura, peso, talla y perímetro de la cabeza, ficha de emergencia e informes que generes.',
          'Agenda, tareas e hitos: compromisos, tareas y estrellas, hitos del desarrollo y las fotos que adjuntes.',
          'Datos técnicos: identificadores del dispositivo y de la app, idioma, registros de acceso y de errores y, cuando actives los avisos, el código de notificación del dispositivo.',
          'Calendario del dispositivo: solo si lo permites. Lo usamos para enviar la agenda de la familia a tu calendario y para importar los eventos que elijas.',
          'No accedemos a tu ubicación.',
        ] },
        { h: 'Para qué usamos los datos', ul: [
          'Prestar el servicio: registrar la rutina, sincronizar entre cuidadores, recordar dosis, vacunas y compromisos y generar informes para el pediatra.',
          'Mantener seguras las cuentas y las familias, prevenir fraudes y abusos y dar soporte.',
          'Cumplir obligaciones legales y regulatorias.',
          'No usamos datos de salud para publicidad, perfilado comercial ni venta a terceros.',
        ] },
        { h: 'Bases legales', p: [
          'Tratamos los datos de salud de los niños con base en el consentimiento específico y destacado del padre, la madre o el representante legal que registra al niño. Puedes revocar el consentimiento en cualquier momento, lo que puede limitar o terminar el uso de la app.',
          'Para los demás datos usamos la ejecución del contrato de uso (cuenta y funciones), el cumplimiento de obligaciones legales y el interés legítimo (seguridad y prevención de fraudes).',
          '{{REVISIÓN JURÍDICA: confirmar la base legal de cada finalidad}}',
        ] },
        { h: 'Niños y adolescentes', p: [
          'momikid está hecho para adultos: padres, madres, representantes legales y personas que comparten el cuidado. Solo un adulto puede crear una cuenta y registrar a un niño, y al hacerlo declara ser el representante legal o tener su autorización.',
          'El tratamiento de los datos de los niños se hace en su mejor interés. La pantalla de tareas y estrellas puede ser usada por un niño junto con un adulto, pero el niño no crea cuenta propia. Si sabemos que un niño creó una cuenta solo, o que alguien registró a un niño sin ser su representante, podemos eliminar los datos.',
        ] },
        { h: 'Con quién los compartimos', ul: [
          'Cuidadores de tu familia: solo las personas que invitas, según el rol y los niños habilitados por el administrador.',
          'Otras familias: solo cuando eliges enviar una actividad. La otra familia recibe una copia de esa actividad.',
          'Profesionales y terceros que elijas: el informe en PDF y la ficha de emergencia los generas y envías tú.',
          'Calendarios: solo si activas la sincronización con el calendario del dispositivo.',
          'Proveedores que nos ayudan a operar el servicio (encargados del tratamiento): alojamiento del servidor y de la base de datos ({{proveedor y país del servidor}}); Cloudflare (red y protección del dominio); Google (avisos mediante Firebase Cloud Messaging e inicio de sesión con Google); Apple (inicio de sesión con Apple y avisos en iPhone); Meta (inicio de sesión con Facebook); proveedor de correo para la confirmación de cuenta y la recuperación de contraseña ({{proveedor de correo}}); Expo (compilación de la app y, si se adopta, entrega de avisos); Open-Meteo (búsqueda de ciudad: recibe solo el texto escrito y el idioma, nunca el nombre ni la fecha de nacimiento del niño).',
          'Autoridades públicas, cuando la ley lo exija.',
          'No vendemos datos personales.',
        ] },
        { h: 'Transferencias internacionales', p: [
          'Algunos proveedores pueden tratar datos fuera de Brasil. En esos casos usamos los mecanismos previstos en el art. 33 de la ley brasileña de protección de datos (LGPD). {{mecanismo de transferencia y países involucrados}}',
        ] },
        { h: 'Por cuánto tiempo los guardamos', p: [
          'Guardamos los datos mientras tu cuenta exista. Si eliminas a un niño, sales de la familia o eliminas la cuenta, borramos los datos correspondientes en {{plazo}}. Las copias de seguridad se sustituyen en un máximo de {{plazo de las copias de seguridad}}. Podemos conservar lo mínimo exigido por ley, durante el plazo que ella determine.',
        ] },
        { h: 'Seguridad', p: [
          'Usamos conexión cifrada (HTTPS), separamos los datos por familia, de modo que cada familia accede solo a los suyos, y hacemos copias de seguridad diarias. Ningún sistema es totalmente seguro. En caso de un incidente que pueda causar riesgo o daño relevante, comunicaremos a la autoridad brasileña (ANPD) y a los titulares afectados, según el art. 48 de la LGPD.',
        ] },
        { h: 'Tus derechos', p: ['Conforme al art. 18 de la LGPD, puedes solicitar:'], ul: [
          'confirmación de que tratamos tus datos y acceso a ellos;', 'corrección de datos incompletos, inexactos o desactualizados;',
          'anonimización, bloqueo o eliminación de datos innecesarios o tratados en contra de la ley;', 'portabilidad de los datos;',
          'información sobre con quién compartimos los datos;', 'eliminación de los datos tratados con consentimiento y revocación del consentimiento;',
          'revisión de decisiones tomadas únicamente mediante tratamiento automatizado, si las hubiera.',
        ], p2: [
          'Para ejercer tus derechos, usa las opciones de la app o escribe a {{correo de privacidad}}. Responderemos dentro de los plazos legales. También puedes presentar una reclamación ante la autoridad brasileña de protección de datos (ANPD).',
        ] },
        { h: 'Si estás fuera de Brasil', p: [
          'Si usas momikid en otro país, la ley local puede darte derechos adicionales, como acceso, rectificación, supresión, limitación, oposición, portabilidad y reclamación ante la autoridad de protección de datos de tu país. Escribe a {{correo de privacidad}} y responderemos según la ley aplicable. {{REVISIÓN JURÍDICA: requisitos para los países de lanzamiento, como representante local y bases legales}}',
        ] },
        { h: 'Este sitio', p: [
          'Este sitio de presentación no usa cookies de publicidad ni herramientas de rastreo. Solo guarda tu elección de idioma en tu propio navegador. Las fuentes de letra las sirve este mismo sitio.',
        ] },
        { h: 'Cambios en esta política', p: [
          'Podemos actualizar esta política. Cuando el cambio sea relevante, avisaremos en la app o por correo y, si hace falta, pediremos una nueva aceptación. La fecha de vigencia al inicio muestra la versión actual.',
        ] },
        { h: 'Contacto', p: ['Dudas sobre privacidad: {{correo de privacidad}}. Encargado (DPO): {{nombre del encargado}}.'] },
      ],
    },
    terms: {
      title: 'Términos de Uso',
      version: '{{versión, p. ej. 1.0}}', since: '{{fecha de inicio de vigencia}}',
      summary: [
        'momikid ayuda a la familia a registrar y organizar la rutina y la salud de los hijos. No es un servicio médico.',
        'Debes ser adulto y responsable del niño que registras, o tener autorización de quien lo sea.',
        'Cuida las invitaciones: quien entra a la familia puede ver los datos de los niños habilitados para esa persona.',
        'En caso de emergencia, busca atención médica.',
      ],
      sections: [
        { h: 'Aceptación', p: [
          'Estos Términos rigen el uso de la aplicación momikid y del sitio momikid.com, ofrecidos por {{razón social de la empresa}}, CNPJ {{CNPJ}} (“momikid”). Al crear una cuenta o usar la app, declaras que leíste y aceptas estos Términos y la Política de Privacidad. Si no estás de acuerdo, no uses el servicio.',
        ] },
        { h: 'Qué es momikid', p: [
          'momikid es una aplicación compartida para que la familia registre y consulte la rutina, la salud y la agenda de los hijos, como tomas, sueño, pañales, medicinas, vacunas, crecimiento, compromisos, tareas e hitos.',
        ] },
        { h: 'Aviso importante sobre salud', p: [
          'momikid registra y organiza lo que la familia anota. No hace diagnósticos ni reemplaza la orientación del pediatra u otro profesional de la salud. En caso de emergencia, busca atención.',
          'Los calendarios de vacunación, las curvas de crecimiento y los recordatorios son guías y pueden estar desactualizados o no aplicarse a tu caso. Confirma siempre con un profesional de la salud y con el servicio de salud de tu ciudad. Las decisiones sobre la salud del niño son tuyas y de los profesionales que lo atienden.',
        ] },
        { h: 'Quién puede usarlo', ul: [
          'Debes tener 18 años o más, o capacidad legal para aceptar estos Términos.',
          'Al registrar a un niño, declaras ser su padre, madre o representante legal, o tener autorización de quien lo sea, y consientes, en su nombre, el tratamiento descrito en la Política de Privacidad.',
          'Los niños no crean cuenta propia.',
        ] },
        { h: 'Tu cuenta', ul: [
          'Da datos verdaderos y mantenlos actualizados.',
          'Guarda tu contraseña. Eres responsable de la actividad de tu cuenta. Avísanos si sospechas un uso indebido.',
          'Cada persona debe usar su propia cuenta. No compartas la contraseña.',
        ] },
        { h: 'Familia, cuidadores e invitaciones', ul: [
          'El administrador de la familia decide a quién invitar, qué rol tiene cada persona y qué niños puede ver.',
          'Quien es invitado pasa a ver y, según su rol, registrar y editar datos de los niños habilitados. Invita solo a personas de confianza.',
          'Puedes quitar a un cuidador en cualquier momento. Lo que ya registró permanece en la familia.',
          'Solo puedes enviar una actividad a otra familia si tienes derecho a compartirla.',
        ] },
        { h: 'Contenido que registras', p: [
          'Los datos y las fotos que registras siguen siendo tuyos. Nos autorizas a almacenarlos, mostrarlos a las personas que invitaste y procesarlos para prestar el servicio. Eres responsable del contenido y declaras tener derecho a subirlo, incluidas las fotos de niños y de otras personas.',
        ] },
        { h: 'Uso adecuado', p: ['Te comprometes a no:'], ul: [
          'usar la app de forma ilegal, ni para registrar niños de los que no seas responsable o no tengas autorización;',
          'intentar acceder a datos de otras familias, eludir la seguridad o sobrecargar el servicio;',
          'subir contenido ilegal, ofensivo o que vulnere derechos de terceros;',
          'copiar, vender o aplicar ingeniería inversa a la app, salvo cuando la ley lo permita.',
        ] },
        { h: 'Disponibilidad y cambios', p: [
          'Trabajamos para mantener el servicio disponible, pero puede tener interrupciones por mantenimiento o por fallos fuera de nuestro control. Podemos cambiar, agregar o retirar funciones. Si un cambio relevante te afecta, avisaremos con antelación razonable.',
        ] },
        { h: 'Planes y cobros', p: [
          'Hoy momikid puede descargarse y usarse sin costo. Si algún día hubiera funciones de pago, las condiciones, los precios y la forma de cancelar se informarán con claridad antes de cualquier cobro.',
        ] },
        { h: 'Propiedad intelectual', p: [
          'La app, la marca momikid, el logotipo, el diseño y el código pertenecen a {{razón social de la empresa}} o a sus licenciantes. Estos Términos no te transfieren ningún derecho sobre ellos, salvo el derecho limitado de usar la app conforme a estos Términos.',
        ] },
        { h: 'Responsabilidad', p: [
          'En la máxima medida permitida por la ley, y sin afectar los derechos que garantiza la ley del consumidor, momikid no se responsabiliza por decisiones tomadas con base en la información registrada, por datos ingresados de forma incorrecta, por fallos de terceros, como redes, dispositivos y tiendas de aplicaciones, ni por el uso de la app en contra de estos Términos. {{REVISIÓN JURÍDICA: revisar la limitación de responsabilidad}}',
        ] },
        { h: 'Terminación y eliminación', p: [
          'Puedes dejar de usar la app y eliminar a un niño, salir de la familia o eliminar la cuenta cuando quieras, y la eliminación de los datos sigue la Política de Privacidad. Podemos suspender o cerrar cuentas que infrinjan estos Términos o la ley, avisando cuando sea posible.',
        ] },
        { h: 'Tiendas de aplicaciones', p: [
          'Apple y Google no son parte de estos Términos y no tienen obligación de dar soporte a momikid. Las reglas de las tiendas también se aplican a tu uso de la app.',
        ] },
        { h: 'Cambios en los Términos', p: [
          'Podemos actualizar estos Términos. Cuando el cambio sea relevante, avisaremos en la app o por correo y, si hace falta, pediremos una nueva aceptación. Seguir usando la app después de la vigencia significa que aceptas la nueva versión.',
        ] },
        { h: 'Ley aplicable y fuero', p: [
          'Estos Términos se rigen por las leyes de Brasil. Se elige el fuero de {{circunscripción judicial}}, sin perjuicio del derecho del consumidor de demandar ante los tribunales de su domicilio, cuando la ley así lo garantice. Si usas la app en otro país, los derechos que te reconozca la ley local siguen vigentes. {{REVISIÓN JURÍDICA: confirmar para los países de lanzamiento}}',
        ] },
        { h: 'Contacto', p: ['Dudas sobre estos Términos: {{correo de contacto}}.'] },
      ],
    },
    deletion: {
      title: 'Eliminar la cuenta',
      version: '{{versión, p. ej. 1.0}}', since: '{{fecha de inicio de vigencia}}',
      summary: [
        'Puedes eliminar tu cuenta de momikid en cualquier momento, desde la propia app. La eliminación es inmediata y no se puede deshacer.',
        'Las familias en las que eres la única persona se eliminan también, con los niños, los registros y las fotos.',
        'En las familias con otras personas, sales, y lo que registraste se queda en la familia, sin tu nombre.',
        'Si no puedes entrar en la app, pide la eliminación por correo.',
      ],
      sections: [
        { h: 'Cómo eliminarla desde la app', ul: [
          'Abre momikid e inicia sesión en tu cuenta.',
          'Toca “Eliminar mi cuenta”. El enlace está en la pestaña Familia, en Mi perfil y, si aún no tienes familia, en la pantalla para crear una o unirte a una.',
          'Revisa qué va a pasar con cada una de tus familias.',
          'Escribe ELIMINAR y toca “Eliminar mi cuenta para siempre”.',
        ] },
        { h: 'Qué se elimina', ul: [
          'Tu cuenta y tu acceso, tu nombre y tu foto de perfil.',
          'Tus amigos, tus bloqueos y los eventos compartidos contigo.',
          'El registro de tu aceptación de los términos y de tus consentimientos.',
          'Las familias en las que eres la única persona, con los niños, todos los registros y las fotos.',
          'Las preferencias guardadas en el dispositivo. Se cierra la sesión.',
        ] },
        { h: 'Qué se conserva', ul: [
          'En las familias con otras personas, lo que registraste se queda en la familia, sin tu nombre, y las fotos que subiste se quedan con ella.',
          'Los eventos que copiaste al calendario del teléfono siguen ahí. Si quieres, bórralos desde la app de calendario.',
          'Los informes en PDF y las fichas de emergencia que ya enviaste a otras personas se quedan con quien los recibió.',
        ] },
        { h: 'Si eres el único administrador', p: [
          'Si eres el único administrador de una familia que tiene otros miembros, la app te pide que antes hagas administrador a otro miembro o quites a los demás. Así la familia no se queda sin nadie que la administre.',
        ] },
        { h: 'Sin acceso a la app', p: [
          'Si no puedes entrar en la app, escribe a {{correo de privacidad}} desde el correo de tu cuenta, con el asunto “Eliminar mi cuenta”. Podemos pedirte una confirmación para asegurarnos de que la solicitud es tuya. La eliminación sigue las reglas de esta página y se hace en un plazo de {{plazo para atender la solicitud}}.',
        ] },
        { h: 'Si entraste con Google, Apple o Facebook', p: [
          'Eliminar la cuenta borra tus datos en momikid. También puedes quitarle el acceso a momikid en tu cuenta del proveedor:',
        ], ul: [
          'Facebook: Configuración y privacidad > Configuración > Apps y sitios web > momikid > Eliminar.',
          'Google: en myaccount.google.com/connections, elige momikid y quita el acceso.',
          'Apple: en el iPhone, Ajustes > [tu nombre] > Iniciar sesión con Apple > momikid > Dejar de usar.',
        ], p2: [
          'Quitar el acceso solo en el proveedor no borra tus datos en momikid. Para eso, elimina la cuenta desde la app o pídelo por correo.',
        ] },
        { h: 'Copias de seguridad', p: [
          'Hacemos copias de seguridad diarias del servidor. Los datos eliminados salen de ellas a medida que las copias se sustituyen, en un máximo de {{plazo de las copias de seguridad}}. Podemos conservar lo mínimo exigido por ley, durante el plazo que ella determine.',
        ] },
        { h: 'Contacto', p: ['Dudas sobre la eliminación: {{correo de privacidad}}.'] },
      ],
    },
  },
};

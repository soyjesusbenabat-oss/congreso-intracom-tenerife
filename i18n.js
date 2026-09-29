/**
 * Español, inglés y portugués para la web de INTRACOM 2026.
 *
 * La web está escrita en español. Este archivo traduce sus textos sin tocar el diseño: busca cada
 * frase y la sustituye por la del idioma elegido. El selector queda arriba, junto al menú, y la
 * elección se recuerda en el navegador.
 *
 * Los nombres de personas, universidades y editoriales no se traducen: no aparecen aquí.
 * Para corregir una traducción basta con editar la frase correspondiente.
 */
(function () {
  "use strict";

  var DICT = {
    en: {
      // Menú y portada
      "Mesas temáticas": "Thematic panels",
      "Participa": "Take part",
      "Inscripción": "Registration",
      "Publicaciones": "Publications",
      "Sede": "Venue",
      "Organización": "Organisation",
      "Reserva tu plaza": "Book your place",
      "VI Edición · Congreso Internacional · 2026": "6th Edition · International Conference · 2026",
      "Democracia": "Democracy",
      "contra": "versus",
      "algoritmo": "algorithm",
      "¿Libertad inducida o libertad ejercida? Calidad informativa para la defensa de los derechos fundamentales.":
        "Induced freedom or exercised freedom? Quality information in defence of fundamental rights.",
      "Enviar propuesta": "Submit a proposal",
      "Conoce el Congreso": "About the conference",
      "Online": "Online",
      "2 de diciembre": "2 December",
      "Participación virtual": "Online participation",
      "Presencial": "On site",
      "3 y 4 de diciembre": "3 and 4 December",
      "Campus Guajara · ULL": "Guajara Campus · ULL",
      "Envío de propuestas": "Call for papers",
      "hasta el 25 oct.": "until 25 Oct",
      "Comunicaciones, pósteres y libros": "Papers, posters and books",
      "hasta el 31 oct.": "until 31 Oct",
      "Presencial desde 160 € · online desde 100 €": "On site from €160 · online from €100",

      // Eje central
      "Eje central · VI Edición": "Main theme · 6th Edition",
      "Un derecho estructural": "A structural right",
      "para la democracia": "for democracy",
      "«Democracia contra algoritmo. ¿Libertad inducida o libertad ejercida?»":
        "“Democracy versus algorithm. Induced freedom or exercised freedom?”",
      "En esta edición, INTRACOM analiza los desafíos que plantea la regulación de la inteligencia artificial en el ámbito de las libertades fundamentales, con especial atención al":
        "In this edition, INTRACOM examines the challenges of regulating artificial intelligence in the field of fundamental freedoms, with particular attention to the",
      "derecho de la ciudadanía a recibir información de calidad": "public's right to receive quality information",
      "Un derecho estructural para el funcionamiento democrático que no puede quedar comprometido por las dinámicas del mercado ni por los procesos algorítmicos del actual ecosistema digital.":
        "A right that is structural to democratic life and must not be compromised by market dynamics or by the algorithmic processes of today's digital ecosystem.",
      "Investigadores, docentes y profesionales de la comunicación y las Ciencias Sociales se reúnen en la Universidad de La Laguna para debatir, presentar resultados y transferir conocimiento.":
        "Researchers, teachers and professionals in communication and the social sciences meet at the University of La Laguna to debate, present findings and transfer knowledge.",

      // Líneas
      "Líneas de investigación": "Research lines",
      "para repensar la comunicación digital": "for rethinking digital communication",
      "Seis líneas sobre inteligencia artificial, democracia y derechos en los ecosistemas mediáticos contemporáneos.":
        "Six lines on artificial intelligence, democracy and rights in today's media ecosystems.",
      "de 06": "of 06",
      "Inteligencia artificial, ecosistemas mediáticos y gobernanza digital": "Artificial intelligence, media ecosystems and digital governance",
      "El impacto de la IA en los procesos de comunicación, información y producción cultural: automatización de contenidos, ética algorítmica, gobernanza digital y desafíos como los deepfakes y la manipulación audiovisual.":
        "The impact of AI on communication, information and cultural production: content automation, algorithmic ethics, digital governance and challenges such as deepfakes and audiovisual manipulation.",
      "Ética algorítmica": "Algorithmic ethics",
      "Deepfakes": "Deepfakes",
      "Gobernanza digital": "Digital governance",
      "Automatización": "Automation",
      "Desinformación, democracia y calidad del debate público": "Disinformation, democracy and the quality of public debate",
      "Posverdad, polarización y manipulación narrativa; el papel de las plataformas y las herramientas de verificación que fortalecen la calidad democrática.":
        "Post-truth, polarisation and narrative manipulation; the role of platforms and the fact-checking tools that strengthen democratic quality.",
      "Posverdad": "Post-truth",
      "Fact-checking": "Fact-checking",
      "Polarización": "Polarisation",
      "Derechos digitales, regulación y ciudadanía en red": "Digital rights, regulation and networked citizenship",
      "Regulación de plataformas e IA, privacidad, protección de datos, propiedad intelectual y construcción de una ciudadanía crítica y participativa.":
        "Regulation of platforms and AI, privacy, data protection, intellectual property and building a critical, participatory citizenry.",
      "Privacidad": "Privacy",
      "Protección de datos": "Data protection",
      "Regulación": "Regulation",
      "Diversidad, comunicación inclusiva y culturas digitales": "Diversity, inclusive communication and digital cultures",
      "Comunicación, identidades culturales y transformación social en redes y plataformas: discursos de odio, violencia simbólica, comunicación inclusiva y representación de las diversidades.":
        "Communication, cultural identities and social change on networks and platforms: hate speech, symbolic violence, inclusive communication and the representation of diversity.",
      "Discursos de odio": "Hate speech",
      "Inclusión": "Inclusion",
      "Representación": "Representation",
      "Comunidades": "Communities",
      "Educación mediática, alfabetización digital y transferencia": "Media education, digital literacy and knowledge transfer",
      "Alfabetización mediática y algorítmica, innovación docente, divulgación científica y transferencia social del conocimiento.":
        "Media and algorithmic literacy, teaching innovation, science communication and the social transfer of knowledge.",
      "Alfabetización": "Literacy",
      "Innovación docente": "Teaching innovation",
      "Divulgación": "Outreach",
      "Ética, sostenibilidad y futuro de la comunicación": "Ethics, sustainability and the future of communication",
      "Sostenibilidad digital, responsabilidad social y derechos fundamentales en entornos automatizados, con la tecnología al servicio del bienestar social.":
        "Digital sustainability, social responsibility and fundamental rights in automated environments, with technology serving social wellbeing.",
      "Sostenibilidad": "Sustainability",
      "Prospectiva": "Foresight",
      "Derechos": "Rights",
      "¿Tu investigación cruza varias líneas?": "Does your research cross several lines?",
      "Las mesas son permeables. Indica en el envío qué ejes consideras prioritarios.":
        "The panels are permeable. Say in your submission which lines you consider a priority.",

      // Participación
      "Cómo participar": "How to take part",
      "Call for Papers": "Call for papers",
      "Presenta tu trabajo": "Present your work",
      "en INTRACOM 2026": "at INTRACOM 2026",
      "Comunicaciones, pósteres y presentaciones de libros: envío de propuestas hasta el":
        "Papers, posters and book presentations: proposals accepted until",
      "25 de octubre de 2026": "25 October 2026",
      "Comunicación científica": "Research paper",
      "Resultados de investigación originales vinculados al eje central o a cualquiera de las mesas temáticas.":
        "Original research findings linked to the main theme or to any of the thematic panels.",
      "Póster científico": "Scientific poster",
      "Formato visual para presentar investigaciones en curso o resultados preliminares ante la comunidad académica.":
        "A visual format for presenting work in progress or preliminary findings to the academic community.",
      "Presentación de libro": "Book presentation",
      "Espacio para dar a conocer publicaciones recientes en el ámbito de la comunicación y las Ciencias Sociales.":
        "A space to share recent publications in communication and the social sciences.",
      "¿Simposio, panel u otra actividad?": "A symposium, panel or another activity?",
      "Escríbenos a": "Write to us at",
      "con tu propuesta.": "with your proposal.",
      "Ir a la plataforma de envío": "Go to the submission platform",
      "25 oct.": "25 Oct",
      "31 oct.": "31 Oct",
      "Cierre de inscripción": "Registration closes",
      "10 nov.": "10 Nov",
      "Programa definitivo": "Final programme",
      "2 dic.": "2 Dec",
      "Jornada online": "Online day",
      "3–4 dic.": "3–4 Dec",
      "Jornadas presenciales · ULL": "On-site days · ULL",

      // Tarifas
      "Participación e inscripciones": "Participation and registration",
      "Elige tu": "Choose your",
      "modalidad": "option",
      "Inscripción abierta hasta el": "Registration open until",
      "31 de octubre": "31 October",
      ". El programa definitivo se publicará el 10 de noviembre.": ". The final programme will be published on 10 November.",
      "Modalidad presencial": "On site",
      "Congresista presencial": "On-site participant",
      "Primer/a firmante": "First author",
      "Firmantes con asistencia": "Authors attending",
      "Firmantes sin asistencia": "Authors not attending",
      "Inscripción con networking": "Registration with networking",
      "Todos los derechos de la inscripción básica más una cena de trabajo con otras personas participantes del congreso.":
        "All the rights of the standard registration plus a working dinner with other participants.",
      "Inscripción + publicación": "Registration + publication",
      "Incluye la evaluación científica por pares ciegos. No garantiza la publicación, que depende de una evaluación favorable; si no se acepta, el trabajo puede derivarse a otras publicaciones colectivas o revistas colaboradoras.":
        "Includes blind peer review. It does not guarantee publication, which depends on a favourable assessment; if it is not accepted, the work may be directed to other collective volumes or partner journals.",
      "Inscripción completa": "Full registration",
      "Exclusiva para primeros/as firmantes con asistencia presencial: incluye networking y opción de publicación en editorial SPI.":
        "For first authors attending on site only: includes networking and the option of publication with an SPI-ranked publisher.",
      "Modalidad online": "Online",
      "Inscripción básica": "Standard registration",
      "Firmantes adicionales": "Additional authors",

      // Publicaciones
      "La estrategia de INTRACOM": "INTRACOM's approach",
      "para la difusión académica": "to academic dissemination",
      "Tras un congreso, lo que perdura son los resultados que pueden acreditarse como méritos académicos. Por eso ofrecemos publicar en editoriales y revistas de prestigio.":
        "After a conference, what lasts are the results that count as academic merits. That is why we offer publication with respected publishers and journals.",
      "Coste adicional": "Additional cost",
      "Publicación de tu trabajo": "Publication of your work",
      "por comunicación": "per paper",
      "No por firmante. Lo puede asumir cualquiera de las personas firmantes y se integra en la inscripción correspondiente.":
        "Not per author. Any of the authors may pay it, and it is added to their registration.",
      "i. Proceso independiente": "i. A separate process",
      "Participar no obliga a publicar": "Taking part does not oblige you to publish",
      "Quien quiera optar a publicación debe enviar el texto completo en plazo, adaptado a las normas editoriales, para someterlo a revisión por pares ciegos.":
        "Those who wish to be considered must send the full text within the deadline, following the editorial guidelines, for blind peer review.",
      "ii. Editoriales colaboradoras": "ii. Partner publishers",
      "Publicación en editoriales académicas": "Publication with academic publishers",
      "Los trabajos que superen la evaluación podrán publicarse en editoriales colaboradoras de INTRACOM, como:":
        "Papers that pass review may be published by INTRACOM's partner publishers, such as:",
      "iii. Alternativas": "iii. Alternatives",
      "Volúmenes colectivos y revistas": "Collective volumes and journals",
      "Si una propuesta no se acepta, podrá incorporarse, previa valoración científica, a volúmenes colectivos de INTRACOM o a revistas colaboradoras del Portal Iberoamericano de la Transferencia del Conocimiento.":
        "If a proposal is not accepted, it may be included, subject to scientific assessment, in INTRACOM's collective volumes or in partner journals of the Ibero-American Portal for Knowledge Transfer.",
      "Recuerda: la publicación es voluntaria.": "Remember: publication is voluntary.",
      "Puedes presentar tu comunicación sin enviar el texto completo. Hazlo solo si quieres que se evalúe para publicarla.":
        "You can present your paper without sending the full text. Send it only if you want it assessed for publication.",

      // ANECA
      "Novedad · VI edición": "New · 6th edition",
      "Seminario de preparación de": "Workshop on preparing",
      "acreditaciones ANECA": "ANECA accreditation",
      "Este año,": "This year,",
      "por el mismo coste de participación": "at no extra cost",
      ", podrás asistir a un taller práctico de 2 horas orientado a la preparación de tu acreditación ante la":
        ", you can attend a two-hour practical workshop on preparing your accreditation before the",
      "Comisión de Ciencias Sociales II": "Social Sciences II Committee",
      "de ANECA.": "of ANECA.",
      "3 de diciembre": "3 December",
      "Profesor/a Titular de Universidad": "Tenured University Lecturer",
      "Taller práctico dirigido a la preparación de la acreditación a Profesor/a Titular ante la Comisión de Ciencias Sociales II.":
        "Practical workshop on preparing the application for tenure before the Social Sciences II Committee.",
      "2 horas · Incluido en la inscripción": "Two hours · Included in the registration",
      "4 de diciembre": "4 December",
      "Catedrático/a de Universidad": "Full Professor",
      "Taller práctico dirigido a la preparación de la acreditación a Catedrático/a de Universidad ante la misma Comisión.":
        "Practical workshop on preparing the application for a full professorship before the same Committee.",
      "Una perspectiva": "An approach that is",
      "eminentemente práctica": "eminently practical",
      "Criterios de evaluación": "Assessment criteria",
      "Lectura detallada de los criterios vigentes de la Comisión y de cómo se aplican en la práctica.":
        "A detailed read of the Committee's current criteria and how they are applied in practice.",
      "Estrategias de preparación de la solicitud": "Strategies for preparing the application",
      "Cómo presentar la documentación, optimizar el expediente y seleccionar los méritos más adecuados.":
        "How to present the documentation, improve the file and choose the most relevant merits.",
      "Resolución de dudas": "Questions and answers",
      "Espacio abierto para plantear casos concretos de los participantes.": "Open time for participants' own cases.",

      // Sede y equipo
      "Sede del Congreso": "Conference venue",
      "Facultad de Ciencias Sociales y de la": "Faculty of Social Sciences and",
      "Comunicación": "Communication",
      "Facultad de CC. Sociales y de la Comunicación": "Faculty of Social Sciences and Communication",
      "Sede compartida con la Facultad de Derecho": "Shared with the Faculty of Law",
      "Tenerife · Islas Canarias · España": "Tenerife · Canary Islands · Spain",
      "Las personas": "The people",
      "detrás de INTRACOM": "behind INTRACOM",
      "Un equipo de universidades de España, Italia, Portugal y Brasil.": "A team from universities in Spain, Italy, Portugal and Brazil.",
      "Equipo de dirección": "Steering team",
      "Comité científico": "Scientific committee",
      "Secretaría y organización": "Secretariat and organisation",
      "Secretaría técnica": "Technical secretariat",
      "Responsable de organización": "Organisation lead",
      "Responsable web": "Web lead",
      "Ediciones anteriores": "Previous editions",
      "Así se vive": "This is what",
      "INTRACOM": "INTRACOM is like",
      "Cada primera semana de diciembre, colegas de España, Europa y Latinoamérica se reúnen en Tenerife para compartir investigación, actividades culturales y nuevos proyectos.":
        "Every first week of December, colleagues from Spain, Europe and Latin America meet in Tenerife to share research, cultural activities and new projects.",
      "Bienvenido a la VI edición de INTRACOM.": "Welcome to the 6th edition of INTRACOM.",
      "Universidad de La Laguna · Tenerife": "University of La Laguna · Tenerife",
      "Aviso legal · Privacidad · Cookies · Cancelaciones y reembolsos": "Legal notice · Privacy · Cookies · Cancellations and refunds",
    },

    pt: {
      // Menu e capa
      "Mesas temáticas": "Mesas temáticas",
      "Participa": "Participe",
      "Inscripción": "Inscrição",
      "Publicaciones": "Publicações",
      "Sede": "Local",
      "Organización": "Organização",
      "Reserva tu plaza": "Reserve o seu lugar",
      "VI Edición · Congreso Internacional · 2026": "VI Edição · Congresso Internacional · 2026",
      "Democracia": "Democracia",
      "contra": "contra",
      "algoritmo": "algoritmo",
      "¿Libertad inducida o libertad ejercida? Calidad informativa para la defensa de los derechos fundamentales.":
        "Liberdade induzida ou liberdade exercida? Qualidade informativa para a defesa dos direitos fundamentais.",
      "Enviar propuesta": "Enviar proposta",
      "Conoce el Congreso": "Conheça o congresso",
      "Online": "Online",
      "2 de diciembre": "2 de dezembro",
      "Participación virtual": "Participação virtual",
      "Presencial": "Presencial",
      "3 y 4 de diciembre": "3 e 4 de dezembro",
      "Campus Guajara · ULL": "Campus Guajara · ULL",
      "Envío de propuestas": "Envio de propostas",
      "hasta el 25 oct.": "até 25 out.",
      "Comunicaciones, pósteres y libros": "Comunicações, pósteres e livros",
      "hasta el 31 oct.": "até 31 out.",
      "Presencial desde 160 € · online desde 100 €": "Presencial desde 160 € · online desde 100 €",

      // Eixo central
      "Eje central · VI Edición": "Eixo central · VI Edição",
      "Un derecho estructural": "Um direito estrutural",
      "para la democracia": "para a democracia",
      "«Democracia contra algoritmo. ¿Libertad inducida o libertad ejercida?»":
        "«Democracia contra algoritmo. Liberdade induzida ou liberdade exercida?»",
      "En esta edición, INTRACOM analiza los desafíos que plantea la regulación de la inteligencia artificial en el ámbito de las libertades fundamentales, con especial atención al":
        "Nesta edição, o INTRACOM analisa os desafios da regulação da inteligência artificial no âmbito das liberdades fundamentais, com especial atenção ao",
      "derecho de la ciudadanía a recibir información de calidad": "direito das pessoas a receber informação de qualidade",
      "Un derecho estructural para el funcionamiento democrático que no puede quedar comprometido por las dinámicas del mercado ni por los procesos algorítmicos del actual ecosistema digital.":
        "Um direito estrutural para o funcionamento democrático, que não pode ficar comprometido pelas dinâmicas do mercado nem pelos processos algorítmicos do atual ecossistema digital.",
      "Investigadores, docentes y profesionales de la comunicación y las Ciencias Sociales se reúnen en la Universidad de La Laguna para debatir, presentar resultados y transferir conocimiento.":
        "Investigadores, docentes e profissionais da comunicação e das Ciências Sociais reúnem-se na Universidade de La Laguna para debater, apresentar resultados e transferir conhecimento.",

      // Linhas
      "Líneas de investigación": "Linhas de investigação",
      "para repensar la comunicación digital": "para repensar a comunicação digital",
      "Seis líneas sobre inteligencia artificial, democracia y derechos en los ecosistemas mediáticos contemporáneos.":
        "Seis linhas sobre inteligência artificial, democracia e direitos nos ecossistemas mediáticos contemporâneos.",
      "de 06": "de 06",
      "Inteligencia artificial, ecosistemas mediáticos y gobernanza digital": "Inteligência artificial, ecossistemas mediáticos e governação digital",
      "El impacto de la IA en los procesos de comunicación, información y producción cultural: automatización de contenidos, ética algorítmica, gobernanza digital y desafíos como los deepfakes y la manipulación audiovisual.":
        "O impacto da IA nos processos de comunicação, informação e produção cultural: automatização de conteúdos, ética algorítmica, governação digital e desafios como os deepfakes e a manipulação audiovisual.",
      "Ética algorítmica": "Ética algorítmica",
      "Deepfakes": "Deepfakes",
      "Gobernanza digital": "Governação digital",
      "Automatización": "Automatização",
      "Desinformación, democracia y calidad del debate público": "Desinformação, democracia e qualidade do debate público",
      "Posverdad, polarización y manipulación narrativa; el papel de las plataformas y las herramientas de verificación que fortalecen la calidad democrática.":
        "Pós-verdade, polarização e manipulação narrativa; o papel das plataformas e as ferramentas de verificação que reforçam a qualidade democrática.",
      "Posverdad": "Pós-verdade",
      "Fact-checking": "Fact-checking",
      "Polarización": "Polarização",
      "Derechos digitales, regulación y ciudadanía en red": "Direitos digitais, regulação e cidadania em rede",
      "Regulación de plataformas e IA, privacidad, protección de datos, propiedad intelectual y construcción de una ciudadanía crítica y participativa.":
        "Regulação de plataformas e IA, privacidade, proteção de dados, propriedade intelectual e construção de uma cidadania crítica e participativa.",
      "Privacidad": "Privacidade",
      "Protección de datos": "Proteção de dados",
      "Regulación": "Regulação",
      "Diversidad, comunicación inclusiva y culturas digitales": "Diversidade, comunicação inclusiva e culturas digitais",
      "Comunicación, identidades culturales y transformación social en redes y plataformas: discursos de odio, violencia simbólica, comunicación inclusiva y representación de las diversidades.":
        "Comunicação, identidades culturais e transformação social em redes e plataformas: discursos de ódio, violência simbólica, comunicação inclusiva e representação das diversidades.",
      "Discursos de odio": "Discursos de ódio",
      "Inclusión": "Inclusão",
      "Representación": "Representação",
      "Comunidades": "Comunidades",
      "Educación mediática, alfabetización digital y transferencia": "Educação mediática, literacia digital e transferência",
      "Alfabetización mediática y algorítmica, innovación docente, divulgación científica y transferencia social del conocimiento.":
        "Literacia mediática e algorítmica, inovação docente, divulgação científica e transferência social do conhecimento.",
      "Alfabetización": "Literacia",
      "Innovación docente": "Inovação docente",
      "Divulgación": "Divulgação",
      "Ética, sostenibilidad y futuro de la comunicación": "Ética, sustentabilidade e futuro da comunicação",
      "Sostenibilidad digital, responsabilidad social y derechos fundamentales en entornos automatizados, con la tecnología al servicio del bienestar social.":
        "Sustentabilidade digital, responsabilidade social e direitos fundamentais em ambientes automatizados, com a tecnologia ao serviço do bem-estar social.",
      "Sostenibilidad": "Sustentabilidade",
      "Prospectiva": "Prospetiva",
      "Derechos": "Direitos",
      "¿Tu investigación cruza varias líneas?": "A sua investigação cruza várias linhas?",
      "Las mesas son permeables. Indica en el envío qué ejes consideras prioritarios.":
        "As mesas são permeáveis. Indique no envio que eixos considera prioritários.",

      // Participação
      "Cómo participar": "Como participar",
      "Call for Papers": "Call for papers",
      "Presenta tu trabajo": "Apresente o seu trabalho",
      "en INTRACOM 2026": "no INTRACOM 2026",
      "Comunicaciones, pósteres y presentaciones de libros: envío de propuestas hasta el":
        "Comunicações, pósteres e apresentações de livros: envio de propostas até",
      "25 de octubre de 2026": "25 de outubro de 2026",
      "Comunicación científica": "Comunicação científica",
      "Resultados de investigación originales vinculados al eje central o a cualquiera de las mesas temáticas.":
        "Resultados de investigação originais ligados ao eixo central ou a qualquer uma das mesas temáticas.",
      "Póster científico": "Póster científico",
      "Formato visual para presentar investigaciones en curso o resultados preliminares ante la comunidad académica.":
        "Formato visual para apresentar investigações em curso ou resultados preliminares à comunidade académica.",
      "Presentación de libro": "Apresentação de livro",
      "Espacio para dar a conocer publicaciones recientes en el ámbito de la comunicación y las Ciencias Sociales.":
        "Espaço para dar a conhecer publicações recentes no âmbito da comunicação e das Ciências Sociais.",
      "¿Simposio, panel u otra actividad?": "Simpósio, painel ou outra atividade?",
      "Escríbenos a": "Escreva-nos para",
      "con tu propuesta.": "com a sua proposta.",
      "Ir a la plataforma de envío": "Ir para a plataforma de envio",
      "25 oct.": "25 out.",
      "31 oct.": "31 out.",
      "Cierre de inscripción": "Fim das inscrições",
      "10 nov.": "10 nov.",
      "Programa definitivo": "Programa definitivo",
      "2 dic.": "2 dez.",
      "Jornada online": "Jornada online",
      "3–4 dic.": "3–4 dez.",
      "Jornadas presenciales · ULL": "Jornadas presenciais · ULL",

      // Tarifas
      "Participación e inscripciones": "Participação e inscrições",
      "Elige tu": "Escolha a sua",
      "modalidad": "modalidade",
      "Inscripción abierta hasta el": "Inscrições abertas até",
      "31 de octubre": "31 de outubro",
      ". El programa definitivo se publicará el 10 de noviembre.": ". O programa definitivo será publicado a 10 de novembro.",
      "Modalidad presencial": "Modalidade presencial",
      "Congresista presencial": "Congressista presencial",
      "Primer/a firmante": "Primeiro/a subscritor/a",
      "Firmantes con asistencia": "Subscritores presentes",
      "Firmantes sin asistencia": "Subscritores ausentes",
      "Inscripción con networking": "Inscrição com networking",
      "Todos los derechos de la inscripción básica más una cena de trabajo con otras personas participantes del congreso.":
        "Todos os direitos da inscrição básica mais um jantar de trabalho com outras pessoas participantes.",
      "Inscripción + publicación": "Inscrição + publicação",
      "Incluye la evaluación científica por pares ciegos. No garantiza la publicación, que depende de una evaluación favorable; si no se acepta, el trabajo puede derivarse a otras publicaciones colectivas o revistas colaboradoras.":
        "Inclui a avaliação científica por pares cega. Não garante a publicação, que depende de uma avaliação favorável; se não for aceite, o trabalho pode ser encaminhado para outros volumes coletivos ou revistas parceiras.",
      "Inscripción completa": "Inscrição completa",
      "Exclusiva para primeros/as firmantes con asistencia presencial: incluye networking y opción de publicación en editorial SPI.":
        "Exclusiva para primeiros subscritores com presença: inclui networking e opção de publicação em editora SPI.",
      "Modalidad online": "Modalidade online",
      "Inscripción básica": "Inscrição básica",
      "Firmantes adicionales": "Subscritores adicionais",

      // Publicações
      "La estrategia de INTRACOM": "A estratégia do INTRACOM",
      "para la difusión académica": "para a difusão académica",
      "Tras un congreso, lo que perdura son los resultados que pueden acreditarse como méritos académicos. Por eso ofrecemos publicar en editoriales y revistas de prestigio.":
        "Depois de um congresso, o que fica são os resultados que contam como méritos académicos. Por isso oferecemos publicação em editoras e revistas de prestígio.",
      "Coste adicional": "Custo adicional",
      "Publicación de tu trabajo": "Publicação do seu trabalho",
      "por comunicación": "por comunicação",
      "No por firmante. Lo puede asumir cualquiera de las personas firmantes y se integra en la inscripción correspondiente.":
        "Não por subscritor. Pode ser assumido por qualquer um dos autores e integra-se na respetiva inscrição.",
      "i. Proceso independiente": "i. Processo independente",
      "Participar no obliga a publicar": "Participar não obriga a publicar",
      "Quien quiera optar a publicación debe enviar el texto completo en plazo, adaptado a las normas editoriales, para someterlo a revisión por pares ciegos.":
        "Quem quiser candidatar-se à publicação deve enviar o texto completo no prazo, seguindo as normas editoriais, para revisão por pares cega.",
      "ii. Editoriales colaboradoras": "ii. Editoras parceiras",
      "Publicación en editoriales académicas": "Publicação em editoras académicas",
      "Los trabajos que superen la evaluación podrán publicarse en editoriales colaboradoras de INTRACOM, como:":
        "Os trabalhos que superem a avaliação poderão ser publicados em editoras parceiras do INTRACOM, como:",
      "iii. Alternativas": "iii. Alternativas",
      "Volúmenes colectivos y revistas": "Volumes coletivos e revistas",
      "Si una propuesta no se acepta, podrá incorporarse, previa valoración científica, a volúmenes colectivos de INTRACOM o a revistas colaboradoras del Portal Iberoamericano de la Transferencia del Conocimiento.":
        "Se uma proposta não for aceite, poderá ser incorporada, após valoração científica, em volumes coletivos do INTRACOM ou em revistas parceiras do Portal Ibero-Americano da Transferência do Conhecimento.",
      "Recuerda: la publicación es voluntaria.": "Lembre-se: a publicação é voluntária.",
      "Puedes presentar tu comunicación sin enviar el texto completo. Hazlo solo si quieres que se evalúe para publicarla.":
        "Pode apresentar a sua comunicação sem enviar o texto completo. Envie-o só se quiser que seja avaliado para publicação.",

      // ANECA
      "Novedad · VI edición": "Novidade · VI edição",
      "Seminario de preparación de": "Seminário de preparação de",
      "acreditaciones ANECA": "acreditações ANECA",
      "Este año,": "Este ano,",
      "por el mismo coste de participación": "pelo mesmo custo de participação",
      ", podrás asistir a un taller práctico de 2 horas orientado a la preparación de tu acreditación ante la":
        ", poderá assistir a um workshop prático de 2 horas orientado para a preparação da sua acreditação perante a",
      "Comisión de Ciencias Sociales II": "Comissão de Ciências Sociais II",
      "de ANECA.": "da ANECA.",
      "3 de diciembre": "3 de dezembro",
      "Profesor/a Titular de Universidad": "Professor/a Titular de Universidade",
      "Taller práctico dirigido a la preparación de la acreditación a Profesor/a Titular ante la Comisión de Ciencias Sociales II.":
        "Workshop prático dirigido à preparação da acreditação a Professor/a Titular perante a Comissão de Ciências Sociais II.",
      "2 horas · Incluido en la inscripción": "2 horas · Incluído na inscrição",
      "4 de diciembre": "4 de dezembro",
      "Catedrático/a de Universidad": "Catedrático/a de Universidade",
      "Taller práctico dirigido a la preparación de la acreditación a Catedrático/a de Universidad ante la misma Comisión.":
        "Workshop prático dirigido à preparação da acreditação a Catedrático/a perante a mesma Comissão.",
      "Una perspectiva": "Uma abordagem",
      "eminentemente práctica": "eminentemente prática",
      "Criterios de evaluación": "Critérios de avaliação",
      "Lectura detallada de los criterios vigentes de la Comisión y de cómo se aplican en la práctica.":
        "Leitura detalhada dos critérios em vigor da Comissão e de como se aplicam na prática.",
      "Estrategias de preparación de la solicitud": "Estratégias de preparação da candidatura",
      "Cómo presentar la documentación, optimizar el expediente y seleccionar los méritos más adecuados.":
        "Como apresentar a documentação, melhorar o processo e escolher os méritos mais adequados.",
      "Resolución de dudas": "Esclarecimento de dúvidas",
      "Espacio abierto para plantear casos concretos de los participantes.": "Espaço aberto para casos concretos dos participantes.",

      // Local e equipa
      "Sede del Congreso": "Local do congresso",
      "Facultad de Ciencias Sociales y de la": "Faculdade de Ciências Sociais e da",
      "Comunicación": "Comunicação",
      "Facultad de CC. Sociales y de la Comunicación": "Faculdade de Ciências Sociais e da Comunicação",
      "Sede compartida con la Facultad de Derecho": "Partilhada com a Faculdade de Direito",
      "Tenerife · Islas Canarias · España": "Tenerife · Ilhas Canárias · Espanha",
      "Las personas": "As pessoas",
      "detrás de INTRACOM": "por trás do INTRACOM",
      "Un equipo de universidades de España, Italia, Portugal y Brasil.": "Uma equipa de universidades de Espanha, Itália, Portugal e Brasil.",
      "Equipo de dirección": "Equipa de direção",
      "Comité científico": "Comissão científica",
      "Secretaría y organización": "Secretariado e organização",
      "Secretaría técnica": "Secretariado técnico",
      "Responsable de organización": "Responsável de organização",
      "Responsable web": "Responsável web",
      "Ediciones anteriores": "Edições anteriores",
      "Así se vive": "Assim se vive",
      "INTRACOM": "o INTRACOM",
      "Cada primera semana de diciembre, colegas de España, Europa y Latinoamérica se reúnen en Tenerife para compartir investigación, actividades culturales y nuevos proyectos.":
        "Na primeira semana de dezembro, colegas de Espanha, Europa e América Latina reúnem-se em Tenerife para partilhar investigação, atividades culturais e novos projetos.",
      "Bienvenido a la VI edición de INTRACOM.": "Bem-vindo à VI edição do INTRACOM.",
      "Universidad de La Laguna · Tenerife": "Universidade de La Laguna · Tenerife",
      "Aviso legal · Privacidad · Cookies · Cancelaciones y reembolsos": "Aviso legal · Privacidade · Cookies · Cancelamentos e reembolsos",
    },
  };

  var TITULOS = {
    es: "INTRACOM 2026 · Democracia contra algoritmo",
    en: "INTRACOM 2026 · Democracy versus algorithm",
    pt: "INTRACOM 2026 · Democracia contra algoritmo",
  };

  var IDIOMAS = ["es", "en", "pt"];
  var lang = "es";
  try {
    var guardado = localStorage.getItem("intracom_lang");
    if (guardado && IDIOMAS.indexOf(guardado) >= 0) lang = guardado;
  } catch (e) {}

  var ORIG = new WeakMap();

  function traducirNodo(nodo, dict) {
    var base = ORIG.get(nodo);
    if (base === undefined) {
      base = nodo.textContent;
      ORIG.set(nodo, base);
    }
    var clave = base.trim();
    if (!clave) return;
    var t = dict ? dict[clave] : null;
    var nuevo = t ? base.replace(clave, t) : base;
    if (nodo.textContent !== nuevo) nodo.textContent = nuevo;
  }

  var aplicando = false;
  function aplicar() {
    if (aplicando) return;
    aplicando = true;
    var dict = DICT[lang] || null;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.closest("[data-i18n-switch]")) continue;
      traducirNodo(n, dict);
    }
    document.documentElement.setAttribute("lang", lang);
    document.title = TITULOS[lang] || TITULOS.es;
    // Los enlaces a la plataforma llevan al área en el idioma que se está leyendo
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="conferences.portalintracom.com"]'), function (a) {
      a.href = a.href.replace(/\/(es|en|pt)\//, "/" + lang + "/");
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-switch] button"), function (b) {
      var activo = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", activo ? "true" : "false");
      b.style.background = activo ? "#12306b" : "transparent";
      b.style.color = activo ? "#fff" : "#12306b";
    });
    aplicando = false;
  }

  function cambiar(l) {
    lang = l;
    try { localStorage.setItem("intracom_lang", l); } catch (e) {}
    aplicar();
  }

  function crearSelector() {
    if (document.querySelector("[data-i18n-switch]")) return;
    var caja = document.createElement("div");
    caja.setAttribute("data-i18n-switch", "");
    caja.style.cssText =
      "position:fixed;right:18px;bottom:18px;z-index:9999;display:flex;gap:2px;padding:4px;border-radius:999px;" +
      "background:#fff;box-shadow:0 8px 28px rgba(9,22,54,.22);font-family:inherit";
    IDIOMAS.forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = l.toUpperCase();
      b.setAttribute("data-lang", l);
      b.style.cssText =
        "border:0;border-radius:999px;padding:8px 14px;font-size:12.5px;font-weight:700;letter-spacing:.05em;cursor:pointer;background:transparent;color:#12306b";
      b.addEventListener("click", function () { cambiar(l); });
      caja.appendChild(b);
    });
    document.body.appendChild(caja);
  }

  // El propio diseño reconstruye la cabecera al cargar y se lleva por delante los iconos del sitio,
  // así que se vuelven a poner una vez terminada esa reconstrucción.
  function iconos() {
    if (document.querySelector('link[rel="icon"]')) return;
    [
      ["icon", "favicon-32.png", "32x32"],
      ["icon", "favicon-512.png", "512x512"],
      ["apple-touch-icon", "favicon-180.png", "180x180"],
    ].forEach(function (i) {
      var l = document.createElement("link");
      l.rel = i[0];
      l.type = "image/png";
      l.href = i[1];
      l.sizes = i[2];
      document.head.appendChild(l);
    });
  }

  function arrancar() {
    iconos();
    crearSelector();
    aplicar();
    var pendiente = null;
    new MutationObserver(function () {
      clearTimeout(pendiente);
      pendiente = setTimeout(aplicar, 60);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(arrancar, 300); });
  else setTimeout(arrancar, 300);
})();

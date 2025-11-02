
export const COLORS = {
  background: '#F8F9FA',
  backgroundSecondary: '#EBF3FB',
  textMain: '#343A40',
  primary: '#005A9C',
  textInteractive: '#FFFFFF',
  error: '#D90429',
};

export const NAV_LINKS = [
  { name: 'Início', page: 'home' },
  { name: 'Buscar Vagas', page: 'vagas' },
];

export const CANDIDATE_NAV_LINKS = [
  ...NAV_LINKS,
  { name: 'Meu Perfil', page: 'perfil' },
];

export const RECRUITER_NAV_LINKS = [
  ...NAV_LINKS,
  { name: 'Publicar Vaga', page: 'post-vaga' },
];

export const ACCESSIBILITY_FILTER_OPTIONS = {
  'Adaptações Oferecidas': [
    'Intérprete de LIBRAS',
    'Softwares de Leitura',
    'Horários Flexíveis',
    'Comunicação Adaptada',
  ],
};

export const ACCESSIBILITY_PROFILE_OPTIONS = {
    disabilityType: ['Física', 'Auditiva', 'Visual', 'Intelectual', 'Múltipla'],
    assistiveTech: ['Leitor de Tela (JAWS, NVDA, etc)', 'Teclado Especial', 'Cão-Guia', 'Software de Reconhecimento de Voz'],
    interviewNeeds: ['Intérprete de LIBRAS', 'Local com Acesso Físico Total', 'Entrevista com Perguntas por Escrito', 'Tempo Adicional para Testes'],
    workplaceNeeds: ['Software de Leitura/Zoom', 'Comunicação Interna Acessível', 'Mobiliário Adaptado', 'Horários Flexíveis', 'Rampas e Elevadores'],
};


export const ABLEIST_TERMS: { [key: string]: { reason: string; suggestion: string } } = {
    "dar uma de joão sem braço": {
      reason: "Associa deficiência física à preguiça ou má-fé.",
      suggestion: "Se fazer de desentendido / Fingir que não entendeu"
    },
    "que mancada": {
      reason: "Associa 'mancar' (uma característica física) a cometer um erro.",
      suggestion: "Que erro / Que gafe / Equívoco"
    },
    "superação": {
      reason: "Coloca a deficiência como algo a ser 'superado', o que é um clichê condescendente.",
      suggestion: "Profissional qualificado"
    },
    "guerreiro": {
        reason: "Coloca a deficiência como algo a ser 'superado', o que é um clichê condescendente.",
        suggestion: "Profissional qualificado"
    },
    "pessoa especial": {
      reason: "Infantiliza ou segrega a pessoa. A deficiência é uma característica.",
      suggestion: "Pessoa com Deficiência (PCD)"
    },
    "necessidades especiais": {
        reason: "Infantiliza ou segrega a pessoa. A deficiência é uma característica.",
        suggestion: "Pessoa com Deficiência (PCD)"
    },
    "portador de deficiência": {
      reason: "A deficiência não é algo que se 'porta' (como um documento). É uma característica da pessoa.",
      suggestion: "Pessoa com Deficiência (PCD)"
    },
    "retardado": {
      reason: "Termo pejorativo que associa deficiência intelectual a erro ou incapacidade.",
      suggestion: "Isso está incorreto / Pessoa com deficiência intelectual"
    },
    "deficiente": {
        reason: "Termo pejorativo usado como xingamento.",
        suggestion: "Pessoa com deficiência"
    },
    "você nem parece pcd": {
      reason: "Sugere que ter uma deficiência é ser 'anormal'.",
      suggestion: "(Evitar qualquer comentário sobre a aparência da deficiência)"
    },
    "parece normal": {
        reason: "Sugere que ter uma deficiência é ser 'anormal'.",
        suggestion: "(Evitar qualquer comentário sobre a aparência da deficiência)"
    }
};

export const courses = [
    {
        id: "neuroanatomia-funcional",
        title: "Neuroanatomía Funcional y Aplicada",
        subtitle: "Domina las estructuras cerebrales y su correlación con la práctica clínica. Un curso diseñado para comprender la base física de la conducta.",
        category: "Formación Clínica",
        author: "Ana García",
        price: "150 MXN",
        totalLessons: 24,
        duration: "4 Semanas",
        minLevel: "Licenciatura",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
        
        // --- NUEVOS DATOS EXTRA ---
        language: "Español",
        hasCertificate: true,
        description: [
            "Este curso profundiza en la arquitectura del sistema nervioso central desde una perspectiva funcional. No nos limitamos a nombrar estructuras, sino que analizamos cómo se conectan y qué funciones cognitivas y motoras sustentan.",
            "A través de modelos 3D y casos clínicos reales, aprenderás a localizar lesiones basándote en la sintomatología del paciente, una habilidad crucial para la práctica neuropsicológica y médica."
        ],
        learningPoints: [
            "Identificarás las principales estructuras corticales y subcorticales en neuroimagen.",
            "Comprenderás la organización de las vías motoras y sensoriales.",
            "Analizarás la vascularización cerebral y sus implicaciones en el ictus.",
            "Relacionarás lesiones específicas con déficits cognitivos concretos."
        ],
        requirements: [
            "Conocimientos básicos de biología celular.",
            "Acceso a un ordenador para visualizar modelos 3D.",
            "Interés en neuropsicología o neurología clínica."
        ]
    },
    {
        id: "neuroplasticidad-clinica",
        title: "Fundamentos de Neuroplasticidad Clínica",
        subtitle: "Explora la capacidad del cerebro para reorganizarse y aprende estrategias terapéuticas basadas en la evidencia reciente.",
        category: "Fundamentos",
        author: "Elena Villanueva",
        price: "120 MXN",
        totalLessons: 18,
        duration: "6 Horas",
        minLevel: "Grado",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=600&q=80",
        
        // --- NUEVOS DATOS EXTRA ---
        language: "Español",
        hasCertificate: true,
        description: [
            "La neuroplasticidad es la base de cualquier rehabilitación cognitiva o motora. En este curso desmitificamos el concepto y vamos a la ciencia pura: ¿cómo se fortalecen las sinapsis? ¿qué es la potenciación a largo plazo (LTP)?",
            "Diseñado para terapeutas ocupacionales, fisioterapeutas y psicólogos que quieren justificar sus intervenciones con bases neurobiológicas sólidas."
        ],
        learningPoints: [
            "Definirás los mecanismos de plasticidad sináptica y estructural.",
            "Diferenciarás entre plasticidad adaptativa y mal-adaptativa.",
            "Diseñarás estrategias de intervención basadas en principios de aprendizaje.",
            "Conocerás el papel de los factores neurotróficos (BDNF) en la recuperación."
        ],
        requirements: [
            "Grado en ciencias de la salud o psicología.",
            "Lectura básica de artículos científicos en inglés (recomendado)."
        ]
    },
    {
        id: "neuroimagen-interpretacion",
        title: "Neuroimagen: Interpretación Básica",
        subtitle: "Guía esencial para psicólogos y neurocientíficos sobre cómo leer y entender resonancias magnéticas y tomografías.",
        category: "Profesional",
        author: "Marc Johnson",
        price: "195 MXN",
        totalLessons: 24,
        duration: "10 Horas",
        minLevel: "Postgrado",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80",
        
        // --- NUEVOS DATOS EXTRA ---
        language: "Español / Inglés",
        hasCertificate: true,
        description: [
            "¿Te sientes perdido cuando ves una resonancia magnética? Este curso es tu brújula. Aprenderás a distinguir entre secuencias T1, T2 y FLAIR, y a identificar las anomalías estructurales más comunes.",
            "No pretendemos formarte como radiólogo, sino darte las herramientas para dialogar con ellos y entender mejor los informes de tus pacientes o sujetos de investigación."
        ],
        learningPoints: [
            "Diferenciarás los distintos planos anatómicos (axial, sagital, coronal).",
            "Identificarás hiperintensidades e hipointensidades básicas.",
            "Comprenderás los fundamentos de la resonancia magnética funcional (fMRI).",
            "Analizarás volumetrías básicas de hipocampo y ventrículos."
        ],
        requirements: [
            "Conocimientos sólidos de neuroanatomía.",
            "Ordenador capaz de ejecutar visores DICOM (software gratuito incluido)."
        ]
    },
    {
        id: "bases-neurobiologicas",
        title: "Bases Neurobiológicas del Aprendizaje",
        subtitle: "Profundiza en la sinapsis, los neurotransmisores y los mecanismos moleculares que permiten la memoria y el aprendizaje.",
        category: "Educación",
        author: "Sarah Chen",
        price: "90 MXN",
        totalLessons: 12,
        duration: "4 Horas",
        minLevel: "Estudiante",
        image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?auto=format&fit=crop&w=600&q=80",
        
        // --- NUEVOS DATOS EXTRA ---
        language: "Español",
        hasCertificate: false,
        description: [
            "El aprendizaje no es magia, es biología. Adéntrate en el mundo microscópico de la neurona para entender cómo la experiencia física cambia la estructura química de tu cerebro.",
            "Ideal para educadores y estudiantes que desean comprender el 'hardware' detrás del proceso educativo."
        ],
        learningPoints: [
            "Explicarás el potencial de acción y la transmisión sináptica.",
            "Enumerarás los principales neurotransmisores (glutamato, GABA, dopamina).",
            "Entenderás el papel de la glía en el soporte neuronal.",
            "Relacionarás el sueño y el estrés con la capacidad de aprendizaje."
        ],
        requirements: [
            "Biología de nivel bachillerato.",
            "Curiosidad por la química cerebral."
        ]
    },
];
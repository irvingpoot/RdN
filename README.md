# Red de Neurociencias (RdN)
Este es el repositorio del sitio web oficial de Red de Neurociencias (RdN)

## 🚀 Sobre el Proyecto
El sitio web sirve como plataforma principal para:
- Presentar la Misión y Visión del grupo.
- Detallar los objetivos y valores de la organización.
- Mostrar las líneas de trabajo y las disciplinas que componen la red.
- Listar los diferentes tipos de membresía.
- Presentar a los miembros activos de la red.

## 🛠️ Stack Tecnológico
Este proyecto está construido con tecnologías modernas, enfocadas en el rendimiento y la experiencia de desarrollo:

[![](https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE)](https://astro.build/) [![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🏁 Primeros Pasos
Para ejecutar este proyecto localmente, sigue estos pasos:
Clonar el repositorio:
```bash
git clone https://github.com/irvingpoot/RdN
cd rdn
```

Instalar dependencias (Se recomienda usar pnpm):
```bash
pnpm dev
```
Ejecutar el servidor de desarrollo: Esto iniciará el servidor local, generalmente en http://localhost:4321.

🧞 Comandos Disponibles
Todos los comandos se ejecutan desde la raíz del proyecto, a través de pnpm:
| Comando | Acción |
| ------ | ------ |
| pnpm dev | Inicia el servidor de desarrollo local en localhost:4321. |
| pnpm build | Compila el sitio para producción en la carpeta ./dist/. |
| pnpm preview | Previsualiza el sitio compilado localmente antes de desplegar. |
| pnpm astro ... | Ejecuta comandos de la CLI de Astro. |

📁 Estructura del Proyecto
El proyecto sigue la estructura estándar de Astro, con una clara separación de responsabilidades:
```plaintext
/
├── public/             # Assets estáticos (imágenes, logos, favicons)
│   ├── banner.webp
│   ├── logoMiembro.webp
│   ├── misionvision.webp
│   ├── neuro.webp
│   └── valores.webp
├── src/
│   ├── assets/           # Assets procesados (fuentes)
│   │   └── PlayfairDisplay.woff2
│   ├── components/       # Componentes reutilizables (.astro)
│   │   ├── Card.astro       
│   │   ├── Footer.astro     
│   │   ├── Header.astro     
│   │   ├── LiCard.astro     
│   │   ├── MembresiaCard.astro
│   │   ├── Miembro.astro    
│   │   ├── Neurona.astro    
│   │   └── TextCard.astro   
│   ├── layouts/          # Plantilla base (Layout.astro)
│   ├── pages/            # Páginas y rutas del sitio
│   │   ├── index.astro     (Página de Inicio)
│   │   ├── miembros.astro  (Página de Miembros)
│   │   └── nosotros.astro  (Página "Sobre Nosotros")
│   └── styles/           # Estilos globales y configuración de fuentes
│       └── global.css
├── .vscode/              # Configuraciones de VSCode
├── astro.config.mjs      # Configuración de Astro (integración con Tailwind)
├── package.json          # Dependencias y scripts del proyecto
└── tsconfig.json         # Configuración de TypeScript
```

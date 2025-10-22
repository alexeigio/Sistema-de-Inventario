# Guía de .gitignore

Este repositorio contiene un archivo `.gitignore` preparado para proyectos Node.js.

Contenido principal del `.gitignore`:

- node_modules/: dependencias instaladas, no deben subirse.
- .env, .env.*: archivos con variables sensibles o de configuración local.
- dist/, build/: artefactos de compilación.
- coverage/: reportes de cobertura.
- .vscode/, .idea/: archivos de configuración del editor.
- logs/, *.log: registros de ejecución.
- .supabase/: archivos locales de supabase (si usas Supabase localmente).
- docker-compose.override.yml: overrides locales de Docker.

Comandos útiles

- Ignorar archivos ya versionados (si los has cometido accidentalmente):

  git rm -r --cached .
  git add .
  git commit -m "Remove ignored files from repo"

- Configurar un .gitignore global (útil para IDE/OS comunes):

  git config --global core.excludesfile ~/.gitignore_global

  # luego edita ~/.gitignore_global y añade entradas como:
  # .DS_Store
  # Thumbs.db
  # .vscode/

Buenas prácticas

- Mantén secretos fuera del repositorio. Usa variables de entorno o servicios de secretos.
- Revisa el `.gitignore` cuando añadas nuevas herramientas (por ejemplo, contenedores, frameworks).
- Para archivos de configuración que deben compartirse entre el equipo (ej. ESLint config), no los ignores.

Si quieres, puedo:

- Añadir reglas específicas para otras herramientas que uses (TypeScript, Next.js, pnpm, etc.).
- Crear `~/.gitignore_global` con reglas recomendadas para Windows/WSL/IDE.

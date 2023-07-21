# youtube-integration-node

# Objetivos del Proyecto
Configurar un proyecto de Node.js desde cero, incluyendo la instalación de dependencias necesarias.
Conectar la aplicación con la API de YouTube utilizando la autenticación adecuada.
Implementar funciones para buscar y obtener información detallada sobre vídeos.

En este README, explicaremos cómo clonar e instalar un proyecto de Node.js en dos escenarios: utilizando Docker y sin Docker.

# Clonar el Repositorio
En ambos casos, lo primero que debemos hacer es clonar el repositorio del proyecto. Asumiremos que ya tienes Git instalado en tu sistema.

Abre una terminal o línea de comandos.

Clona el repositorio usando Git:
git clone <URL_DEL_REPOSITORIO>

Requisitos Previos
Asegúrate de tener Node.js y npm instalados en tu sistema. 

Ejecute npm install, para instalar las dependencias y luego npm run dev para ejecutar el proyecto

# Instalación
Instalación con Docker
Requisitos Previos
Asegúrate de tener Docker instalado en tu sistema.

docker build -t <NOMBRE_DE_LA_IMAGEN> .
Una vez que la imagen se haya construido, puedes ejecutar el contenedor Docker utilizando el siguiente comando:
docker run -p <PUERTO_DESEADO>:<PUERTO_DEL_PROYECTO> -d <NOMBRE_DE_LA_IMAGEN>

# Notas Finales
Una vez que hayas instalado el proyecto con o sin Docker, deberías tenerlo funcionando en tu máquina local. Si utilizas Docker, recuerda que el contenedor se está ejecutando en un entorno aislado y si deseas acceder a la aplicación, deberás utilizar el puerto que mapeaste durante el comando docker run.

Esperamos que esta guía te haya sido útil para clonar e instalar el proyecto en ambos escenarios. Si tienes alguna pregunta o problema, no dudes en preguntar  ¡Disfruta trabajando en el proyecto!

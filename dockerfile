# Usa una imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo dentro de la imagen
WORKDIR /usr/src/app

# Copia los archivos necesarios y ejecuta npm install
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "index.js", "dev"]

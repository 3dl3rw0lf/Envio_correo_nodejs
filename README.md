# 📧📤 Enviar Correos con Node.js y Brevo

Este proyecto muestra cómo enviar correos electrónicos utilizando la API de Brevo (anteriormente Sendinblue) con Node.js. El código está basado en el video 🎞️ [Enviar Correos en Nodejs con Brevo (Servicio de Correos Transaccionales)](https://youtu.be/7tpco9Fplsg?si=jgPmfJbqLg9n5ZIE) del canal ***[Fazt Code](https://www.youtube.com/@FaztCode)***.

## Prerrequisitos 🛠️

- Node.js instalado en tu máquina.
- Una cuenta de Brevo con una clave API.

## Instalación ⚙️

1. Clona el repositorio:

    ```bash
    git clone https://github.com/3dl3rw0lf/Envio_correo_nodejs.git
    cd Envio_correo_nodejs
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea los archivos de entorno:

    - `development.env` para desarrollo
    - `production.env` para producción

    Por ejemplo, el contenido de `development.env` debería ser:

    ```env
    # API Key Brevo
    API_KEY_ENV=tu_api_key_de_desarrollo
    ```

4. Configura el archivo `config.js` para usar las variables de entorno adecuadas:

    ```javascript
    import dotenv from 'dotenv';
    import path from 'path';

    const env = process.env.NODE_ENV || 'development';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    dotenv.config({
        path: path.resolve(__dirname, `${env}.env`)
    });

    export const API_KEY_ENV = process.env.API_KEY_ENV;
    ```

5. Agrega el siguiente script en tu archivo `package.json` para facilitar el inicio del servidor en modo desarrollo:

    ```json
    "scripts": {
        "dev": "set NODE_ENV=development&& node --watch server.js",
        "start": "set NODE_ENV=production&& node server.js"
    }
    ```

## Uso 👨🏽‍💻👩🏽‍💻

1. Ejecuta la aplicación en modo desarrollo:

    ```bash
    npm run dev
    ```

2. Ejecuta la aplicación en modo producción:

    ```bash
    npm start
    ```

## Archivos 📁

- `server.js`: Contiene la lógica para enviar correos electrónicos utilizando la API de Brevo.
- `config.js`: Configura las variables de entorno.
- `development.env` y `production.env`: Archivos de entorno para desarrollo y producción respectivamente.

## Recursos

- Video tutorial: [Enviar Correos en Nodejs con Brevo (Servicio de Correos Transaccionales)](https://youtu.be/7tpco9Fplsg?si=jgPmfJbqLg9n5ZIE) - Fazt Code

## Créditos

Este proyecto fue realizado en base al video [Enviar Correos en Nodejs con Brevo (Servicio de Correos Transaccionales)](https://youtu.be/7tpco9Fplsg?si=jgPmfJbqLg9n5ZIE) del canal [Fazt Code](https://www.youtube.com/@FaztCode).

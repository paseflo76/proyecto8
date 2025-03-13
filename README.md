🎬 API de Películas, Cines y Usuarios

Esta API REST permite gestionar **películas**, los **cines** donde se proyectan y la **autenticación de usuarios** con **registro, login y protección con JWT**.

## 📌 Características principales

✅ Gestión de **películas** con información detallada.  
✅ Administración de **cines** y sus películas disponibles.  
✅ **Registro e inicio de sesión** con encriptación de contraseñas (**bcrypt**) y **JWT** para autenticación.  
✅ **Evita duplicados** en las películas dentro de cada cine.  
✅ Uso de **MongoDB y Mongoose** como base de datos.  
✅ Servidor construido con **Node.js y Express.js**.  
✅ Subida de imágenes con **Cloudinary, Multer y Multer-Storage-Cloudinary**.  
✅ Rutas protegidas y manejo de errores.

---

## 🛠 **Tecnologías utilizadas**

El proyecto está desarrollado con las siguientes tecnologías:

- **Node.js** - Entorno de ejecución de JavaScript en el servidor.
- **Express.js** - Framework para construir la API de manera eficiente.
- **MongoDB** - Base de datos NoSQL para almacenar las películas, cines y usuarios.
- **Mongoose** - ODM para modelar los datos en MongoDB.
- **bcrypt** - Para encriptar contraseñas de usuarios.
- **jsonwebtoken (JWT)** - Para autenticación y protección de rutas.
- **Cloudinary** - Almacenamiento de imágenes en la nube.
- **Multer & Multer-Storage-Cloudinary** - Para la carga de imágenes.
- **Dotenv** - Manejo de variables de entorno.

---

## 🚀 **Instalación y configuración**

### 1️⃣ Clonar el repositorio:

```sh
git clone https://github.com/tu_usuario/proyecto-peliculas.git
cd proyecto-peliculas
```

### 2️⃣ Instalar dependencias:

```sh
npm install
```

### 3️⃣ Configurar variables de entorno:

Crea un archivo `.env` en la raíz del proyecto y agrega la configuración:

```env
DB_URL=mongodb+srv://paseflo34:sFByflpwmD5Z3rnH@cluster0.qtrlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=tu_secreto_jwt
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

### 4️⃣ Iniciar el servidor:

```sh
npm start
```

o con Nodemon para desarrollo:

```sh
npm run dev
```

El servidor se ejecutará en:
➡️ `http://localhost:3000`

---

## 💽 **Endpoints disponibles**

### 🔑 Usuarios (Autenticación)

| Método | Endpoint  | Descripción                                   |
| ------ | --------- | --------------------------------------------- |
| GET    | /isAdmin/ | Obtiene todos los usuarios (Admin)            |
| PUT    | /isAdmin/ | Modifica usuarios (Admin)                     |
| POST   | /register | Registra un nuevo usuario                     |
| POST   | /login    | Inicia sesión y devuelve un token JWT         |
| DELETE | /isAuth/  | Elimina su cuenta o el admin elimina usuarios |

### 🎬 Películas

| Método | Endpoint               | Descripción                                   |
| ------ | ---------------------- | --------------------------------------------- |
| GET    | /peliculas             | Obtener todas las películas                   |
| POST   | /ISAUTH/peliculas      | Crear una nueva película (Requiere JWT)       |
| PUT    | /isAdmin/peliculas/:id | Actualizar una película (Admin, requiere JWT) |
| DELETE | /isAdmin/peliculas/:id | Eliminar una película (Admin, requiere JWT)   |

### 🎬 Cines

| Método | Endpoint           | Descripción                               |
| ------ | ------------------ | ----------------------------------------- |
| GET    | /cines             | Obtener todos los cines                   |
| POST   | /isAdmin/cines     | Crear un nuevo cine (Admin, requiere JWT) |
| PUT    | /isAdmin/cines/:id | Actualizar un cine (Admin, requiere JWT)  |
| DELETE | /isAdmin/cines/:id | Eliminar un cine (Admin, requiere JWT)    |

---

## 🔐 **Autenticación con JWT**

Después de iniciar sesión en `/login`, recibirás un token JWT que deberás incluir en las peticiones protegidas.

# UX-Mobile

Proyecto final para la clase de UX en la maestría de software de la Universidad de los Andes. Esta aplicación de alarmas para mobile permite a los usuarios establecer y gestionar alarmas con varias configuraciones únicas diseñadas para mejorar la experiencia del usuario.

## Requisitos previos

Para ejecutar este proyecto, necesitarás tener instalado [Node.js](https://nodejs.org/) que incluye `npm`, y también necesitarás instalar Expo CLI si aún no lo has hecho:

```bash
npm install -g expo-cli
```

## Instalación

Clona este repositorio utilizando:

```bash
git clone https://github.com/snader21/ux-mobile.git
```

Navega al directorio del proyecto:

```bash
cd ux-mobile
```

Instala las dependencias necesarias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el proyecto con Expo, ejecuta:

```bash
npm run start
```

### Instrucciones para ejecutar el proyecto con Expo

Una vez que hayas instalado todas las dependencias y estés listo para ejecutar el proyecto, puedes iniciar Expo con el siguiente comando en tu terminal:

```bash
npm run start
```

Esto iniciará el servidor de desarrollo de Expo. En la terminal encontrarás un código QR y varias opciones para visualizar tu aplicación.

#### Opciones para visualizar la aplicación:

**Para usuarios de Android:**

1. **Simulador de Android Studio:**
   - Asegúrate de tener configurado Android Studio y un emulador creado. Si necesitas ayuda para configurarlo, visita la [documentación oficial de Android Studio](https://developer.android.com/studio/run/emulator).
   - Con el Metro Bundler abierto, presiona `a` en tu terminal. Esto intentará abrir tu aplicación en el emulador de Android predeterminado. Asegúrate de que el emulador esté abierto antes de hacer esto.

**Para usuarios de iOS (en Mac):**

1. **Simulador de iOS en Xcode:**
   - Debes tener Xcode instalado en tu Mac. Puedes descargarlo desde la Mac App Store.
   - Asegúrate de tener configurado al menos un simulador en Xcode. Si necesitas configurar un simulador, puedes seguir la [guía de simulador de iOS de Xcode](https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device).
   - Con el Metro Bundler abierto, presiona `i` en tu terminal. Esto abrirá tu aplicación en el simulador de iOS predeterminado.

**Para dispositivos físicos usando Expo Go:**

1. **Uso de la aplicación Expo Go:**
   - Descarga la aplicación Expo Go en tu dispositivo Android o iOS desde Google Play Store o Apple App Store respectivamente.
   - Abre Expo Go y escanea el código QR que aparece en la ventana del Metro Bundler con la cámara de tu dispositivo.
   - Esto cargará automáticamente tu aplicación en tu dispositivo para que puedas verla en acción.
   - Debes estar conectado a la misma red Wi-Fi de la máquina en donde esta corriendo el servidor de desarrollo de Expo.

### Finalización

Para detener el servidor de desarrollo de Expo, simplemente presiona `Ctrl+C` en tu terminal.

// ============================================================
// ARCHIVO: app/_layout.tsx
// QUÉ ES: el "marco" de toda la app. No es una pantalla.
// ESTUDIO (importante): Expo Router usa el nombre del archivo
//   como ruta. "_layout" significa "configuración del grupo".
//   Todo lo que pongas aquí envuelve a las pantallas.
// ============================================================

// ESTUDIO: este import es OBLIGATORIO para NativeWind.
// Sin esta línea, ninguna className funciona.
// Se importa UNA sola vez, aquí, no en cada pantalla.
import '../global.css';

// ESTUDIO: Stack = pila de pantallas.
// Inicio -> Equipos -> Detalle. Al avanzar, la nueva pantalla
// se "apila" encima. Al volver, se "desapila".
// Es la navegación más simple, la que pide la letra.
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* ESTUDIO: cada Stack.Screen conecta un ARCHIVO con un TÍTULO.
          - name="index" -> archivo app/index.tsx -> ruta "/"
          - name="equipos" -> archivo app/equipos.tsx -> ruta "/equipos"
          Si el name no coincide con el archivo, da error 404. */}
      <Stack.Screen name="index" options={{ title: 'SIGMA' }} />
      <Stack.Screen name="equipos" options={{ title: 'Equipos' }} />
      <Stack.Screen name="tareas" options={{ title: 'Tareas' }} />
      <Stack.Screen name="nueva-tarea" options={{ title: 'Nueva tarea' }} />

      {/* LETRA punto 3: ruta dinámica.
          ESTUDIO: "equipos/[id]" conecta con el archivo
          app/equipos/[id].tsx. Los corchetes [ ] significan
          "esta parte cambia": /equipos/eq-1, /equipos/eq-2, etc. */}
      <Stack.Screen name="equipos/[id]" options={{ title: 'Detalle del equipo' }} />
    </Stack>
  );
}

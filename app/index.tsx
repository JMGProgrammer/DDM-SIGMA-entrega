// ============================================================
// ARCHIVO: app/index.tsx  ->  RUTA: "/"
// LETRA punto 1: pantalla de Inicio con menú:
//   - Equipos / - Tareas / - Nueva tarea
// LETRA punto 2: cada botón usa <Link> para navegar.
// NativeWind MÍNIMO: solo fondo, espacio y texto. Nada más.
// ============================================================

// ESTUDIO: Link es como un <a> de HTML.
// href = a qué ruta va. Tiene que coincidir con un archivo.
//   "/equipos" -> app/equipos.tsx (¡sin extensión!)
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Inicio() {
  return (
    // flex-1 = ocupa toda la pantalla
    // bg-slate-100 = fondo gris clarito
    // p-6 = aire interno en todo el borde
    <View className="flex-1 bg-slate-100 p-6">
      {/* bg-white = fondo blanco, p-5 = aire interno */}
      <View className="bg-white p-5">
        {/* text-2xl = letra grande, font-bold = negrita */}
        <Text className="text-2xl font-bold text-slate-900">SIGMA</Text>
        {/* mt-2 = separación arriba, text-slate-600 = gris */}
        <Text className="mt-2 text-base text-slate-600">
          Sistema de Gestión de Mantenimiento
        </Text>
      </View>

      <Text className="mt-6 text-lg font-bold text-slate-900">
        Panel principal
      </Text>

      {/* ============ BOTÓN 1: Equipos ============ */}
      {/* ESTUDIO: Link + asChild + Pressable = "botón que navega".
          Sin asChild, el Link es solo texto.
          Con asChild, el Pressable se vuelve el botón. */}
      <Link href="/equipos" asChild>
        {/* bg-sky-700 = azul, py-4 = alto del botón,
            items-center = centra el texto, mt-4 = separación arriba */}
        <Pressable className="mt-4 items-center bg-sky-700 py-4">
          <Text className="text-base font-bold text-white">Equipos</Text>
        </Pressable>
      </Link>

      {/* ============ BOTÓN 2: Tareas ============ */}
      {/* LETRA punto 2: otro Link, ahora a "/tareas" */}
      <Link href="/tareas" asChild>
        <Pressable className="mt-3 items-center bg-sky-700 py-4">
          <Text className="text-base font-bold text-white">Tareas</Text>
        </Pressable>
      </Link>

      {/* ============ BOTÓN 3: Nueva tarea ============ */}
      {/* LETRA punto 2: tercer Link, a "/nueva-tarea".
          Tiene que ser EXACTO al archivo app/nueva-tarea.tsx. */}
      <Link href="/nueva-tarea" asChild>
        <Pressable className="mt-3 items-center bg-slate-900 py-4">
          <Text className="text-base font-bold text-white">Nueva tarea</Text>
        </Pressable>
      </Link>
    </View>
  );
}

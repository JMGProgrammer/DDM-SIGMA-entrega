// ============================================================
// ARCHIVO: app/nueva-tarea.tsx  ->  RUTA: "/nueva-tarea"
// LETRA punto 1: tercera opción del menú.
// Solo tiene que EXISTIR y abrirse desde Inicio.
// NativeWind MÍNIMO: solo fondo, espacio y texto.
// ============================================================

import { Text, View } from 'react-native';

export default function NuevaTarea() {
  return (
    // items-center + justify-center = centra todo en la pantalla
    <View className="flex-1 items-center justify-center bg-slate-100 p-6">
      <View className="w-full bg-white p-5">
        <Text className="text-xl font-bold text-slate-900">Nueva tarea</Text>
        <Text className="mt-2 text-base text-slate-600">
          Acá irá el formulario para crear una tarea.
        </Text>
      </View>
    </View>
  );
}

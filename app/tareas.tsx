// ============================================================
// ARCHIVO: app/tareas.tsx  ->  RUTA: "/tareas"
// LETRA punto 1: una de las 3 opciones del menú.
// Pantalla simple, sin ruta dinámica.
// NativeWind MÍNIMO: solo fondo, espacio y texto.
// ============================================================

import { Text, View } from 'react-native';

const TAREAS = [
  { id: 'OT-104', titulo: 'Revisar bomba de agua' },
  { id: 'OT-105', titulo: 'Cambiar filtro compresor' },
];

export default function Tareas() {
  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-xl font-bold text-slate-900">Tareas</Text>

      {TAREAS.map((tarea) => (
        <View key={tarea.id} className="mb-3 mt-3 bg-white p-5">
          <Text className="text-sm font-bold text-sky-700">{tarea.id}</Text>
          <Text className="mt-1 text-base font-bold text-slate-900">
            {tarea.titulo}
          </Text>
        </View>
      ))}
    </View>
  );
}

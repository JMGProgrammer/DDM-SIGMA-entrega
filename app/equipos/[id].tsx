// ============================================================
// ARCHIVO: app/equipos/[id].tsx  ->  RUTA: "/equipos/eq-1", etc.
// LETRA punto 3: corchetes [id] = RUTA DINÁMICA.
//   Un solo archivo atiende eq-1, eq-2, eq-3...
// LETRA punto 4: muestra el detalle del equipo elegido.
// NativeWind MÍNIMO: solo fondo, espacio y texto.
// ============================================================

// ESTUDIO: useLocalSearchParams lee lo que viene en la URL.
// Si la URL es /equipos/eq-2, entonces id = "eq-2".
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

// Misma lista que en equipos.tsx (copiada para no usar imports raros).
const EQUIPOS = [
  { id: 'eq-1', nombre: 'Bomba de agua', estado: 'Operativo' },
  { id: 'eq-2', nombre: 'Compresor taller', estado: 'En revisión' },
  { id: 'eq-3', nombre: 'Tablero eléctrico', estado: 'Operativo' },
];

export default function DetalleEquipo() {
  // ESTUDIO: sacamos "id" de la URL.
  // Tiene que llamarse igual que el archivo: [id] <-> { id }.
  const { id } = useLocalSearchParams<{ id: string }>();

  // ESTUDIO: buscamos el equipo con ese id.
  const equipo = EQUIPOS.find((e) => e.id === id);

  if (!equipo) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-100 p-6">
        <Text className="text-lg font-bold text-slate-900">
          Equipo no encontrado: {id}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-sm font-bold text-sky-700">ID: {equipo.id}</Text>

      <Text className="mt-2 text-2xl font-bold text-slate-900">
        {equipo.nombre}
      </Text>

      {/* Tarjeta blanca con el detalle */}
      <View className="mt-4 bg-white p-5">
        <Text className="text-base font-bold text-slate-900">Estado</Text>
        <Text className="mt-1 text-base text-slate-600">{equipo.estado}</Text>

        <Text className="mt-4 text-base font-bold text-slate-900">
          Descripción
        </Text>
        <Text className="mt-1 text-base text-slate-600">
          Equipo registrado en SIGMA.
        </Text>
      </View>
    </View>
  );
}

// ============================================================
// ARCHIVO: app/equipos.tsx  ->  RUTA: "/equipos"
// LETRA punto 4: al tocar un equipo se abre su detalle
//   usando la ruta dinámica /equipos/eq-1, /equipos/eq-2...
// NativeWind MÍNIMO: solo fondo, espacio y texto.
// ============================================================

import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

// ESTUDIO: datos falsos para practicar.
// Cada equipo tiene un "id" único. Ese id viaja en la URL.
const EQUIPOS = [
  { id: 'eq-1', nombre: 'Bomba de agua', estado: 'Operativo' },
  { id: 'eq-2', nombre: 'Compresor taller', estado: 'En revisión' },
  { id: 'eq-3', nombre: 'Tablero eléctrico', estado: 'Operativo' },
];

export default function Equipos() {
  return (
    <View className="flex-1 bg-slate-100 p-6">
      <Text className="text-xl font-bold text-slate-900">Equipos</Text>
      <Text className="mt-1 text-base text-slate-600">
        Tocá un equipo para ver su detalle.
      </Text>

      {/* ESTUDIO: .map dibuja una tarjeta por equipo.
          key={equipo.id} ayuda a React a saber cuál es cuál. */}
      {EQUIPOS.map((equipo) => (
        // LETRA punto 2 + punto 4: cada tarjeta es un Link
        // a la ruta DINÁMICA: "/equipos/" + id.
        // Ejemplo: "/equipos/eq-1" abre [id].tsx con id = "eq-1"
        <Link key={equipo.id} href={`/equipos/${equipo.id}`} asChild>
          {/* mb-3 = separación entre tarjetas, bg-white = tarjeta blanca */}
          <Pressable className="mb-3 mt-3 bg-white p-5">
            <Text className="text-base font-bold text-slate-900">
              {equipo.nombre}
            </Text>
            <Text className="mt-1 text-sm text-slate-500">{equipo.estado}</Text>
            <Text className="mt-2 text-sm font-bold text-sky-700">
              Ver detalle
            </Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

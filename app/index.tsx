import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Registro = {
  id_registro: number;
  habitat: string;
  estado_validacion: string;
  planta: {
    nombre_cientifico: string;
    nombre_local_principal: string;
  };
  comunidad: {
    nombre: string;
    provincia: string;
  };
  usuario: {
    nombre: string;
    rol: string;
  };
};

export default function Index() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    async function cargarRegistros() {
      try {
        const respuesta = await fetch(`${API_URL}/api/registros`);
        const json = await respuesta.json();

        if (!respuesta.ok || !json.exito) {
          throw new Error("No se pudo consultar BioSacha API");
        }

        setRegistros(json.datos);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error de conexión");
      } finally {
        setCargando(false);
      }
    }

    cargarRegistros();
  }, []);

  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <Text style={styles.titulo}>BioSacha</Text>
        <Text style={styles.subtitulo}>
          Registros botánicos BioSacha • Semana 9
        </Text>

        <View style={styles.estado}>
          <Text style={styles.estadoTexto}>
            API: {API_URL}
          </Text>
        </View>

        {cargando && (
          <ActivityIndicator size="large" style={styles.cargando} />
        )}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {registros.map((registro) => (
          <View key={registro.id_registro} style={styles.tarjeta}>
            <Text style={styles.nombre}>
              {registro.planta.nombre_local_principal}
            </Text>

            <Text style={styles.cientifico}>
              {registro.planta.nombre_cientifico}
            </Text>

            <Text style={styles.texto}>
              Comunidad: {registro.comunidad.nombre}
            </Text>

            <Text style={styles.texto}>
              Provincia: {registro.comunidad.provincia}
            </Text>

            <Text style={styles.texto}>
              Hábitat: {registro.habitat}
            </Text>

            <Text style={styles.texto}>
              Registrado por: {registro.usuario.nombre}
            </Text>

            <Text style={styles.validado}>
              Estado: {registro.estado_validacion}
            </Text>
          </View>
        ))}

        {!cargando && !error && registros.length === 0 && (
          <Text style={styles.texto}>No existen registros.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F2F7F3",
  },
  contenido: {
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "700",
    color: "#174D32",
  },
  subtitulo: {
    fontSize: 17,
    marginTop: 6,
    marginBottom: 20,
    color: "#52635A",
  },
  estado: {
    backgroundColor: "#E4EFE7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  estadoTexto: {
    color: "#174D32",
    fontSize: 12,
  },
  cargando: {
    marginTop: 40,
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
  },
  nombre: {
    fontSize: 25,
    fontWeight: "700",
    color: "#174D32",
  },
  cientifico: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 4,
    marginBottom: 14,
    color: "#617067",
  },
  texto: {
    fontSize: 15,
    marginBottom: 7,
    color: "#29352F",
  },
  validado: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
    color: "#237A45",
  },
  error: {
    color: "#B42318",
    marginTop: 20,
    fontSize: 16,
  },
});

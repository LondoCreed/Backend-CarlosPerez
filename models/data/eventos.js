import "dotenv/config.js"
import '../../config/database.js'
import Evento from '../Evento.js'

const eventos = [
    {
      titulo: "Concierto de Rock",
      descripcion: "Concierto de bandas locales de rock",
      fecha: new Date("2024-07-15T20:00:00"),
      ubicacion: "Estadio Municipal",
      capacidad: 5000,
      precio: 45.00,
      organizador: "RockCity Productions",
      tipoEvento: "Música",
      esPublico: true,
      participantes: ["Banda1", "Banda2", "Banda3"],
      duracion: 180
    },
    {
      titulo: "Conferencia de Tecnología",
      descripcion: "Últimas tendencias en IA y Machine Learning",
      fecha: new Date("2024-09-10T09:00:00"),
      ubicacion: "Centro de Convenciones",
      capacidad: 1000,
      precio: 199.99,
      organizador: "TechSummit Inc.",
      tipoEvento: "Conferencia",
      esPublico: true,
      participantes: [],
      duracion: 480
    },
    {
      titulo: "Maratón Ciudadana",
      descripcion: "Carrera anual de 42km por la ciudad",
      fecha: new Date("2024-04-22T07:00:00"),
      ubicacion: "Plaza Central",
      capacidad: 10000,
      precio: 25.00,
      organizador: "Club de Atletismo",
      tipoEvento: "Deportivo",
      esPublico: true,
      participantes: [],
      duracion: 360
    },
    {
      titulo: "Exposición de Arte Moderno",
      descripcion: "Muestra de artistas contemporáneos",
      fecha: new Date("2024-08-05T10:00:00"),
      ubicacion: "Galería de Arte Municipal",
      capacidad: 500,
      precio: 15.00,
      organizador: "Asociación de Artistas",
      tipoEvento: "Cultural",
      esPublico: true,
      participantes: ["Artista1", "Artista2", "Artista3", "Artista4"],
      duracion: 480
    },
    {
      titulo: "Festival Gastronómico",
      descripcion: "Degustación de platos típicos",
      fecha: new Date("2024-06-20T12:00:00"),
      ubicacion: "Parque Central",
      capacidad: 3000,
      precio: 30.00,
      organizador: "Asociación de Restaurantes",
      tipoEvento: "Gastronomía",
      esPublico: true,
      participantes: [],
      duracion: 360
    },
    {
      titulo: "Seminario de Marketing Digital",
      descripcion: "Estrategias de marketing para redes sociales",
      fecha: new Date("2024-10-15T14:00:00"),
      ubicacion: "Hotel Business Center",
      capacidad: 200,
      precio: 149.99,
      organizador: "DigitalPro Academy",
      tipoEvento: "Educativo",
      esPublico: false,
      participantes: [],
      duracion: 240
    },
    {
      titulo: "Feria del Libro",
      descripcion: "Presentaciones y venta de libros",
      fecha: new Date("2024-05-01T09:00:00"),
      ubicacion: "Centro de Exposiciones",
      capacidad: 5000,
      precio: 5.00,
      organizador: "Asociación de Libreros",
      tipoEvento: "Cultural",
      esPublico: true,
      participantes: [],
      duracion: 600
    },
    {
      titulo: "Torneo de Ajedrez",
      descripcion: "Competencia nacional de ajedrez",
      fecha: new Date("2024-11-10T10:00:00"),
      ubicacion: "Club de Ajedrez",
      capacidad: 100,
      precio: 20.00,
      organizador: "Federación Nacional de Ajedrez",
      tipoEvento: "Deportivo",
      esPublico: true,
      participantes: [],
      duracion: 480
    },
    {
      titulo: "Concierto Sinfónico",
      descripcion: "Obras clásicas interpretadas por la orquesta municipal",
      fecha: new Date("2024-12-20T19:30:00"),
      ubicacion: "Teatro de la Ciudad",
      capacidad: 800,
      precio: 60.00,
      organizador: "Sociedad Filarmónica",
      tipoEvento: "Música",
      esPublico: true,
      participantes: ["Director", "Solista1", "Solista2"],
      duracion: 120
    },
    {
      titulo: "Taller de Fotografía",
      descripcion: "Técnicas avanzadas de fotografía digital",
      fecha: new Date("2024-07-05T16:00:00"),
      ubicacion: "Estudio Fotográfico Central",
      capacidad: 30,
      precio: 80.00,
      organizador: "Asociación de Fotógrafos",
      tipoEvento: "Educativo",
      esPublico: false,
      participantes: [],
      duracion: 180
    }
  ];

  Evento.insertMany(eventos)
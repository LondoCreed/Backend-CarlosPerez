import "dotenv/config.js"
import '../../config/database.js'
import Producto from '../Producto.js'

const productos = [
    {
      nombre: "Smartphone XYZ",
      descripcion: "Último modelo con cámara de alta resolución",
      precio: 799.99,
      categoria: "Electrónica",
      enStock: true,
      cantidadDisponible: 50,
      fechaCreacion: new Date("2024-03-15"),
      fabricante: "TechCorp",
      peso: 0.18,
      dimensiones: { largo: 15, ancho: 7, alto: 0.8 }
    },
    {
      nombre: "Zapatillas Deportivas Pro",
      descripcion: "Ideales para correr largas distancias",
      precio: 129.99,
      categoria: "Calzado Deportivo",
      enStock: true,
      cantidadDisponible: 100,
      fechaCreacion: new Date("2024-02-20"),
      fabricante: "SportyBrands",
      peso: 0.3,
      dimensiones: { largo: 30, ancho: 12, alto: 10 }
    },
    {
      nombre: "Libro: 'El Arte de la Programación'",
      descripcion: "Guía completa para programadores",
      precio: 49.99,
      categoria: "Libros",
      enStock: true,
      cantidadDisponible: 200,
      fechaCreacion: new Date("2024-01-10"),
      fabricante: "EditorialTech",
      peso: 0.8,
      dimensiones: { largo: 25, ancho: 18, alto: 3 }
    },
    {
      nombre: "Cafetera Automática",
      descripcion: "Prepara café espresso y cappuccino",
      precio: 299.99,
      categoria: "Electrodomésticos",
      enStock: false,
      cantidadDisponible: 0,
      fechaCreacion: new Date("2024-03-01"),
      fabricante: "HomeTech",
      peso: 5,
      dimensiones: { largo: 40, ancho: 30, alto: 35 }
    },
    {
      nombre: "Set de Pinceles Artísticos",
      descripcion: "20 pinceles de diferentes tamaños",
      precio: 34.99,
      categoria: "Arte",
      enStock: true,
      cantidadDisponible: 75,
      fechaCreacion: new Date("2024-02-05"),
      fabricante: "ArtSupplies",
      peso: 0.2,
      dimensiones: { largo: 20, ancho: 10, alto: 5 }
    },
    {
      nombre: "Monitor 4K 32''",
      descripcion: "Monitor de alta resolución para gaming",
      precio: 499.99,
      categoria: "Electrónica",
      enStock: true,
      cantidadDisponible: 30,
      fechaCreacion: new Date("2024-03-10"),
      fabricante: "ScreenMasters",
      peso: 7,
      dimensiones: { largo: 71, ancho: 42, alto: 18 }
    },
    {
      nombre: "Batería de Cocina",
      descripcion: "Set de 10 piezas antiadherentes",
      precio: 159.99,
      categoria: "Hogar",
      enStock: true,
      cantidadDisponible: 40,
      fechaCreacion: new Date("2024-01-25"),
      fabricante: "KitchenPro",
      peso: 5,
      dimensiones: { largo: 50, ancho: 30, alto: 20 }
    },
    {
      nombre: "Drone con Cámara HD",
      descripcion: "Drone para fotografía aérea",
      precio: 399.99,
      categoria: "Electrónica",
      enStock: true,
      cantidadDisponible: 25,
      fechaCreacion: new Date("2024-02-28"),
      fabricante: "SkyView",
      peso: 0.5,
      dimensiones: { largo: 30, ancho: 30, alto: 10 }
    },
    {
      nombre: "Guitarra Eléctrica",
      descripcion: "Guitarra profesional de 6 cuerdas",
      precio: 799.99,
      categoria: "Instrumentos Musicales",
      enStock: true,
      cantidadDisponible: 15,
      fechaCreacion: new Date("2024-03-05"),
      fabricante: "MusicMasters",
      peso: 3.5,
      dimensiones: { largo: 100, ancho: 30, alto: 5 }
    },
    {
      nombre: "Juego de Maletas",
      descripcion: "Set de 3 maletas resistentes",
      precio: 199.99,
      categoria: "Viaje",
      enStock: true,
      cantidadDisponible: 35,
      fechaCreacion: new Date("2024-02-15"),
      fabricante: "TravelPro",
      peso: 10,
      dimensiones: { largo: 75, ancho: 50, alto: 30 }
    }
  ];

  Producto.insertMany(productos)
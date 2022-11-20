module.exports = function () {
	var data = {
		categoria: [
			{
				id: 1,
				nomCategoria: "Lácteos",
			},
			{
				id: 2,
				nomCategoria: "Bebidas",
			},
			{
				id: 3,
				nomCategoria: "Menestras",
			},
			{
				id: 4,
				nomCategoria: "Verduras",
			}
		],
		producto: [
			{
				id: 1,
				desProducto: "Yogurt",
				marcaProducto: "Gloria",
				categoria: { id: 1 },
				vendedor: { id: 3 },
				notificacion: { id: 1}
			},
			{
				id: 2,
				desProducto: "Fanta",
				marcaProducto: "Coca Cola",
				categoria: { id: 2 },
				vendedor: { id: 1 },
				notificacion: { id: 3}
			}
		],
		vendedor: [
			{
				id: 1,
				nomVendedor: "Pedro",
				dniVendedor: 76458921,
				edadVendedor: 28,
				celVendedor: 958674231,
				emailVendedor: "pedro256@gmail.com",
				username: "pedro21",
				password: "pedritotec"
			},
			{
				id: 2,
				nomVendedor: "Juan",
				dniVendedor: 76445921,
				edadVendedor: 21,
				celVendedor: 958452145,
				emailVendedor: "juan212@gmail.com",
				username: "juant2",
				password: "juanito22"
			},
			{
				id: 3,
				nomVendedor: "Jose",
				dniVendedor: 74589123,
				edadVendedor: 38,
				celVendedor: 958674511,
				emailVendedor: "pjose2@gmail.com",
				username: "josese2",
				password: "jos221"
			}
		],
		donacion: [{
			id: 1,
			nomDona: "San Bernardo",
			producto: { id: 1 },
			cantidad: 50,
			direccion: "av.las lilas 563"
		},
		{
			id: 2,
			nomDona: "San Jacinto",
			producto: { id: 2 },
			cantidad: 30,
			direccion: "av.las constructores 123"
		}
		],
		notificacion: [{

			id: 1,
			fechaCaducidad: "30-09-2022",
			stock: 20
		},
		{
			id: 2,
			fechaCaducidad: "25-10-2022",
			stock: 10
		},
		{
			id: 3,
			fechaCaducidad: "27-01-2023",
			stock: 13
		}

		],
		consumidor: [
			{
				id: 1,
				nomConsumidor: "Roberto",
				dniConsumidor: "57896425",
				edadConsumidor: "20",
				celConsumidor: "909015386",
				emailConsumidor: "roberto@gmail.com",
				username: "Roberto90",
				password: "123roberto"
			},
			{
				id: 2,
				nomConsumidor: "Maria",
				dniConsumidor: "57896428",
				edadConsumidor: "40",
				celConsumidor: "956874123",
				emailConsumidor: "maria@gmail.com",
				username: "Maria45",
				password: "marisd"
			},
			{
				id: 3,
				nomConsumidor: "Juan",
				dniConsumidor: "78541235",
				edadConsumidor: "92",
				celConsumidor: "875015386",
				emailConsumidor: "juansiro@gmail.com",
				username: "Juan20",
				password: "123juan"
			},
			{
				id: 4,
				nomConsumidor: "Josi",
				dniConsumidor: "58947632",
				edadConsumidor: "36",
				celConsumidor: "948756321",
				emailConsumidor: "joselin@gmail.com",
				username: "josileon",
				password: "859josi"
			}
		],
		reporte: [
			{
				id: 1,
				descripReporte: "la aplicación no me deja comprar",
				consumidor: {
					id: 2
				},
				vendedor: {
					id: 2
				}
			},
			{
				id: 2,
				descripReporte: "no aparece mi informacion de vendedor",
				consumidor: {
					id: 3
				},
				vendedor: {
					id: 1
				}

			},
			{
				id: 3,
				descripReporte: "no veo las ofertas",
				consumidor: {
					id: 4
				},
				vendedor: {
					id: 3
				}
			},
			{
				id: 4,
				descripReporte: "me sale error cuando trato de modificar mi ubicación",
				consumidor: {
					id: 2
				},
				vendedor: {
					id: 3
				}
			},
		],
		factura: [
			{
				id: 1,
				consumidor: {
					id: 2
				},
				detalleVenta: {
					id: 1
				}
			},
			{
				id: 2,
				consumidor: {
					id: 3
				},
				detalleVenta: {
					id: 2
				}
			},
			{
				id: 3,
				consumidor: {
					id: 4
				},
				detalleVenta: {
					id: 3
				}
			},
			
		],
		detalleventa: [
			{
				id: 1,
				oferta: {
					id: 2
				},
				cantidadVenta: 123,
				totalVenta: 458
			},
			{
				id: 2,
				oferta: {
					id: 3
				},
				cantidadVenta: 47,
				totalVenta: 500
			},
			{
				id: 3,
				oferta: {
					id: 4
				},
				cantidadVenta: 49,
				totalVenta: 430
			},
			
		],
		oferta: [
			{
				id: 1,
				desOferta: 10,
				PrecioOferta: 157,
				fechaPublicacion: "15-12-2020",
				producto: {
					id: 1
				}
			},
			{
				id: 2,
				desOferta: 20,
				PrecioOferta: 170,
				fechaPublicacion: "12-12-2020",
				producto: {
					id: 2
				}
			},
			{
				id: 3,
				desOferta:50,
				PrecioOferta: 300,
				fechaPublicacion: "15-11-2020",
				producto: {
					id: 1
				}
			},
			{
				id: 4,
				desOferta: 16,
				PrecioOferta: 56,
				fechaPublicacion: "10-12-2020",
				producto: {
					id: 2
				}
			}
		]
	}
	return data
}




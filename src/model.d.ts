// declare global {

	interface Category {
		id: number
		name: string
		description: string
	}
	interface Customer {
		id: string
		name: string
		contact: string
		phone: string
		address: string
		city: string
		region: string
		postalCode: string
		country: string
		// eslint-disable-next-line no-use-before-define
		orders: ManyToOne<Order>
	}
	interface Employee {
		id: number
		lastName: string
		firstName: string
		title: string
		titleOfCourtesy: string
		birthDate: Date
		hireDate: Date
		phone: string
		reportsToId: number
		address: string
		city: string
		region: string
		postalCode: string
		country: string
		reportsTo: Employee & OneToMany<Employee>
	}
	interface Shipper {
		id: number
		name: string
		phone: string
	}
	interface Supplier {
		id: number
		name: string
		contact: string
		phone: string
		homepage: string
		address: string
		city: string
		region: string
		postalCode: string
		country: string
	}
	interface Product {
		id: number
		name: string
		supplierId: number
		categoryId: number
		quantity: string
		price: number
		inStock: number
		onOrder: number
		reorderLevel: number
		discontinued: boolean
		supplier: Supplier & OneToMany<Supplier>
		category: Category & OneToMany<Category>
	}
	interface Order {
		id: number
		customerId: string
		employeeId: number
		orderDate: Date
		requiredDate: Date
		shippedDate: Date
		shipViaId: number
		freight: number
		name: string
		address: string
		city: string
		region: string
		postalCode: string
		country: string
		customer: Customer & OneToMany<Customer>
		employee: Employee & OneToMany<Employee>
		// eslint-disable-next-line no-use-before-define
		details: ManyToOne<OrderDetail>
	}
	interface OrderDetail {
		orderId: number
		productId: number
		unitPrice: number
		quantity: number
		discount: number
		order: Order & OneToMany<Order>
		product: Product & OneToMany<Product>
	}
declare const Categories: Entity<Category>
declare const Customers: Entity<Customer>
declare const Employees: Entity<Employee>
declare const Shippers: Entity<Shipper>
declare const Suppliers: Entity<Supplier>
declare const Products: Entity<Product>
declare const Orders: Entity<Order>
declare const OrderDetails: Entity<OrderDetail>

// }
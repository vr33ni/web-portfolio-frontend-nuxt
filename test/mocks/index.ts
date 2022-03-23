// import { generateID, generateOrderNumber } from './utils'
// import {
//   Order,
//   User,
//   OrderPosition,
//   Product,
//   OrderStatus,
//   PositionStatus,
//   LicenseTypes,
// } from '~/models'
// export * from './utils'

// export const getMockedUser = (): User => ({
//   id: generateID(),
//   firstname: 'John',
//   lastname: 'Mocklastname',
//   username: 'MockUsername',
//   image: undefined,
//   mailAddress: 'john.noname@mail-mock.mock',
// })

// export const getMockedProduct = (): Product =>
//   new Product({
//     name: 'Mock name',
//     description: 'Mock description of the tool.',
//     version: '1.2.3-456',
//     image: undefined,
//     featureID: 'feature.test',
//   })

// export const getMockedPosition = (
//   isResponsible: boolean = true,
//   status?: PositionStatus
// ): OrderPosition =>
//   new OrderPosition({
//     id: generateID(),
//     productID: getMockedProduct(),
//     licenseType: LicenseTypes[0].type,
//     status: status || PositionStatus.Created,
//     licenseExpirationDate: new Date('2020-07-29T09:51:05.975Z'),
//     isResponsible,
//   })

// export const getMockedOrders = (count: number = 10): Order[] => {
//   const orders = []
//   for (let i = 0; i < count; i++) {
//     orders.push(getMockedOrder(OrderStatus.Created))
//   }
//   return orders
// }

// export const getMockedOrder = (
//   status: OrderStatus = OrderStatus.Created
// ): Order => {
//   return new Order({
//     id: generateID(),
//     orderNumber: generateOrderNumber(),
//     orderDate: new Date('2020-07-29T09:51:05.975Z'),
//     customer: getMockedUser(),
//     status,
//     positions: [
//       getMockedPosition(),
//       getMockedPosition(false),
//       getMockedPosition(),
//     ],
//   })
// }

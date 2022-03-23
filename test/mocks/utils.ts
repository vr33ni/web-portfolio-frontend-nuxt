export const mockRequest = (
  returnValue: any,
  duration: number = 1
): Promise<any> => {
  return new Promise<any>((resolve) => {
    setTimeout(() => resolve(returnValue), duration * 1000)
  })
}

export function generateOrderNumber(): string {
  return Math.floor(
    Math.random() * Math.pow(10, 8) + Math.pow(10, 8)
  ).toString()
}

let generateIDCount = 0
export function generateID(): string {
  return (generateIDCount++).toString()
}

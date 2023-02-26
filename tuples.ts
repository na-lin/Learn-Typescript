// RGB color
const color: [number, number, number] = [255, 0, 255];

// status code , status
type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "Ok"];

goodRes[0] = "200";
goodRes.push("xx"); // werid don't warning

// Enums
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const orderStatus = OrderStatus.PENDING;
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
console.log(orderStatus);

const enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
const action = ArrowKeys.UP;

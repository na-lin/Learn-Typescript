// RGB color
var color = [255, 0, 255];
var goodRes = [200, "Ok"];
goodRes[0] = "200";
goodRes.push("xx"); // werid don't warning
// Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = OrderStatus.PENDING;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
console.log(orderStatus);
var action = "up" /* ArrowKeys.UP */;

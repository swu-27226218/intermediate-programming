const products = [
  { name: "ノート", price: 1200 },
  { name: "ペン", price: 300 },
  { name: "バッグ", price: 2500 }
];

for (const product of products) {
  console.log(product.name + "：" + product.price + "円");
}

let total = 0;

function calculate() {
  const result = document.getElementById("result");
  total = 0;

  try {
    for (const product of products) {
      if (product.name === "ペン") {
        continue;
      }

      total += product.price;

      if (total > 3000) {
        break;
      }
    }

    const membership = document.getElementById("membership").value;
    let discountRate;

    switch (membership) {
      case "general":
        discountRate = 0;
        break;
      case "member":
        discountRate = 0.05;
        break;
      case "premium":
        discountRate = 0.10;
        break;
      default:
        throw new Error("会員区分を正しく選択してください。");
    }

    const discount = total * discountRate;
    let shipping;

    if (total >= 5000) {
      shipping = 0;
    } else {
      shipping = 500;
    }

    const paymentTotal = total - discount + shipping;
    let message;

    if (paymentTotal >= 5000) {
      message = "ご購入ありがとうございます";
    } else {
      message = "あと少しで送料無料です";
    }

    result.textContent =
      "商品合計：" + total.toLocaleString() + "円\n" +
      "割引額：" + discount.toLocaleString() + "円\n" +
      "送料：" + shipping.toLocaleString() + "円\n" +
      "支払合計：" + paymentTotal.toLocaleString() + "円\n" +
      message;
    result.style.whiteSpace = "pre-line";

    console.log("totalのデータ型：" + typeof total);
  } catch (error) {
    result.textContent = "エラー：" + error.message;
  }
}

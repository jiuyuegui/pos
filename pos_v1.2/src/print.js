function fix(float,x) {
  return float.toFixed(x);
}

function title1() {
  return "***<没钱赚商店>购物清单***\n";
}

function title2(total,save) {
  return '----------------------\n'+'总计：' + fix(total,2) + '(元)\n' + '节省：'
         + fix(save,2)+'(元)\n' + '**********************';
}

function printList(printInfo) {
  var s2 = '----------------------\n挥泪赠送商品：\n',s1 = "";
  var promot_price = total_price = save_price = 0.00;
  for(var m = 0; m<printInfo.length; m++)
  {
    promot_price = printInfo[m].num * printInfo[m].price;
    if(printInfo[m].favorable)
    {
      promot_price -= printInfo[m].price;
      s2 += '名称：' + printInfo[m].name + '，数量：1' + printInfo[m].unit + '\n';
      save_price += printInfo[m].price;
    }
    s1 += '名称：' + printInfo[m].name + '，数量：' + printInfo[m].num + printInfo[m].unit + '，单价：'
          + fix(printInfo[m].price,2) + '(元)，小计：' + fix(promot_price,2) + '(元)\n';
    total_price += promot_price;
  }
  console.log(title1() + s1 + s2 + title2(total_price,save_price));
}

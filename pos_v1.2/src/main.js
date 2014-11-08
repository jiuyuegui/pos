function printInventory(inputs,Reg) {
  var tidyInputs = delRepeatBarcode(inputs,Reg);    //规整长短不一的barcode
  function dealItems(allItems,promotions) {         //根据商品和促销信息输出打印信息对象
    var outputs = [];
    for(var key in tidyInputs)
      outputs.push(matchItems(key,allItems,promotions,tidyInputs));
    return outputs;
  }
  return dealItems;
}

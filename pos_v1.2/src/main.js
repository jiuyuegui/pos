function printInventory(inputs,allItems,promotions) {
  var tidyInputs = delRepeatBarcode(inputs,/-/g);    //规整barcode

  function dealItems(allItems,promotions) {
    var outputs = [];

    for(var key in tidyInputs)
      outputs.push(matchItems(key,allItems,promotions,tidyInputs));
    return outputs;
  }
  
  return dealItems(allItems,promotions);
}

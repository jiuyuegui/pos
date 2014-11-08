function matchPromotions(key,promotions,tidyInputs) {
  for(var k = 0; k<promotions[0].barcodes.length; k++)
    if((key == promotions[0].barcodes[k]) && (tidyInputs[key] >= 2))
    {
      return true;
      break;
    }
}

function matchItems(key,allItems,promotions,tidyInputs) {
  var output;
  for(var j = 0; j<allItems.length; j++)
    if(key == allItems[j].barcode)
    {
       output = {name:allItems[j].name,num:tidyInputs[key],
               unit:allItems[j].unit,price:allItems[j].price,favorable:false};
       output.favorable = matchPromotions(key,promotions,tidyInputs);//标记促销商品
       break;
    }
  return output;
}

function unify(input,Reg) {
  var index = input.search(Reg);
  var n = parseInt(input.substr(index+1,(input.length)));//数量截取
  input = input.substr(0,index);                         //barcode截取
  return [input,n];
}

function delRepeatBarcode(inputs,Reg) {
  var tidyInputs = {};
  for(var i = 0; i<inputs.length; i++) {
    var n = 1;
    if(Reg.test(inputs[i])) {
      var outcome = unify(inputs[i],Reg);
      inputs[i] = outcome[0];
      n = outcome[1];
    }
    var key = inputs[i];
    if(!tidyInputs[key]) {
        tidyInputs[key] = 0;
    }
    tidyInputs[key] += n;
  }
  return tidyInputs;
}
